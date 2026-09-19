import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Houston Remodeling & Construction Blog | Cost Guides, Permits & Tips",
  description: "Practical guides from Lion Construction on remodeling costs, Houston permits, roofing materials, additions and planning a construction project in Texas.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Hero compact crumbs={[{ name: "Blog", path: "/blog" }]} eyebrow="Resources" title="Guides for" highlight="Houston homeowners" text="Cost breakdowns, permit rules and material comparisons written by the people who do the work." />
      <Section>
        <SectionHeading eyebrow="Latest" title="Articles" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col p-8">
              <p className="text-xs uppercase tracking-wider text-gold-dark">{p.category} · {formatDate(p.date)} · {p.readMinutes} min read</p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-navy">{p.title}</h2>
              <p className="mt-3 flex-1 text-muted">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
