import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import type { Service } from "@/data/services";
import type { City } from "@/data/cities";
import type { Project } from "@/data/projects";
import type { Review } from "@/data/reviews";
import { ServiceIcon } from "./ServiceIcon";
import { getService } from "@/data/services";
import { getCity } from "@/data/cities";

export function ServiceCard({ service, city }: { service: Service; city?: City }) {
  const href = city ? `/services/${service.slug}/${city.slug}` : `/services/${service.slug}`;
  return (
    <Link href={href} className="card group flex flex-col p-6">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="font-display mt-5 text-xl font-semibold uppercase text-navy">
        {service.name}
        {city ? ` in ${city.name}` : ""}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
        Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function CityCard({ city, service }: { city: City; service?: Service }) {
  const href = service ? `/services/${service.slug}/${city.slug}` : `/service-areas/${city.slug}`;
  return (
    <Link href={href} className="card group flex items-start gap-4 p-5">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sand text-gold-dark">
        <MapPin className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="font-display block text-lg font-semibold uppercase text-navy">{city.name}, TX</span>
        <span className="block text-xs text-muted">{city.county}</span>
        <span className="mt-1 block truncate text-xs text-muted">ZIPs {city.zips.slice(0, 4).join(", ")}{city.zips.length > 4 ? ` +${city.zips.length - 4} more` : ""}</span>
      </span>
    </Link>
  );
}

export function ProjectPlaceholder({ project, className = "" }: { project: Project; className?: string }) {
  const service = getService(project.service);
  return (
    <div className={`grain relative overflow-hidden bg-gradient-to-br ${project.tone} ${className}`}>
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
        <span className="inline-flex w-fit items-center gap-2 rounded bg-black/30 px-2 py-1 text-xs uppercase tracking-wider">
          {service && <ServiceIcon icon={service.icon} className="h-4 w-4" />} {service?.shortName}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-white/70">{project.neighborhood} · {project.year}</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const city = getCity(project.city);
  return (
    <Link href={`/projects/${project.slug}`} className="card group flex flex-col overflow-hidden">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={project.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
      ) : (
        <ProjectPlaceholder project={project} className="aspect-[4/3] w-full" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-gold-dark">{city?.name}, TX</p>
        <h3 className="font-display mt-1 text-xl font-semibold text-navy">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
          View project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex text-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-30"}`} />
      ))}
    </span>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  const city = getCity(review.city);
  const service = getService(review.service);
  return (
    <figure className="card flex h-full flex-col p-6">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{review.text}”</blockquote>
      <figcaption className="mt-5 border-t border-stone-warm pt-4 text-sm">
        <span className="font-semibold text-navy">{review.name}</span>
        <span className="block text-xs text-muted">{city?.name}, TX · {service?.shortName}</span>
      </figcaption>
    </figure>
  );
}
