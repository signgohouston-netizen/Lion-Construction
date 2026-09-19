import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/service-areas"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/reviews"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages = services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 }));
  const cityPages = cities.map((c) => ({ url: absoluteUrl(`/service-areas/${c.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: c.tier === "metro" ? 0.8 : 0.5 }));
  const serviceCityPages = services.flatMap((s) =>
    cities.map((c) => ({ url: absoluteUrl(`/services/${s.slug}/${c.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: c.tier === "metro" ? 0.7 : 0.4 })),
  );
  const projectPages = projects.map((p) => ({ url: absoluteUrl(`/projects/${p.slug}`), lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 }));
  const postPages = posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.5 }));

  return [...staticPages, ...servicePages, ...cityPages, ...serviceCityPages, ...projectPages, ...postPages];
}
