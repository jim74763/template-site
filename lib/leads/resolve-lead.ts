import "server-only";
import { instantlyClient } from "@/lib/instantly/client";
import { normalize } from "../helpers/normalize";

export async function resolveLead(email: string) {
  const query = normalize(email);
  if (!query) return null;
  try {
    const response = await instantlyClient.leads.list({
      contacts: [query],
      limit: 1,
    });
    return response?.items.find((lead) => normalize(lead.email) === query)?.id ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
}
