"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

type State = "idle" | "sending" | "done" | "error";

export function EstimateForm({ defaultService, defaultCity, compact = false }: { defaultService?: string; defaultCity?: string; compact?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/estimate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setState("done");
      form.reset();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-xl border border-gold bg-sand p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-dark" />
        <h3 className="font-display mt-4 text-2xl font-bold uppercase text-navy">Request received</h3>
        <p className="mt-2 text-muted">Thank you. A project manager will call or email you within one business day to schedule your free on-site estimate.</p>
      </div>
    );
  }

  const input = "w-full rounded-md border border-stone-warm bg-white px-4 py-3 text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">Full name *</label>
          <input id="name" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">Phone *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={input} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
        <div>
          <label htmlFor="zip" className="mb-1 block text-sm font-medium text-navy">Project ZIP code *</label>
          <input id="zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" required autoComplete="postal-code" className={input} defaultValue={defaultCity ?? ""} />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-navy">Service needed *</label>
        <select id="service" name="service" required defaultValue={defaultService ?? ""} className={input}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="other">Other / not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="details" className="mb-1 block text-sm font-medium text-navy">Tell us about the project</label>
        <textarea id="details" name="details" rows={compact ? 3 : 5} className={input} placeholder="Size, timeline, budget range, anything that helps us prepare." />
      </div>
      {state === "error" && <p className="text-sm text-red-700">{message}</p>}
      <button type="submit" disabled={state === "sending"} className="btn-gold disabled:opacity-60">
        {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {state === "sending" ? "Sending…" : "Request My Free Estimate"}
      </button>
      <p className="text-xs text-muted">By submitting you agree to be contacted about your project. We never sell your information.</p>
    </form>
  );
}
