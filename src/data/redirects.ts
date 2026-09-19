/**
 * 301 redirects from URLs on the previous lionconstructiontx.com site.
 * Add one entry per old URL so existing Google rankings transfer to the new pages.
 * Find the old URLs in Google Search Console → Pages, or from the old site's sitemap.xml.
 */
export const redirects = [
  { source: "/home", destination: "/", permanent: true },
  { source: "/index.html", destination: "/", permanent: true },
  { source: "/about-us", destination: "/about", permanent: true },
  { source: "/our-services", destination: "/services", permanent: true },
  { source: "/gallery", destination: "/projects", permanent: true },
  { source: "/portfolio", destination: "/projects", permanent: true },
  { source: "/testimonials", destination: "/reviews", permanent: true },
  { source: "/contact-us", destination: "/contact", permanent: true },
  { source: "/free-estimate", destination: "/contact", permanent: true },
  { source: "/remodeling", destination: "/services/home-remodeling", permanent: true },
  { source: "/kitchen-remodeling", destination: "/services/kitchen-remodeling", permanent: true },
  { source: "/bathroom-remodeling", destination: "/services/bathroom-remodeling", permanent: true },
  { source: "/roofing", destination: "/services/roofing", permanent: true },
  { source: "/commercial", destination: "/services/commercial-construction", permanent: true },
];
