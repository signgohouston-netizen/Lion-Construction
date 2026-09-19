import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, FileCheck2, Car, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard, ProjectCard, ReviewCard, CityCard } from "@/components/Cards";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { cities, getCity, metroCities } from "@/data/cities";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { site, absoluteUrl } from "@/data/site";
import { getCityDetail, zipArea } from "@/data/city-details";
import { RelatedSearches } from "@/components/RelatedSearches";
import { cityKeywords } from "@/lib/keywords";
import { photo } from "@/lib/photos";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-areas/[city]">) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: `General Contractor in ${city.name}, TX | Remodeling, Roofing & Construction`,
    description: `Lion Construction is a licensed general contractor serving ${city.name}, TX and ${city.county}: kitchen and bath remodeling, room additions, roofing, commercial build-outs and more. ZIP codes ${city.zips.slice(0, 5).join(", ")}${city.zips.length > 5 ? " and more" : ""}. Free estimates.`,
    path: `/service-areas/${city.slug}`,
    keywords: [`general contractor ${city.name}`, `remodeling contractor ${city.name} TX`, `roofing ${city.name} TX`, `home remodeling ${city.name}`, ...city.zips.slice(0, 5).map((z) => `contractor ${z}`)],
  });
}

export default async function CityPage({ params }: PageProps<"/service-areas/[city]">) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const detail = getCityDetail(city.slug);
  const localProjects = projects.filter((p) => p.city === city.slug);
  const localReviews = reviews.filter((r) => r.city === city.slug);
  const nearby = metroCities.filter((c) => c.slug !== city.slug).sort((a, b) => Math.hypot(a.lat - city.lat, a.lng - city.lng) - Math.hypot(b.lat - city.lat, b.lng - city.lng)).slice(0, 8);

  const faqs = [
    { q: `Does Lion Construction serve ${city.name}?`, a: `Yes. ${city.name} is ${city.tier === "metro" ? "inside our core Greater Houston service area" : "one of the Texas markets we travel to for qualifying projects"}. ${city.blurb}` },
    { q: `Which ${city.name} ZIP codes do you cover?`, a: `All of them: ${city.zips.join(", ")}.` },
    { q: `Who handles permits in ${city.name}?`, a: `Construction permits in ${city.name} go through ${city.permitAuthority}. We file and manage every permit and inspection.` },
    { q: `How fast can you get to ${city.name} for an estimate?`, a: city.tier === "metro" ? `Our office is about ${city.driveMinutes || 15} minutes away. Most ${city.name} estimates are scheduled within 48 hours.` : `We schedule ${city.name} site visits around our travel crews' rotation, usually within one to two weeks.` },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": absoluteUrl(`/service-areas/${city.slug}#business`),
    name: `${site.name} — ${city.name}`,
    parentOrganization: { "@id": `${site.url}/#business` },
    url: absoluteUrl(`/service-areas/${city.slug}`),
    telephone: site.phone,
    areaServed: [
      { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Texas" } },
      ...city.zips.map((z) => ({ "@type": "PostalAddress", postalCode: z, addressLocality: city.name, addressRegion: "TX", addressCountry: "US" })),
    ],
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <Hero
        compact
        image={photo(site.photos.siteTablet)}
        imageAlt={`Lion Construction crew on a job site in ${city.name}, TX`}
        crumbs={[{ name: "Service Areas", path: "/service-areas" }, { name: city.name, path: `/service-areas/${city.slug}` }]}
        eyebrow={`${city.county} · Texas`}
        title="General contractor in"
        highlight={`${city.name}, TX`}
        text={city.blurb}
      >
        <ul className="grid gap-3 text-sm">
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Car className="h-5 w-5 text-gold" /><span>{city.driveMinutes ? `About ${city.driveMinutes} min from our Houston office` : "Our home base"}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><FileCheck2 className="h-5 w-5 text-gold" /><span>{city.permitAuthority}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><MapPin className="h-5 w-5 text-gold" /><span>{city.zips.length} ZIP code{city.zips.length > 1 ? "s" : ""} served</span></li>
        </ul>
      </Hero>

      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Services" title={`What we build in ${city.name}`} text={`Every Lion Construction service is available to ${city.name} homeowners and businesses. Choose one for local pricing details.`} />
          <Link href="/services" className="btn-ghost self-start">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} city={city} />)}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Local knowledge" title={`Working in ${city.name}`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>{city.blurb}</p>
              {detail && <p>{detail.housing}</p>}
              <p>Permits for structural, electrical, plumbing and mechanical work in {city.name} are issued by {city.permitAuthority}. We prepare the drawings, file the application and meet the inspector so your project passes the first time.</p>
            </div>
            {detail && (
              <>
                <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">What {city.name} hires us for</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {detail.commonProjects.map((c) => <li key={c} className="rounded-lg border border-stone-warm bg-white px-4 py-3 text-sm text-ink">{c}</li>)}
                </ul>
              </>
            )}
            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">Neighborhoods</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => <span key={n} className="rounded-full bg-white px-3 py-1 text-sm text-navy">{n}</span>)}
            </div>
            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">{city.name} ZIP codes we serve</h3>
            <p className="mt-2 text-sm text-muted">Each ZIP has its own page with local details and an estimate form.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {city.zips.map((z) => (
                <Link key={z} href={`/zip/${z}`} className="flex items-center justify-between rounded border border-stone-warm bg-white px-3 py-2 text-sm text-navy hover:border-gold hover:text-gold-dark">
                  <span className="font-mono">{z}</span>
                  <span className="truncate pl-3 text-xs text-muted">{zipArea(city.slug, z) ?? city.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-stone-warm bg-white p-6 sm:p-8">
              <p className="eyebrow">Free {city.name} estimate</p>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase text-navy">Start your {city.name} project</h3>
              <div className="mt-6"><EstimateForm compact defaultCity={city.zips[0]} /></div>
            </div>
          </aside>
        </div>
      </Section>

      {localProjects.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Local work" title={`Recent projects in ${city.name}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Section>
      )}

      {localReviews.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="Reviews" title={`${city.name} clients`} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localReviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title={`${city.name} questions`} /></div>
          <div className="lg:col-span-8"><FaqList faqs={faqs} /></div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Nearby" title="Cities near you" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((c) => <CityCard key={c.slug} city={c} />)}
        </div>
      </Section>

      <RelatedSearches title={`Popular searches in ${city.name}`} keywords={cityKeywords(city)} />
      <CtaBand title={`Planning a project in ${city.name}?`} />
    </>
  );
}
