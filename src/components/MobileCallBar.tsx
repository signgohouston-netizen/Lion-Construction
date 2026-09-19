import Link from "next/link";
import { Phone, ClipboardList } from "lucide-react";
import { site } from "@/data/site";
import { telHref } from "@/lib/utils";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-stone-warm bg-white shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.3)] sm:hidden">
      <a href={telHref(site.phone)} className="flex items-center justify-center gap-2 py-3 font-display font-semibold text-navy">
        <Phone className="h-5 w-5 text-gold" /> Call Now
      </a>
      <Link href="/contact" className="flex items-center justify-center gap-2 bg-gold py-3 font-display font-semibold text-navy">
        <ClipboardList className="h-5 w-5" /> Free Estimate
      </Link>
    </div>
  );
}
