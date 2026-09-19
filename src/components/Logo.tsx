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
        width={300}
        height={200}
        priority={priority}
        className="h-14 w-auto sm:h-16"
      />
    </span>
  );
}
