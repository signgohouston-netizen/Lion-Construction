import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { metroCities } from "@/data/cities";
import { telHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="blueprint text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {site.tagline}. Family-owned, licensed and insured, and proud of every job we have finished since {site.founded}.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /><a href={telHref(site.phone)} className="hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /><span>{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}</span></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 text-gold" /><span>{site.hoursDisplay}</span></li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:border-gold hover:text-gold"><FacebookIcon className="h-4 w-4" /></a>
              <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:border-gold hover:text-gold"><InstagramIcon className="h-4 w-4" /></a>
              <a href={site.social.google} aria-label="Google reviews" className="rounded-full border border-white/20 p-2 hover:border-gold hover:text-gold"><Star className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Service Areas</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {metroCities.slice(0, 18).map((c) => (
                <li key={c.slug}><Link href={`/service-areas/${c.slug}`} className="hover:text-white">{c.name}</Link></li>
              ))}
            </ul>
            <Link href="/service-areas" className="mt-3 inline-block text-sm font-semibold text-gold hover:text-gold-light">All Texas service areas →</Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Company</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Free Estimate</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved. Licensed and insured in the State of Texas.</p>
          <p>Serving Houston, Katy, Sugar Land, Pearland, Cypress, Spring, The Woodlands and all of Texas.</p>
        </div>
      </div>
    </footer>
  );
}
