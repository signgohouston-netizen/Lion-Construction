import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, Hammer, BadgeCheck } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard, ProjectCard, ReviewCard, CityCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/Faq";
import { ZipFinder } from "@/components/ZipFinder";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, reviewJsonLd } from "@/lib/seo";
import { site } from "@/data/site";
import { services, featuredServices } from "@/data/services";
import { metroCities } from "@/data/cities";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { photo } from "@/lib/photos";
import Image from "next/image";

export const metadata = buildMetadata({
  title: `${site.name} | Houston General Contractor, Remodeling & Roofing`,
  description:
    "Lion Construction is a licensed Houston general contractor for kitchen and bathroom remodeling, room additions, roofing and commercial build-outs. Serving Katy, Sugar Land, Pearland, Cypress, The Woodlands and all of Texas. Free estimates.",
  path: "/",
  keywords: ["Houston general contractor", "remodeling contractor Houston", "roofing Houston TX", "commercial construction Houston", "home remodeling Katy", "kitchen remodel Sugar Land"],
});

const homeFaqs = [
  { q: "What areas does Lion Construction serve?", a: "We serve the entire Greater Houston area including Katy, Sugar Land, Pearland, Cypress, Spring, The Woodlands, Pasadena, Baytown and League City, and take on larger commercial and roofing projects across Texas." },
  { q: "Are estimates really free?", a: "Yes. A project manager visits your property, measures, and prepares a fixed-scope, line-item proposal at no charge and with no obligation." },
  { q: "Are you licensed and insured?", a: "Lion Construction carries general liability and workers' compensation coverage, and every trade partner is verified before working on your property." },
  { q: "How soon can you start?", a: "Roofing and smaller projects can usually start within one to two weeks. Remodels and additions are scheduled after design and permits, typically three to six weeks out." },
];

export default function HomePage() {
  const stats = [
    { icon: Hammer, value: "1,200+", label: "Projects completed" },
    { icon: Award, value: `${new Date().getFullYear() - site.founded}+`, label: "Years in business" },
    { icon: Users, value: `${site.rating.value}★`, label: `Rating from ${site.rating.count}+ reviews` },
    { icon: BadgeCheck, value: "2-yr", label: "Workmanship warranty" },
  ];

  return (
    <>
      <JsonLd data={reviewJsonLd(reviews.slice(0, 6))} />
      <Hero
        image={photo(site.photos.heroBlueprints)}
        imageAlt="Lion Construction project managers reviewing blueprints on a Houston job site"
        eyebrow="Licensed & insured · Houston, Texas"
        title="Build it once."
        highlight="Build it right."
        text="Lion Construction is the general contractor Houston families and businesses trust for remodeling, roofing, additions and commercial build-outs, delivered on schedule with pricing you can read line by line."
      />

      {/* Stats */}
      <div className="border-b border-stone-warm bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-stone-warm px-4 sm:px-6 md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 py-6 md:justify-center">
              <s.icon className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display text-2xl font-bold text-navy">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="What we build" title="Construction services for every part of your property" text="From a single bathroom to a ground-up commercial build, one licensed team manages design, permits, trades and schedule." />
          <Link href="/services" className="btn-ghost self-start">All {services.length} services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>

      {/* Why us */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading dark eyebrow="Why Lion Construction" title="A contractor who treats your budget like it's his own" />
            <ul className="mt-8 grid gap-4">
              {[
                "Fixed-scope proposals with line-item pricing. No vague allowances.",
                "A dedicated project manager and weekly photo reports.",
                "Permits, inspections and HOA approvals handled for you.",
                "Insured, background-checked crews and a clean job site every day.",
                "Two-year workmanship warranty backed by a local company.",
                "Storm and insurance claim expertise from Galveston to Conroe.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-gold">About our team</Link>
              <Link href="/reviews" className="btn-outline">Read reviews</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white p-6 text-ink shadow-2xl sm:p-8">
            <p className="eyebrow">Free estimate</p>
            <h3 className="font-display mt-2 text-2xl font-bold uppercase text-navy">Tell us about your project</h3>
            <p className="mt-1 text-sm text-muted">We reply within one business day.</p>
            <div className="mt-6"><EstimateForm compact /></div>
          </div>
        </div>
      </Section>

      {/* On the job photo strip */}
      {[site.photos.siteTablet, site.photos.concreteCrew, site.photos.siteWalk].some((p) => photo(p)) && (
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 md:grid-cols-3">
            {[
              { src: site.photos.siteTablet, alt: "Lion Construction crew coordinating on site with a tablet" },
              { src: site.photos.concreteCrew, alt: "Lion Construction crew pouring a concrete foundation" },
              { src: site.photos.siteWalk, alt: "Lion Construction superintendents walking a commercial job site" },
            ].map((img) => {
              const src = photo(img.src);
              return src ? (
                <div key={img.src} className="relative aspect-[3/2] overflow-hidden rounded-xl">
                  <Image src={src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 hover:scale-105" />
                </div>
              ) : null;
            })}
          </div>
        </section>
      )}

      {/* Projects */}
      <Section tone="sand">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Recent work" title="Projects across Greater Houston" text="Real homes and businesses, real neighborhoods, real schedules met." />
          <Link href="/projects" className="btn-ghost self-start">View all projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading align="center" eyebrow="Reviews" title="What Houston homeowners say" text={`Rated ${site.rating.value} out of 5 across ${site.rating.count}+ verified reviews.`} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
        </div>
      </Section>

      {/* Service areas */}
      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading dark eyebrow="Service areas" title="Serving Greater Houston and all of Texas" text="Enter your ZIP code to see the crews, permits and projects closest to you." />
            <div className="mt-8"><ZipFinder /></div>
            <Link href="/service-areas" className="mt-6 inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light">All service areas <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {metroCities.slice(0, 10).map((c) => <CityCard key={c.slug} city={c} />)}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title="Common questions" text="Straight answers before you ever pick up the phone." /></div>
          <div className="lg:col-span-8"><FaqList faqs={homeFaqs} /></div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
