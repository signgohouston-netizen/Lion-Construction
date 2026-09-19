export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function telHref(phone: string) {
  return `tel:${phone}`;
}

export function formatDate(iso: string) {
  return new Date(iso + (iso.length === 10 ? "T12:00:00" : "")).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: iso.length === 10 ? "numeric" : undefined,
  });
}
