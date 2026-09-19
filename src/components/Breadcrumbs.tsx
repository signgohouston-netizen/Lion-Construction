import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>
      <JsonLd data={breadcrumbJsonLd(all)} />
      <ol className="flex flex-wrap items-center gap-1">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className={dark ? "text-gold" : "text-navy"}>{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:underline">{c.name}</Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
