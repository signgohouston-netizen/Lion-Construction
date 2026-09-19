import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ProjectCard, ProjectPlaceholder } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { projects, getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { getCity } from "@/data/cities";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const city = getCity(p.city);
  return buildMetadata({ title: `${p.title} | ${city?.name}, TX`, description: p.summary, path: `/projects/${p.slug}` });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.service)!;
  const city = getCity(project.city)!;
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Hero compact crumbs={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.slug}` }]} eyebrow={`${service.name} · ${city.name}, TX`} title={project.title} text={project.summary}>
        <ul className="grid gap-3 text-sm">
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><MapPin className="h-5 w-5 text-gold" /><span>{project.neighborhood}, {city.name}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Clock className="h-5 w-5 text-gold" /><span>Completed in {project.duration} · {project.year}</span></li>
        </ul>
      </Hero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.image} alt={project.title} className="aspect-[16/10] w-full rounded-2xl object-cover" />
            ) : (
              <ProjectPlaceholder project={project} className="aspect-[16/10] w-full rounded-2xl" />
            )}
          </div>
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Scope of work" title="What we did" />
            <ul className="mt-6 grid gap-3">
              {project.scope.map((s) => <li key={s} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{s}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/services/${service.slug}/${city.slug}`} className="btn-navy">{service.shortName} in {city.name}</Link>
              <Link href={`/service-areas/${city.slug}`} className="btn-ghost">More in {city.name} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="sand">
        <SectionHeading eyebrow="More work" title="Other projects" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">{more.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      </Section>
      <CtaBand />
    </>
  );
}
