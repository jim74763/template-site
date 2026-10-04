import { zodResponseFormat } from "openai/helpers/zod";
import type { z } from "zod";

import {
  assertOpenRouterConfigured,
  type ChatMessage,
  OPENROUTER_MODEL,
  openrouterClient,
} from "./client";

const TIMEOUT_MS = 120_000;

export async function chatStructured<TSchema extends z.ZodType>(
  messages: ChatMessage[],
  name: string,
  schema: TSchema,
) {
  assertOpenRouterConfigured();

  const response = await openrouterClient.chat.completions.parse({
    model: OPENROUTER_MODEL as string,
    messages,
    response_format: zodResponseFormat(schema, name),
    temperature: 0.7,
  }, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const message = response.choices[0]?.message;
  if (!message) throw new Error("OpenRouter returned no response message");
  if (message.refusal) throw new Error(`OpenRouter refused the request: ${message.refusal}`);
  if (!message.parsed) throw new Error("OpenRouter returned no parsed structured output");

  return message.parsed;
}
