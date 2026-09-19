import { cn } from "@/lib/utils";

export function Section({ children, className, tone = "white", id }: { children: React.ReactNode; className?: string; tone?: "white" | "sand" | "navy"; id?: string }) {
  const tones = { white: "bg-white", sand: "bg-sand", navy: "blueprint text-white" };
  return (
    <section id={id} className={cn("py-16 sm:py-24", tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left", dark = false }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center"; dark?: boolean }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", dark && "text-gold")}>{eyebrow}</p>}
      <h2 className={cn("font-display mt-3 text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-navy")}>{title}</h2>
      <div className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {text && <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted")}>{text}</p>}
    </div>
  );
}
