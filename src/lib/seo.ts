import type { Metadata } from "next";
import { site, absoluteUrl } from "@/data/site";
import type { Service, FAQ } from "@/data/services";
import type { City } from "@/data/cities";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({ title, description, path, keywords, noindex, type = "website", publishedTime }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

/* ---------------- JSON-LD builders ---------------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    contactPoint: [
      { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", areaServed: "US-TX", availableLanguage: ["English", "Spanish"] },
      { "@type": "ContactPoint", telephone: site.phoneDirect, contactType: "sales", areaServed: "US-TX", availableLanguage: ["English", "Spanish"] },
    ],
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon.svg"),
    priceRange: "$$",
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { "@type": "State", name: "Texas" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    sameAs: Object.values(site.social),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/service-areas?zip={zip}`,
      "query-input": "required name=zip",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(service: Service, city?: City) {
  const areaServed = city
    ? {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: "Texas" },
      }
    : { "@type": "State", name: "Texas" };
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city ? `${service.name} in ${city.name}, TX` : service.name,
    serviceType: service.name,
    description: service.excerpt,
    url: absoluteUrl(city ? `/services/${service.slug}/${city.slug}` : `/services/${service.slug}`),
    provider: { "@id": `${site.url}/#business` },
    areaServed,
    ...(city
      ? {
          availableAtOrFrom: city.zips.map((z) => ({
            "@type": "Place",
            address: { "@type": "PostalAddress", postalCode: z, addressLocality: city.name, addressRegion: "TX" },
          })),
        }
      : {}),
  };
}

export function reviewJsonLd(reviews: { name: string; rating: number; text: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: `${r.date}-01`,
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    })),
  };
}

export function articleJsonLd(p: { title: string; description: string; date: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: absoluteUrl(p.path),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
  };
}
