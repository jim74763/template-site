export const normalize = (value?: string | null) =>
  (value ?? "").normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase();
