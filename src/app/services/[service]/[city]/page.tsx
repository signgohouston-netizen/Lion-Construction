import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, MapPin, Clock, FileCheck2, Car } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ProjectCard, ReviewCard, ServiceCard, CityCard } from "@/components/Cards";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { services, getService } from "@/data/services";
import { cities, getCity, metroCities } from "@/data/cities";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { getCityDetail, zipArea } from "@/data/city-details";
import { RelatedSearches } from "@/components/RelatedSearches";
import { serviceCityKeywords } from "@/lib/keywords";
import { photo } from "@/lib/photos";

export function generateStaticParams() {
  return services.flatMap((s) => cities.map((c) => ({ service: s.slug, city: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/services/[service]/[city]">) {
  const { service: sSlug, city: cSlug } = await params;
  const service = getService(sSlug);
  const city = getCity(cSlug);
  if (!service || !city) return {};
  return buildMetadata({
    title: `${service.name} in ${city.name}, TX`,
    description: `Licensed ${service.shortName.toLowerCase()} contractor serving ${city.name}, TX (${city.county}). ${service.excerpt} Serving ZIP codes ${city.zips.slice(0, 5).join(", ")}${city.zips.length > 5 ? " and more" : ""}. Free estimates.`,
    path: `/services/${service.slug}/${city.slug}`,
    keywords: [
      ...service.keywords.map((k) => `${k} ${city.name}`),
      ...service.keywords.slice(0, 2).map((k) => `${k} ${city.name} TX`),
      ...city.zips.slice(0, 6).map((z) => `${service.shortName.toLowerCase()} ${z}`),
    ],
  });
}

export default async function ServiceCityPage({ params }: PageProps<"/services/[service]/[city]">) {
  const { service: sSlug, city: cSlug } = await params;
  const service = getService(sSlug);
  const city = getCity(cSlug);
  if (!service || !city) notFound();

  const detail = getCityDetail(city.slug);
  const localProjects = projects.filter((p) => p.city === city.slug);
  const localReviews = reviews.filter((r) => r.city === city.slug || r.service === service.slug).slice(0, 3);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);
  const nearby = metroCities.filter((c) => c.slug !== city.slug).sort((a, b) => dist(city, a) - dist(city, b)).slice(0, 8);

  const localFaqs = [
    { q: `Do you offer ${service.name.toLowerCase()} in ${city.name}?`, a: `Yes. Lion Construction provides ${service.name.toLowerCase()} throughout ${city.name} and ${city.county}, including ${city.neighborhoods.slice(0, 3).join(", ")}. ${city.tier === "metro" ? `Our crews are about ${city.driveMinutes || 15} minutes from ${city.name}.` : "Projects in this area are scheduled with dedicated travel crews and quoted case by case."}` },
    { q: `Which ${city.name} ZIP codes do you serve?`, a: `We serve all ${city.name} ZIP codes: ${city.zips.join(", ")}.` },
    { q: `Who issues permits for ${service.name.toLowerCase()} in ${city.name}?`, a: `Permits are handled through ${city.permitAuthority}. Lion Construction files the application and schedules inspections as part of every project.` },
    ...service.faqs.slice(0, 2),
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd(service, city)} />
      <Hero
        compact
        image={photo(site.photos.blueprintOverhead)}
        imageAlt={`${service.name} in ${city.name}, TX by Lion Construction`}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
          { name: city.name, path: `/services/${service.slug}/${city.slug}` },
        ]}
        eyebrow={`${city.name}, Texas · ${city.county}`}
        title={service.name}
        highlight={`in ${city.name}, TX`}
        text={`${service.excerpt} Serving ${city.neighborhoods.slice(0, 4).join(", ")} and every ${city.name} ZIP code.`}
      >
        <ul className="grid gap-3 text-sm">
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Car className="h-5 w-5 text-gold" /><span>{city.driveMinutes ? `About ${city.driveMinutes} min from our Houston office` : "Headquartered right here in Houston"}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><FileCheck2 className="h-5 w-5 text-gold" /><span>Permits via {city.permitAuthority.split(" (")[0]}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Clock className="h-5 w-5 text-gold" /><span>Typical timeline: {service.timeline}</span></li>
        </ul>
      </Hero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={`${service.shortName} · ${city.name}`} title={`${service.shortName} for ${city.name} homes and businesses`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>{city.blurb}</p>
              {detail && <p>{detail.housing}</p>}
              {service.intro.map((p) => <p key={p}>{p}</p>)}
            </div>

            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">What&apos;s included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{f}</li>
              ))}
            </ul>

            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">{city.name} neighborhoods we serve</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => <span key={n} className="rounded-full bg-sand px-3 py-1 text-sm text-navy">{n}</span>)}
            </div>

            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">{city.name} ZIP codes served</h3>
            <p className="mt-2 text-sm text-muted">{service.name} available in every {city.name} ZIP code:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.zips.map((z) => (
                <Link key={z} href={`/zip/${z}`} className="rounded border border-stone-warm px-2.5 py-1 font-mono text-sm text-navy hover:border-gold hover:text-gold-dark" title={zipArea(city.slug, z) ?? city.name}>{z}</Link>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-stone-warm bg-sand p-6 sm:p-8">
              <p className="eyebrow">Free {city.name} estimate</p>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase text-navy">Get {service.shortName.toLowerCase()} pricing in {city.name}</h3>
              <div className="mt-6"><EstimateForm compact defaultService={service.slug} defaultCity={city.zips[0]} /></div>
              <p className="mt-4 flex items-center gap-2 text-xs text-muted"><MapPin className="h-4 w-4 text-gold" /> Or call {site.phoneDisplay}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading dark eyebrow="Our process" title={`${service.shortName} in ${city.name}, step by step`} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <span className="font-display text-4xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-xl font-semibold uppercase">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {localProjects.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="Local work" title={`Projects in ${city.name}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Section>
      )}

      {localReviews.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Reviews" title="From clients nearby" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {localReviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
          </div>
        </Section>
      )}

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title={`${service.shortName} in ${city.name}`} /></div>
          <div className="lg:col-span-8"><FaqList faqs={localFaqs} /></div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={`More in ${city.name}`} title={`Other services in ${city.name}`} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => <ServiceCard key={s.slug} service={s} city={city} />)}
        </div>
        <h3 className="font-display mt-14 text-xl font-semibold uppercase text-navy">{service.shortName} in nearby cities</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((c) => <CityCard key={c.slug} city={c} service={service} />)}
        </div>
        <p className="mt-6 text-sm text-muted">
          See everything we do in <Link href={`/service-areas/${city.slug}`} className="font-semibold text-gold-dark hover:underline">{city.name}</Link> or browse all <Link href="/service-areas" className="font-semibold text-gold-dark hover:underline">service areas</Link>.
        </p>
      </Section>

      <RelatedSearches title={`Popular ${service.shortName.toLowerCase()} searches in ${city.name}`} keywords={serviceCityKeywords(service, city)} />
      <CtaBand title={`Need ${service.shortName.toLowerCase()} in ${city.name}?`} text={`Schedule a free on-site estimate anywhere in ${city.name}. Most visits are booked within 48 hours.`} />
    </>
  );
}

function dist(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  return Math.hypot(a.lat - b.lat, a.lng - b.lng);
}
