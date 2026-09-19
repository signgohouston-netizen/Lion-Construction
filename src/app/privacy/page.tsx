import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = buildMetadata({ title: "Privacy Policy", description: `How ${site.name} collects, uses and protects your information.`, path: "/privacy", noindex: false });

export default function PrivacyPage() {
  return (
    <>
      <Hero compact crumbs={[{ name: "Privacy Policy", path: "/privacy" }]} title="Privacy Policy" text="Last updated September 2026"><div /></Hero>
      <Section>
        <div className="prose-lion max-w-3xl space-y-6 text-muted">
          <p>{site.legalName} (&quot;we&quot;) respects your privacy. This policy explains what information we collect through {site.url} and how we use it.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Information we collect</h2>
          <p>When you request an estimate we collect your name, phone number, email address, project ZIP code and any project details you provide. We also collect standard analytics data such as pages visited, device type and referring site.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">How we use it</h2>
          <p>We use your information to respond to your request, schedule estimates, deliver proposals and, if you become a client, to perform our work. We do not sell or rent your personal information to third parties.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Communications</h2>
          <p>By submitting a form you agree that we may contact you by phone, text or email about your project. You may opt out at any time by replying STOP to a text or emailing {site.email}.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Cookies and analytics</h2>
          <p>We may use privacy-respecting analytics and Google tools to understand how visitors use the site. You can disable cookies in your browser settings.</p>
          <h2 className="font-display text-2xl font-semibold uppercase text-navy">Contact</h2>
          <p>Questions about this policy can be sent to {site.email} or {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}.</p>
        </div>
      </Section>
    </>
  );
}
