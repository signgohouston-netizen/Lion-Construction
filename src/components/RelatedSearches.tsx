import Link from "next/link";
import { Search } from "lucide-react";

export type Keyword = { text: string; href?: string };

/**
 * Visible keyword block. Every phrase is a real search people type, and each links to the page that
 * answers it, so the keywords help visitors navigate as well as helping search engines understand the page.
 */
export function RelatedSearches({ title = "Popular searches", keywords, tone = "sand" }: { title?: string; keywords: Keyword[]; tone?: "sand" | "white" | "navy" }) {
  const seen = new Set<string>();
  const list = keywords.filter((k) => {
    const key = k.text.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const dark = tone === "navy";
  return (
    <section className={tone === "sand" ? "bg-sand" : tone === "navy" ? "blueprint text-white" : "bg-white"} aria-labelledby="related-searches">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 id="related-searches" className={`flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-gold" : "text-gold-dark"}`}>
          <Search className="h-4 w-4" /> {title}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {list.map((k) => (
            <li key={k.text}>
              {k.href ? (
                <Link href={k.href} className={`inline-block rounded-full border px-3 py-1 text-sm transition ${dark ? "border-white/15 text-white/85 hover:border-gold hover:text-gold" : "border-stone-warm bg-white text-navy hover:border-gold hover:text-gold-dark"}`}>
                  {k.text}
                </Link>
              ) : (
                <span className={`inline-block rounded-full border px-3 py-1 text-sm ${dark ? "border-white/15 text-white/85" : "border-stone-warm bg-white text-navy"}`}>{k.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
