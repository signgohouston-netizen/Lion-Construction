import Link from "next/link";
import { ShieldCheck, HeartHandshake, Ruler, Award } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { photo } from "@/lib/photos";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "About Lion Construction | Houston General Contractor Since " + site.founded,
  description: `Lion Construction is a family-owned, licensed and insured Houston general contractor founded in ${site.founded}. Learn about our team, our values and the standards behind every remodel, roof and commercial build.`,
  path: "/about",
});

const values = [
  { icon: ShieldCheck, title: "Accountability", text: "One project manager owns your job from estimate to warranty. You always know who to call." },
  { icon: Ruler, title: "Precision", text: "We measure twice, level everything and follow the manufacturer's spec, not the shortcut." },
  { icon: HeartHandshake, title: "Honesty", text: "Line-item pricing, written change orders and straight talk about what your budget can do." },
  { icon: Award, title: "Craft", text: "Crews who have worked together for years and take pride in the details nobody else notices." },
];

export default function AboutPage() {
  return (
    <>
      <Hero compact image={photo(site.photos.heroBlueprints)} imageAlt="Lion Construction project managers reviewing plans" crumbs={[{ name: "About", path: "/about" }]} eyebrow={`Family owned · Since ${site.founded}`} title="Built on trust," highlight="finished with pride" text="Lion Construction started with one truck and a promise: show up, do what we said, and leave the property better than we found it. That promise still runs every job." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="grain relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-dark via-navy-700 to-navy">
            {photo(site.photos.teamSunset) && (
              <>
                <Image src={photo(site.photos.teamSunset)!} alt="The Lion Construction team on a Houston job site" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              </>
            )}
            <div className="absolute inset-0 flex items-end p-8 text-white">
              <div>
                <p className="font-display text-5xl font-bold text-gold">{new Date().getFullYear() - site.founded}+</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">years building Houston</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="A Houston contractor, through and through" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>We have rebuilt homes after Harvey, opened restaurants on deadline, added second stories in Bellaire and replaced thousands of roofs from Galveston to Conroe. Along the way we learned that clients do not remember the tile they picked as much as they remember whether their contractor kept his word.</p>
              <p>Today Lion Construction is a team of project managers, designers and long-tenured crews. We hold Texas licenses and insurance, verify every trade partner, and stand behind our work with a written warranty.</p>
            </div>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {site.credentials.map((c) => <li key={c} className="rounded-md bg-sand px-4 py-2 text-sm font-medium text-navy">{c}</li>)}
            </ul>
          </div>
        </div>
      </Section>

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

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Careers & trade partners" title="Build with us" text="We are always looking for skilled carpenters, tile setters, roofers and licensed trade partners who share our standards." />
          <div className="flex items-center">
            <Link href="/contact" className="btn-navy">Get in touch</Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
