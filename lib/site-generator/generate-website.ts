// Calls OpenRouter's OpenAI compatible chat endpoint and parses the reply as JSON.
export async function chatJson<T>(messages: ChatMessage[]): Promise<T> {
  if (!process.env.OPENROUTER_API_KEY) throw new Error("OPENROUTER_API_KEY is not set");

  const res = await openrouterClient.chat.completions.create({
    model: OPENROUTER_MODEL,
    messages,
    response_format: { type: "json_object" },
    temperature: 0.7,
  });

  // Some models wrap JSON in code fences despite response_format.
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  return JSON.parse(json) as T;
}
