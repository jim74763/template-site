import { iconMap } from "@/components/shared/icon-map";

// Fields that stay fixed from the template defaults (assets and layout values).
const LOCKED_KEYS = new Set(["image", "backgroundImage", "width", "height"]);

/**
 * Overlays generated text onto template defaults. The defaults define the shape:
 * only strings are taken from the generated value, icons must be known, and
 * image paths, sizes and array lengths always come from the defaults.
 */
export function mergeGenerated<T>(defaults: T, generated: unknown, key?: string): T {
  if (typeof defaults === "string") {
    if (key && LOCKED_KEYS.has(key)) return defaults;
    if (typeof generated !== "string" || !generated.trim()) return defaults;
    if (key === "icon" && !(generated in iconMap)) return defaults;
    return generated.trim() as T;
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
