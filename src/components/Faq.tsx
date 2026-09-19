import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/services";
import { JsonLd } from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";

export function FaqList({ faqs, withSchema = true }: { faqs: FAQ[]; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-stone-warm rounded-xl border border-stone-warm bg-white">
      {withSchema && <JsonLd data={faqJsonLd(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-4">
          <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-navy">
            {f.q}
            <ChevronDown className="chev h-5 w-5 shrink-0 text-gold transition" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
