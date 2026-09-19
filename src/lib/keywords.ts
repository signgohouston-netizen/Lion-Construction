import type { Service } from "@/data/services";
import type { City } from "@/data/cities";
import { services } from "@/data/services";
import { metroCities } from "@/data/cities";
import type { Keyword } from "@/components/RelatedSearches";

const nearMe = ["near me", "cost", "company", "free estimate"];

export function serviceKeywords(service: Service): Keyword[] {
  const base = service.keywords.flatMap((k) => [
    { text: `${k} Houston TX`, href: `/services/${service.slug}/houston` },
    { text: `${k} near me`, href: `/services/${service.slug}` },
  ]);
  const cities = metroCities.slice(0, 10).map((c) => ({ text: `${service.shortName.toLowerCase()} ${c.name} TX`, href: `/services/${service.slug}/${c.slug}` }));
  const extras = nearMe.map((n) => ({ text: `${service.shortName.toLowerCase()} ${n}`, href: `/services/${service.slug}` }));
  return [...base, ...cities, ...extras];
}

export function serviceCityKeywords(service: Service, city: City): Keyword[] {
  const primary = service.keywords.flatMap((k) => [
    { text: `${k} ${city.name}`, href: `/services/${service.slug}/${city.slug}` },
    { text: `${k} ${city.name} TX`, href: `/services/${service.slug}/${city.slug}` },
  ]);
  const zips = city.zips.slice(0, 8).map((z) => ({ text: `${service.shortName.toLowerCase()} ${z}`, href: `/zip/${z}` }));
  const hoods = city.neighborhoods.slice(0, 4).map((n) => ({ text: `${service.shortName.toLowerCase()} ${n}`, href: `/services/${service.slug}/${city.slug}` }));
  const extras = [
    { text: `${service.shortName.toLowerCase()} near me ${city.name}`, href: `/services/${service.slug}/${city.slug}` },
    { text: `best ${service.shortName.toLowerCase()} contractor ${city.name}`, href: `/services/${service.slug}/${city.slug}` },
    { text: `${service.shortName.toLowerCase()} cost ${city.name} TX`, href: `/services/${service.slug}/${city.slug}` },
  ];
  return [...primary, ...hoods, ...zips, ...extras];
}

export function cityKeywords(city: City): Keyword[] {
  const generic = [
    { text: `general contractor ${city.name} TX`, href: `/services/general-contracting/${city.slug}` },
    { text: `construction company ${city.name}`, href: `/service-areas/${city.slug}` },
    { text: `remodeling contractor ${city.name} TX`, href: `/services/home-remodeling/${city.slug}` },
    { text: `contractor near me ${city.name}`, href: `/service-areas/${city.slug}` },
  ];
  const svc = services.map((s) => ({ text: `${s.shortName.toLowerCase()} ${city.name} TX`, href: `/services/${s.slug}/${city.slug}` }));
  const zips = city.zips.slice(0, 10).map((z) => ({ text: `contractor ${z}`, href: `/zip/${z}` }));
  return [...generic, ...svc, ...zips];
}

export function zipKeywords(zip: string, city: City, area?: string): Keyword[] {
  const place = area ? `${area} ${zip}` : zip;
  const svc = services.map((s) => ({ text: `${s.shortName.toLowerCase()} ${zip}`, href: `/services/${s.slug}/${city.slug}` }));
  return [
    { text: `contractor ${zip}`, href: `/zip/${zip}` },
    { text: `general contractor ${place}`, href: `/services/general-contracting/${city.slug}` },
    { text: `remodeling ${zip}`, href: `/services/home-remodeling/${city.slug}` },
    { text: `roofing ${zip}`, href: `/services/roofing/${city.slug}` },
    { text: `construction company ${city.name} ${zip}`, href: `/service-areas/${city.slug}` },
    ...svc,
  ];
}

export function homeKeywords(): Keyword[] {
  const core = [
    "general contractor Houston TX", "Houston construction company", "commercial general contractor Houston", "design build contractor Houston",
    "home remodeling Houston", "kitchen remodeling Houston TX", "bathroom remodel Houston", "room addition contractor Houston",
    "roofing contractor Houston TX", "roof replacement Houston", "land clearing Houston", "site preparation contractor Texas",
    "tenant improvement contractor Houston", "restaurant build out Houston", "custom home builder Houston", "concrete contractor Houston",
  ].map((t) => ({ text: t, href: "/services" }));
  const cities = metroCities.slice(0, 12).map((c) => ({ text: `general contractor ${c.name} TX`, href: `/service-areas/${c.slug}` }));
  return [...core, ...cities];
}
