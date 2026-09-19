import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { CityCard, ProjectCard, ReviewCard, ServiceCard } from "@/components/Cards";
import { FaqList } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/ServiceIcon";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { services, getService } from "@/data/services";
import { metroCities, texasCities } from "@/data/cities";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { photo } from "@/lib/photos";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[service]">) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Houston, TX`,
    description: `${service.excerpt} Licensed and insured ${service.shortName.toLowerCase()} contractor serving Houston, Katy, Sugar Land, Pearland, Cypress and all of Texas. Free estimates.`,
    path: `/services/${service.slug}`,
    keywords: [...service.keywords, ...service.keywords.map((k) => `${k} Houston`)],
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[service]">) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceProjects = projects.filter((p) => p.service === service.slug);
  const serviceReviews = reviews.filter((r) => r.service === service.slug);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <Hero
        compact
        image={photo(site.photos.blueprintOverhead)}
        imageAlt={`Lion Construction reviewing ${service.name.toLowerCase()} plans with a client`}
        crumbs={[{ name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }]}
        eyebrow="Houston, TX and surrounding areas"
        title={service.name}
        text={service.excerpt}
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gold text-navy"><ServiceIcon icon={service.icon} /></span>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/80"><Clock className="h-4 w-4 text-gold" /> Typical timeline: {service.timeline}</p>
          <p className="mt-2 text-sm text-white/80">Free on-site estimate · Line-item pricing · 2-year warranty</p>
        </div>
      </Hero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="prose-lion lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={`${service.shortName} done right`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {service.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <h3 className="font-display mt-10 text-2xl font-semibold uppercase text-navy">What&apos;s included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{f}</li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-stone-warm bg-sand p-6 sm:p-8">
              <p className="eyebrow">Free estimate</p>
              <h3 className="font-display mt-2 text-2xl font-bold uppercase text-navy">Get {service.shortName.toLowerCase()} pricing</h3>
              <div className="mt-6"><EstimateForm compact defaultService={service.slug} /></div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading dark eyebrow="Our process" title={`How a ${service.shortName.toLowerCase()} project works`} />
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

      {serviceProjects.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="Recent work" title={`${service.shortName} projects`} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Section>
      )}

      {serviceReviews.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Reviews" title={`What clients say about our ${service.shortName.toLowerCase()}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceReviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
          </div>
        </Section>
      )}

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title={`${service.shortName} questions`} /></div>
          <div className="lg:col-span-8"><FaqList faqs={service.faqs} /></div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Service areas" title={`${service.shortName} near you`} text={`We provide ${service.name.toLowerCase()} throughout Greater Houston and travel statewide for qualifying projects. Choose your city for local details, permits and ZIP codes.`} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metroCities.map((c) => <CityCard key={c.slug} city={c} service={service} />)}
        </div>
        <h3 className="font-display mt-12 text-xl font-semibold uppercase text-navy">Elsewhere in Texas</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {texasCities.map((c) => (
            <Link key={c.slug} href={`/services/${service.slug}/${c.slug}`} className="rounded-full border border-stone-warm px-4 py-1.5 text-sm text-navy hover:border-gold hover:text-gold-dark">{c.name}</Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Related" title="Other services" />
          <Link href="/services" className="btn-ghost">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>

      <CtaBand title={`Ready to talk about your ${service.shortName.toLowerCase()} project?`} />
    </>
  );
}
