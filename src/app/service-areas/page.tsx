import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { CityCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { ZipFinder } from "@/components/ZipFinder";
import { buildMetadata } from "@/lib/seo";
import { metroCities, texasCities, allZips, findCityByZip } from "@/data/cities";
import { site } from "@/data/site";
import { RelatedSearches } from "@/components/RelatedSearches";
import { homeKeywords } from "@/lib/keywords";
import { photo } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Service Areas | Houston, Katy, Sugar Land, Pearland & All of Texas",
  description: `Lion Construction serves ${metroCities.length} Greater Houston cities and travels statewide for qualifying projects. Find your city or ZIP code for local remodeling, roofing and construction services.`,
  path: "/service-areas",
  keywords: ["contractor near me", "Houston service areas", ...metroCities.slice(0, 10).map((c) => `contractor ${c.name} TX`)],
});

export default async function ServiceAreasPage({ searchParams }: PageProps<"/service-areas">) {
  const sp = await searchParams;
  const zipParam = typeof sp.zip === "string" ? sp.zip : "";
  const matched = zipParam ? findCityByZip(zipParam) : undefined;

  return (
    <>
      <Hero compact image={photo(site.photos.siteLookup)} imageAlt="Lion Construction team surveying a Texas job site" crumbs={[{ name: "Service Areas", path: "/service-areas" }]} eyebrow="Where we work" title="Greater Houston" highlight="and all of Texas" text={`Based in Houston, our crews cover a ${site.serviceRadiusMiles}-mile radius daily and mobilize statewide for commercial, roofing and storm restoration programs.`}>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="font-display text-lg font-semibold uppercase">Find your area</p>
          <div className="mt-3"><ZipFinder initialZip={zipParam} /></div>
          {matched && (
            <p className="mt-3 text-sm text-white/85">
              ZIP {zipParam} is in <Link href={`/zip/${zipParam}`} className="font-semibold text-gold underline">{matched.name}, TX</Link>.
            </p>
          )}
        </div>
      </Hero>

      <Section>
        <SectionHeading eyebrow={`${metroCities.length} cities · ${allZips.length} ZIP codes`} title="Greater Houston service area" text="Same-week estimates, local permit knowledge and crews who already know your neighborhood." />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metroCities.map((c) => <CityCard key={c.slug} city={c} />)}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Statewide reach" title="Texas markets we travel to" text="For commercial build-outs, multi-property roofing programs and storm restoration we deploy dedicated crews across Texas. Residential projects outside Greater Houston are quoted case by case." />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {texasCities.map((c) => <CityCard key={c.slug} city={c} />)}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="ZIP code directory" title="Every ZIP code we serve" text="Every ZIP code has its own page with local services, permits, nearby ZIPs and a direct estimate form." />
        <div className="mt-10 columns-2 gap-4 text-sm sm:columns-4 lg:columns-6">
          {allZips.map((z) => {
            const c = findCityByZip(z)!;
            return (
              <Link key={z} href={`/zip/${z}`} className="block break-inside-avoid py-1 font-mono text-navy hover:text-gold-dark">
                {z} <span className="font-sans text-xs text-muted">{c.name}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      <RelatedSearches keywords={homeKeywords()} />
      <CtaBand title="Don't see your city?" text="We regularly take on projects beyond the list. Tell us where you are and what you need." />
    </>
  );
}
