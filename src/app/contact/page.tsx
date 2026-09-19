import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { EstimateForm } from "@/components/EstimateForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";
import { photo } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Free Estimate | Contact Lion Construction Houston",
  description: `Request a free on-site construction or remodeling estimate in Houston and across Texas. Call ${site.phoneDisplay} (office) or ${site.phoneDirectDisplay} (direct), or send us your project details and we reply within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  const contactPage = { "@context": "https://schema.org", "@type": "ContactPage", url: `${site.url}/contact`, mainEntity: { "@id": `${site.url}/#business` } };
  return (
    <>
      <JsonLd data={contactPage} />
      <Hero compact image={photo(site.photos.clientChat)} imageAlt="Lion Construction project manager talking with a client on site" crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Free estimate" title="Let's talk about" highlight="your project" text="Tell us what you want to build or fix. A project manager will reach out within one business day to schedule a free on-site visit.">
        <ul className="grid gap-3 text-sm">
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Phone className="h-5 w-5 text-gold" /><span><a href={telHref(site.phone)} className="font-semibold">{site.phoneDisplay}</a> <span className="text-white/60">Office</span></span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Phone className="h-5 w-5 text-gold" /><span><a href={telHref(site.phoneDirect)} className="font-semibold">{site.phoneDirectDisplay}</a> <span className="text-white/60">Direct</span></span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Mail className="h-5 w-5 text-gold" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><MapPin className="h-5 w-5 text-gold" /><span>{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}</span></li>
          <li className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"><Clock className="h-5 w-5 text-gold" /><span>{site.hoursDisplay}</span></li>
        </ul>
      </Hero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Request form" title="Request your free estimate" />
            <div className="mt-8"><EstimateForm /></div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-stone-warm bg-sand p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold uppercase text-navy">What happens next</h3>
              <ol className="mt-4 space-y-4 text-sm text-muted">
                <li><strong className="text-navy">1. We call you.</strong> Within one business day to understand the project and schedule a visit.</li>
                <li><strong className="text-navy">2. On-site visit.</strong> A project manager measures, photographs and asks the right questions.</li>
                <li><strong className="text-navy">3. Written proposal.</strong> Line-item pricing, timeline and selections, usually within a week.</li>
                <li><strong className="text-navy">4. You decide.</strong> No pressure, no expiring discounts.</li>
              </ol>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-warm">
              <iframe
                title="Lion Construction service area map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`)}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
