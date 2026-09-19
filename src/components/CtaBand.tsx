import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";

export function CtaBand({ title, text }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-gold">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-navy sm:text-4xl">{title ?? "Ready to start your project?"}</h2>
          <p className="mt-2 max-w-2xl text-navy/80">{text ?? "Get a free, no-pressure on-site estimate with line-item pricing. Most estimates are scheduled within 48 hours."}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-navy">Request Free Estimate</Link>
          <a href={telHref(site.phone)} className="btn-outline !text-navy">
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
