import "server-only";

// Subset of the Instantly API v2 lead object we rely on. The full object is kept in `raw`.
export interface InstantlyLead {
  id: string;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  company_name?: string | null;
  company_domain?: string | null;
  website?: string | null;
  phone?: string | null;
  personalization?: string | null;
  payload?: Record<string, unknown> | null;
  [key: string]: unknown;
}

export async function getInstantlyLead(leadId: string): Promise<InstantlyLead | null> {
  const apiKey = process.env.INSTANTLY_API_KEY;
  if (!apiKey) throw new Error("INSTANTLY_API_KEY is not set");

  const res = await fetch(`https://api.instantly.ai/api/v2/leads/${encodeURIComponent(leadId)}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Instantly lead fetch failed: ${res.status} ${await res.text()}`);

  return (await res.json()) as InstantlyLead;
}
