import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Ruler, Award, Building2, Home, Tractor, CheckCircle2, Phone, HardHat, ClipboardCheck, Users } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/Faq";
import { ServiceCard } from "@/components/Cards";
import { RelatedSearches } from "@/components/RelatedSearches";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { homeKeywords } from "@/lib/keywords";
import { photo } from "@/lib/photos";
import { site } from "@/data/site";
import { services, getService } from "@/data/services";
import { metroCities } from "@/data/cities";
import { telHref } from "@/lib/utils";

export const metadata = buildMetadata({
  title: `About Lion Construction | Houston General Contractor Since ${site.founded}`,
  description: `Lion Construction is a Houston-based general contractor delivering commercial construction, design-build, home remodeling, roofing and land clearing across Greater Houston and Texas. Licensed, insured, and accountable from estimate to warranty.`,
  path: "/about",
  keywords: ["about Lion Construction", "Houston general contractor", "commercial contractor Houston TX", "licensed insured contractor Houston", "design build Houston", "Lion Construction TX"],
});

const values = [
  { icon: ShieldCheck, title: "Accountability", text: "One project manager owns your job from estimate to warranty. You always know who to call, and they always pick up." },
  { icon: Ruler, title: "Precision", text: "We measure twice, level everything, and follow the manufacturer's spec and the code book, never the shortcut." },
  { icon: HeartHandshake, title: "Transparency", text: "Line-item pricing, written change orders and straight talk about what your budget can and cannot do." },
  { icon: Award, title: "Craft", text: "Crews who have worked together for years and take pride in the details most people never notice." },
];

const divisions = [
  { icon: Building2, title: "Commercial", text: "Ground-up buildings, tenant improvements, restaurants, medical and dental offices, retail, warehouses and churches. Design-build and construction management for owners and developers.", services: ["commercial-construction", "design-build-preconstruction", "construction-management"] },
  { icon: Home, title: "Residential", text: "Whole-home remodels, kitchens, baths, additions, custom homes, roofing, siding, windows, flooring, painting and outdoor living for Greater Houston homeowners.", services: ["home-remodeling", "kitchen-remodeling", "room-additions", "roofing"] },
  { icon: Tractor, title: "Site Work", text: "Land clearing, tree removal, grading, pads, culverts, driveways and right-of-way clearing for builders, utilities and landowners across Southeast Texas.", services: ["land-clearing-site-prep", "concrete-driveways", "fencing-decks"] },
];

const standards = [
  "Texas-registered business with general liability and workers' compensation coverage; certificates provided on request",
  "Every subcontractor verified for insurance and background before setting foot on your property",
  "OSHA-10 trained crews, daily site safety briefings and a clean, secured job site every evening",
  "Permits, inspections and HOA architectural approvals filed and managed for you",
  "Fixed-scope proposals with itemized pricing and written change orders approved before work proceeds",
  "Two-year workmanship warranty on remodeling, ten-year structural warranty on new construction",
];

const team = [
  { icon: HardHat, role: "Project Managers", text: "Your single point of contact. They estimate, schedule, coordinate trades, meet inspectors and send weekly photo reports." },
  { icon: ClipboardCheck, role: "Estimating & Preconstruction", text: "Detailed takeoffs, value engineering and permit strategy so the number you sign is the number you pay." },
  { icon: Users, role: "Field Crews & Trade Partners", text: "Carpenters, roofers, tile setters, concrete finishers and equipment operators who have built with us for years." },
];

