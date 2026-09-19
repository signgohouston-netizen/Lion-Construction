import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section tone="sand">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-3 text-4xl font-bold uppercase text-navy">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for moved or never existed. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-navy">Home</Link>
          <Link href="/services" className="btn-gold">Our Services</Link>
          <Link href="/contact" className="btn-ghost">Free Estimate</Link>
        </div>
      </div>
    </Section>
  );
}
