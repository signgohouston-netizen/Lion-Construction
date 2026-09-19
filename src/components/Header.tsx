"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { featuredServices } from "@/data/services";
import { telHref } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : "border-b border-stone-warm"}`}>
      <div className="hidden bg-navy text-xs text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6">
          <span>Licensed &amp; insured general contractor serving Greater Houston and Texas since {site.founded}</span>
          <span>{site.hoursDisplay}</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-ink hover:text-gold-dark">
                  {item.label} <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-lg border border-stone-warm bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {featuredServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded px-3 py-2 text-sm text-ink hover:bg-sand hover:text-gold-dark">
                      {s.name}
                    </Link>
                  ))}
                  <Link href="/services" className="mt-1 block border-t border-stone-warm px-3 pt-2 text-sm font-semibold text-gold-dark">
                    All services →
                  </Link>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded px-3 py-2 text-sm font-medium text-ink hover:text-gold-dark">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref(site.phone)} className="hidden items-center gap-2 font-display text-lg font-semibold text-navy md:flex">
            <Phone className="h-5 w-5 text-gold" /> {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-gold hidden sm:inline-flex">
            Free Estimate
          </Link>
          <button
            type="button"
            className="rounded p-2 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[64px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-stone-warm py-4 font-display text-xl font-semibold text-navy">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-6">
              Request a Free Estimate
            </Link>
            <a href={telHref(site.phone)} className="btn-navy mt-3">
              <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
