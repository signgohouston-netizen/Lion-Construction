import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { photo } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Construction & Remodeling Services in Houston, TX",
  description: "Explore Lion Construction's services: general contracting, home, kitchen and bathroom remodeling, room additions, roofing, commercial construction, concrete, fencing, painting, siding and flooring across Greater Houston.",
  path: "/services",
  keywords: services.flatMap((s) => s.keywords.slice(0, 2)),
});

export default function ServicesPage() {
  return (
    <>
      <Hero compact image={photo(site.photos.siteTablet)} imageAlt="Lion Construction crew on a job site" crumbs={[{ name: "Services", path: "/services" }]} eyebrow="Our services" title="Every trade." highlight="One accountable team." text="Residential and commercial construction services across Greater Houston, managed end to end by licensed project managers." />
      <Section>
        <SectionHeading eyebrow={`${services.length} services`} title="What we build and remodel" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
