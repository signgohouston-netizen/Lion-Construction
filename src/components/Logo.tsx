import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * Renders the Lion Construction logo image from /public/images/logo.png.
 * On dark backgrounds the logo sits on a white rounded plate so the black lettering stays legible.
 */
export function Logo({ dark = false, className, priority = false }: { dark?: boolean; className?: string; priority?: boolean }) {
  return (
    <span className={cn("inline-flex items-center", dark && "rounded-md bg-white px-3 py-1.5", className)}>
      <Image
        src={dark ? site.logoDark : site.logo}
        alt={`${site.name} logo`}
        width={1200}
        height={349}
        priority={priority}
        sizes="(min-width: 640px) 220px, 180px"
        className="h-12 w-auto sm:h-14"
      />
    </span>
  );
}
