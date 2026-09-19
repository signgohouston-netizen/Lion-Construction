import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Clock } from "lucide-react";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function Hero({
  eyebrow,
  title,
  highlight,
  text,
  crumbs,
  children,
  compact = false,
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  text?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  compact?: boolean;
  /** Public path to a background photo; rendered with a dark overlay. Omit for the blueprint pattern. */
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`blueprint grain relative overflow-hidden text-white ${compact ? "py-14 sm:py-20" : "py-20 sm:py-28 lg:py-32"}`}>
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
        </>
      )}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {crumbs && <div className="mb-6"><Breadcrumbs items={crumbs} dark /></div>}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
            <h1 className={`font-display mt-4 font-bold uppercase leading-[1.02] ${compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-7xl"}`}>
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="text-gold-metallic">{highlight}</span>
                </>
              )}
            </h1>
            {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{text}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">Get a Free Estimate</Link>
              <a href={telHref(site.phone)} className="btn-outline">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            {children ?? (
              <ul className="grid gap-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
                <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Star className="h-5 w-5 fill-gold text-gold" /><span><strong>{site.rating.value}★</strong> from {site.rating.count}+ reviews</span></li>
                <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><ShieldCheck className="h-5 w-5 text-gold" /><span>Licensed, insured &amp; warrantied</span></li>
                <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Clock className="h-5 w-5 text-gold" /><span>Estimates within 48 hours</span></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
