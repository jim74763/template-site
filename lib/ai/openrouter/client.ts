import OpenAI from "openai";
import "server-only";

export const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL;

export type ChatMessage = OpenAI.Chat.Completions.ChatCompletionMessageParam;

export const openrouterClient = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY ?? "missing",
  baseURL: "https://openrouter.ai/api/v1",
});

export function assertOpenRouterConfigured() {
  if (!process.env.OPENROUTER_API_KEY) throw new Error("OPENROUTER_API_KEY is not set");
  if (!OPENROUTER_MODEL) throw new Error("OPENROUTER_MODEL is not set");
}
