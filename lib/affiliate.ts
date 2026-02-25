export const REF_KEY = "earnai_ref";

export function saveRefFromUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const ref = url.searchParams.get("ref");
  if (ref) localStorage.setItem(REF_KEY, ref);
}

export function getRef(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REF_KEY);
}

export function withRef(url: string) {
  if (typeof window === "undefined") return url;
  const ref = getRef();
  if (!ref) return url;

  try {
    const u = new URL(url);
    u.searchParams.set("ref", ref);
    return u.toString();
  } catch {
    // if url is not absolute, just return as is
    return url;
  }
}