const faqs = [
  { q: "Where is Lion Construction located?", a: `Our office is at ${site.address.street}, ${site.address.city}, TX ${site.address.zip}, in the Willowbrook area of northwest Houston. Crews are dispatched across Greater Houston daily and travel statewide for larger commercial, roofing and site-work projects.` },
  { q: "Are you licensed and insured?", a: "Yes. Lion Construction carries general liability and workers' compensation insurance, holds the trade registrations required by the City of Houston and surrounding cities, and verifies coverage for every subcontractor. Certificates are available on request." },
  { q: "Do you do both commercial and residential work?", a: "Yes. Our commercial division handles build-outs, ground-up projects and construction management; our residential division handles remodels, additions, roofing and custom homes; and our site-work division handles land clearing and preparation." },
  { q: "How do I get a quote?", a: `Call ${site.phoneDisplay}, use the estimate form, or request a visit. A project manager comes to the site, and you receive a written, itemized proposal, usually within a week.` },
  { q: "Do you offer financing?", a: "We can connect you with financing partners for residential projects and structure progress payments on commercial work. Ask your project manager for options." },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - site.founded;
  const aboutJsonLd = { "@context": "https://schema.org", "@type": "AboutPage", url: `${site.url}/about`, mainEntity: { "@id": `${site.url}/#business` } };
  const teamPhoto = photo(site.photos.teamSunset);
  const walkPhoto = photo(site.photos.siteWalk);

  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <Hero compact image={photo(site.photos.heroBlueprints)} imageAlt="Lion Construction project managers reviewing plans" crumbs={[{ name: "About", path: "/about" }]} eyebrow={`Houston, Texas · Since ${site.founded}`} title="Built on trust," highlight="finished with pride" text="Lion Construction is a Houston general contractor serving businesses, homeowners and landowners across Texas. We started with one crew and a promise: show up, do what we said, and leave the property better than we found it." />

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grain relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-dark via-navy-700 to-navy">
            {teamPhoto && (
              <>
                <Image src={teamPhoto} alt="The Lion Construction team on a Houston job site" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              </>
            )}
            <div className="absolute inset-0 flex items-end p-8 text-white">
              <div>
                <p className="font-display text-5xl font-bold text-gold">{years}+</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">years building Texas</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who we are" title="A Houston contractor, through and through" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>Lion Construction is based in northwest Houston and works across the entire metro, from Galveston to Conroe and Katy to Baytown. We are a full-service general contractor: our commercial team builds offices, restaurants, clinics and retail; our residential team remodels kitchens, baths and whole homes and builds additions and custom houses; and our site-work team clears land and prepares it for construction.</p>
              <p>We have rebuilt homes after Harvey, opened restaurants on lease deadlines, added second stories in Bellaire, replaced thousands of roofs after hail and hurricanes, and cleared right-of-way for utility crews across Southeast Texas. Along the way we learned that clients remember one thing more than the tile they picked: whether their contractor kept his word.</p>
              <p>That is why every project gets a dedicated project manager, an itemized proposal, weekly photo reports and a written warranty. It is how we would want to be treated, so it is how we treat you.</p>
            </div>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {site.credentials.map((c) => <li key={c} className="rounded-md bg-sand px-4 py-2 text-sm font-medium text-navy">{c}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Divisions */}
      <Section tone="sand">
        <SectionHeading eyebrow="What we do" title="Three divisions, one standard" text="Whether you own a business, a home or a piece of land, the same project management, pricing transparency and warranty apply." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {divisions.map((d) => (
            <div key={d.title} className="card p-8">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-gold"><d.icon className="h-7 w-7" /></span>
              <h3 className="font-display mt-5 text-2xl font-semibold uppercase text-navy">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.text}</p>
              <ul className="mt-5 space-y-2">
                {d.services.map((slug) => {
                  const s = getService(slug);
                  return s ? <li key={slug}><Link href={`/services/${s.slug}`} className="text-sm font-semibold text-gold-dark hover:underline">{s.name} →</Link></li> : null;
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="navy">
        <SectionHeading dark align="center" eyebrow="Values" title="How we work" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <v.icon className="h-8 w-8 text-gold" />
              <h3 className="font-display mt-4 text-xl font-semibold uppercase">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Standards + team */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our standards" title="Licensed, insured, accountable" />
            <ul className="mt-8 grid gap-3">
              {standards.map((s) => <li key={s} className="flex items-start gap-3 text-ink"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{s}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="The team" title="Who you will work with" />
            <ul className="mt-8 grid gap-4">
              {team.map((t) => (
                <li key={t.role} className="flex gap-4 rounded-xl border border-stone-warm bg-sand p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-gold"><t.icon className="h-6 w-6" /></span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase text-navy">{t.role}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Photo band */}
      {walkPhoto && (
        <div className="relative h-72 w-full overflow-hidden sm:h-96">
          <Image src={walkPhoto} alt="Lion Construction superintendents walking a Houston commercial job site" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <p className="font-display text-3xl font-bold uppercase text-white sm:text-5xl">Serving Houston and all of Texas</p>
              <p className="mt-2 max-w-xl text-white/80">{metroCities.slice(0, 8).map((c) => c.name).join(", ")} and beyond.</p>
            </div>
          </div>
        </div>
      )}

      {/* Services list */}
      <Section tone="sand">
        <SectionHeading eyebrow="Services" title={`${services.length} services under one roof`} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <div className="mt-8 text-center"><Link href="/services" className="btn-navy">See all services</Link></div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="About Lion Construction" />
            <a href={telHref(site.phone)} className="btn-gold mt-6"><Phone className="h-4 w-4" /> {site.phoneDisplay}</a>
          </div>
          <div className="lg:col-span-8"><FaqList faqs={faqs} /></div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Careers & trade partners" title="Build with us" text="We are always looking for skilled carpenters, tile setters, roofers, equipment operators and licensed trade partners who share our standards. Send your information and a project manager will follow up." />
          <div className="flex items-center"><Link href="/contact" className="btn-navy">Get in touch</Link></div>
        </div>
      </Section>

      <RelatedSearches keywords={homeKeywords()} tone="white" />
      <CtaBand />
    </>
  );
}
