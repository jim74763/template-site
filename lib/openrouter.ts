import "server-only";

export const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL ?? "anthropic/claude-sonnet-4.5";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// Calls OpenRouter's OpenAI compatible chat endpoint and parses the reply as JSON.
export async function chatJson<T>(messages: ChatMessage[]): Promise<T> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY is not set");

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://template.jimvd.xyz",
      "X-Title": "Jimvd Template Site",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages,
      response_format: { type: "json_object" },
      temperature: 0.7,
    }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`OpenRouter request failed: ${res.status} ${await res.text()}`);

  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = data.choices?.[0]?.message?.content ?? "";

  // Some models wrap JSON in code fences despite response_format.
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  return JSON.parse(json) as T;
}
