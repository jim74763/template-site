import OpenAI from "openai";
import "server-only";

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) throw new Error("OPENROUTER_API_KEY not set");

export const openrouterClient = new OpenAI({
  apiKey,
  baseURL: "https://openrouter.ai/api/v1",
})
