import { iconMap } from "@/components/shared/icon-map";

const LOCKED_KEYS = new Set(["image", "backgroundImage", "width", "height"]);
const OPTIONAL_KEYS = new Set(["openingHours", "location"]);

export function mergeGenerated<T>(defaults: T, generated: unknown, key?: string): T {
  if (key && OPTIONAL_KEYS.has(key) && generated === null) return null as T;

  if (typeof defaults === "string") {
    if (key && LOCKED_KEYS.has(key)) return defaults;
    if (typeof generated !== "string" || !generated.trim()) return defaults;
    if (key === "icon" && !(generated in iconMap)) return defaults;
    return generated.trim() as T;
  }

  if (typeof defaults === "number") {
    if (key && LOCKED_KEYS.has(key)) return defaults;
    return (typeof generated === "number" && Number.isFinite(generated) ? generated : defaults) as T;
  }

  if (Array.isArray(defaults)) {
    const items = Array.isArray(generated) ? generated : [];
    return defaults.map((item, i) => mergeGenerated(item, items[i], key)) as T;
  }

  if (defaults && typeof defaults === "object") {
    const source = generated && typeof generated === "object" ? (generated as Record<string, unknown>) : {};
    return Object.fromEntries(
      Object.entries(defaults).map(([k, v]) => [k, mergeGenerated(v, source[k], k)]),
    ) as T;
  }

  return defaults;
}
