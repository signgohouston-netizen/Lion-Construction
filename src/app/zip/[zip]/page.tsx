import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, FileCheck2, Car, Hash } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard, ProjectCard, ReviewCard } from "@/components/Cards";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { RelatedSearches } from "@/components/RelatedSearches";
import { buildMetadata } from "@/lib/seo";
import { zipKeywords } from "@/lib/keywords";
import { photo } from "@/lib/photos";
import { services } from "@/data/services";
import { allZips, findCityByZip } from "@/data/cities";
import { getCityDetail, zipArea } from "@/data/city-details";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { site, absoluteUrl } from "@/data/site";

export function generateStaticParams() {
  return allZips.map((zip) => ({ zip }));
}

export async function generateMetadata({ params }: PageProps<"/zip/[zip]">) {
  const { zip } = await params;
  const city = findCityByZip(zip);
  if (!city) return {};
  const area = zipArea(city.slug, zip);
  const place = area ? `${area}, ${city.name}` : city.name;
  return buildMetadata({
    title: `Contractor in ${zip} | ${place}, TX`,
    description: `Lion Construction serves ZIP code ${zip} (${place}, TX) with general contracting, kitchen and bath remodeling, room additions, roofing, commercial build-outs and land clearing. Licensed, insured, free on-site estimates in ${zip}.`,
    path: `/zip/${zip}`,
    keywords: [`contractor ${zip}`, `general contractor ${zip}`, `remodeling ${zip}`, `roofing ${zip}`, `construction company ${place}`, ...services.slice(0, 6).map((s) => `${s.shortName.toLowerCase()} ${zip}`)],
  });
}

export default async function ZipPage({ params }: PageProps<"/zip/[zip]">) {
  const { zip } = await params;
  const city = findCityByZip(zip);
  if (!city) notFound();
  const area = zipArea(city.slug, zip);
  const detail = getCityDetail(city.slug);
  const place = area ? `${area}` : city.name;
  const isPoBox = /PO boxes/i.test(area ?? "");
  const nearbyZips = city.zips.filter((z) => z !== zip).sort((a, b) => Math.abs(Number(a) - Number(zip)) - Math.abs(Number(b) - Number(zip))).slice(0, 12);
  const localProjects = projects.filter((p) => p.city === city.slug).slice(0, 3);
  const localReviews = reviews.filter((r) => r.city === city.slug).slice(0, 3);

  const faqs = [
    { q: `Do you serve ZIP code ${zip}?`, a: `Yes. ${zip} covers ${area ? `${area} in ` : ""}${city.name}, Texas, inside ${city.county}. ${city.tier === "metro" ? `Our crews are about ${city.driveMinutes || 15} minutes away and work in ${zip} regularly.` : "Projects in this area are handled by our travel crews and quoted case by case."}` },
    { q: `What services do you offer in ${zip}?`, a: `Every Lion Construction service is available in ${zip}: ${services.slice(0, 8).map((s) => s.name.toLowerCase()).join(", ")} and more. ${detail ? `In ${city.name} we are most often hired for ${detail.commonProjects.slice(0, 2).join(" and ").toLowerCase()}.` : ""}` },
    { q: `Who issues building permits in ${zip}?`, a: `Permits for ${zip} go through ${city.permitAuthority}. We file the application and schedule inspections as part of every project.` },
    { q: `How do I get an estimate in ${zip}?`, a: `Call ${site.phoneDisplay}, use the form on this page, or request a free on-site estimate. Most ${city.name} visits are scheduled within 48 hours.` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": absoluteUrl(`/zip/${zip}#business`),
    name: `${site.name} — ${zip}`,
    parentOrganization: { "@id": `${site.url}/#business` },
    url: absoluteUrl(`/zip/${zip}`),
    telephone: site.phone,
    areaServed: { "@type": "PostalAddress", postalCode: zip, addressLocality: city.name, addressRegion: "TX", addressCountry: "US" },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        compact
        image={photo(site.photos.siteLookup)}
        imageAlt={`Lion Construction crew working in ${city.name}, TX`}
        crumbs={[{ name: "Service Areas", path: "/service-areas" }, { name: city.name, path: `/service-areas/${city.slug}` }, { name: zip, path: `/zip/${zip}` }]}
        eyebrow={`ZIP code ${zip} · ${city.county}`}
        title={`Contractor in ${zip}`}
        highlight={`${place}, TX`}
        text={`Licensed general contractor for remodeling, roofing, additions, commercial construction and land clearing in ZIP code ${zip}${area ? ` (${area})` : ""}, ${city.name}, Texas.`}
      >
        <ul className="grid gap-3 text-sm">
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Hash className="h-5 w-5 text-gold" /><span>ZIP {zip} · {area ?? city.name}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Car className="h-5 w-5 text-gold" /><span>{city.driveMinutes ? `About ${city.driveMinutes} min from our office` : "Minutes from our Houston office"}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><FileCheck2 className="h-5 w-5 text-gold" /><span>{city.permitAuthority.split(" (")[0]}</span></li>
        </ul>
      </Hero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={`Serving ${zip}`} title={`Construction and remodeling in ${place}`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                ZIP code {zip} {isPoBox ? "is a post office box ZIP for" : "covers"} {area ? `${area} in ` : ""}{city.name}, part of {city.county}. {city.blurb}
              </p>
              {detail && <p>{detail.housing}</p>}
              {detail && (
                <>
                  <p className="font-semibold text-navy">Projects we are hired for most often in {city.name}:</p>
                  <ul className="list-disc space-y-1 pl-6">
                    {detail.commonProjects.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </>
              )}
            </div>

            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">Nearby ZIP codes in {city.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {nearbyZips.map((z) => (
                <Link key={z} href={`/zip/${z}`} className="rounded border border-stone-warm px-2.5 py-1 font-mono text-sm text-navy hover:border-gold hover:text-gold-dark">
                  {z}{zipArea(city.slug, z) ? <span className="ml-1 font-sans text-xs text-muted">{zipArea(city.slug, z)}</span> : null}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              See the full <Link href={`/service-areas/${city.slug}`} className="font-semibold text-gold-dark hover:underline">{city.name} service area</Link> or every <Link href="/service-areas" className="font-semibold text-gold-dark hover:underline">Texas ZIP we serve</Link>.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-stone-warm bg-sand p-6 sm:p-8">
              <p className="eyebrow">Free estimate in {zip}</p>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase text-navy">Start your project in {place}</h3>
              <div className="mt-6"><EstimateForm compact defaultCity={zip} /></div>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted"><MapPin className="h-4 w-4 text-gold" /> Or call {site.phoneDisplay}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Services" title={`What we build in ${zip}`} text={`Choose a service for ${city.name}-specific details, permits and pricing.`} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} city={city} />)}
        </div>
      </Section>

      {localProjects.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Local work" title={`Projects near ${zip}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">{localProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </Section>
      )}
      {localReviews.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="Reviews" title={`${city.name} clients`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">{localReviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}</div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title={`Questions about ${zip}`} /></div>
          <div className="lg:col-span-8"><FaqList faqs={faqs} /></div>
        </div>
      </Section>

      <RelatedSearches title={`Popular searches in ${zip}`} keywords={zipKeywords(zip, city, area)} />
      <CtaBand title={`Planning a project in ${zip}?`} text={`Free on-site estimates anywhere in ${place}. Call ${site.phoneDisplay} or send your details.`} />
    </>
  );
}
