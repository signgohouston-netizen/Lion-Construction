import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ProjectCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { photo } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Construction & Remodeling Projects in Houston, TX",
  description: "Browse recent Lion Construction projects: kitchen and bath remodels, whole-home renovations, additions, roofing and commercial build-outs across Houston, Katy, Sugar Land, Pearland and The Woodlands.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Hero compact image={photo(site.photos.concreteCrew)} imageAlt="Lion Construction crew pouring concrete" crumbs={[{ name: "Projects", path: "/projects" }]} eyebrow="Portfolio" title="Recent" highlight="projects" text="A selection of the homes and businesses we have remodeled, built and restored across Greater Houston." />
      <Section>
        <SectionHeading eyebrow={`${projects.length} featured projects`} title="Real neighborhoods, real results" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>
      <CtaBand title="Want results like these?" />
    </>
  );
}
