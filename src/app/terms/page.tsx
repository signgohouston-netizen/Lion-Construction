import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({ title: "Terms of Service", description: `Terms governing use of the ${site.name} website.`, path: "/terms" });

export default function TermsPage() {
  return (
    <>
      <Hero compact crumbs={[{ name: "Terms of Service", path: "/terms" }]} title="Terms of Service" text="Last updated September 2026"><div /></Hero>
      <Section>
        <div className="prose-lion max-w-3xl space-y-6 text-muted">
          <p>By using {site.url} you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Estimates and proposals</h2>
          <p>Information on this website, including timelines and descriptions, is general in nature. Binding pricing and scope are provided only in a written proposal signed by {site.legalName} and the client.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Intellectual property</h2>
          <p>All content, photographs and designs on this site are the property of {site.legalName} and may not be reproduced without permission.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Limitation of liability</h2>
          <p>The website is provided as is. {site.legalName} is not liable for any damages arising from use of the site or reliance on its content.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Governing law</h2>
          <p>These terms are governed by the laws of the State of Texas. Any dispute shall be resolved in the courts of Harris County, Texas.</p>
        </div>
      </Section>
    </>
  );
}
