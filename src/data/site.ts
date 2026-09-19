/**
 * Business profile. Everything site-wide that identifies Lion Construction
 * lives here so NAP (name, address, phone) stays consistent for local SEO.
 * Update the placeholder values marked TODO before launch.
 */
export const site = {
  name: "Lion Construction",
  legalName: "Lion Construction TX",
  tagline: "Houston's trusted general contractor for remodeling, roofing & commercial builds",
  url: "https://www.lionconstructiontx.com",
  phone: "+18326618414",
  phoneDisplay: "(832) 661-8414",
  /** Direct line to the owner / project lead. */
  phoneDirect: "+18324509100",
  phoneDirectDisplay: "(832) 450-9100",
  email: "info@lionconstructiontx.com",
  emailSocial: "social@lionconstructiontx.com",
  address: {
    street: "10660 Woodedge Dr",
    city: "Houston",
    state: "TX",
    zip: "77070",
    country: "US",
  },
  geo: { lat: 29.9553, lng: -95.5658 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  hoursDisplay: "Mon–Fri 7am–6pm · Sat 8am–2pm",
  founded: 2012,
  // TODO: real license / insurance details
  credentials: ["Licensed & Insured in Texas", "BBB Accredited", "OSHA-10 Certified Crews", "Free On-Site Estimates"],
  social: {
    facebook: "https://www.facebook.com/lionconstructiontx",
    instagram: "https://www.instagram.com/lionconstructiontx",
    google: "https://g.page/lionconstructiontx",
    yelp: "https://www.yelp.com/biz/lion-construction-houston",
  },
  rating: { value: 4.9, count: 137 },
  /** Horizontal logo, transparent background, black + gold. */
  logo: "/images/logo.png",
  logoDark: "/images/logo.png",
  serviceRadiusMiles: 60,
  /**
   * Team / job-site photography. Save each photo under public/images/team/ with the filename below.
   * Pages use the photo when the file exists and fall back to the brand gradient when it does not.
   */
  photos: {
    heroBlueprints: "/images/team/hero-blueprints.jpg", // two PMs in Lion hard hats reviewing plans (home hero)
    teamSunset: "/images/team/team-sunset.jpg", // four-person team at golden hour with blueprints (about)
    siteTablet: "/images/team/site-tablet.jpg", // crew with tablet pointing across the site (services)
    siteWalk: "/images/team/site-walk.jpg", // two workers walking past concrete structure (reviews)
    concreteCrew: "/images/team/concrete-crew.jpg", // crew in vests pouring concrete (projects)
    siteLookup: "/images/team/site-lookup.jpg", // two men looking up with clipboard (service areas)
    blueprintOverhead: "/images/team/blueprint-overhead.jpg", // overhead shot of client + engineer with plans (service detail)
    clientChat: "/images/team/client-chat.jpg", // client and foreman talking at excavator (contact)
  },
} as const;

export const SITE_URL = site.url;

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
