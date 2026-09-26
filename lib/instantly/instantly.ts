import { Instantly } from "@instantlyai/sdk";

const apiKey = process.env.INSTANTLY_API_KEY;

if (!apiKey) {
  throw new Error("INSTANTLY_API_KEY is not set");
}

export const instantly = new Instantly({ apiKey });
