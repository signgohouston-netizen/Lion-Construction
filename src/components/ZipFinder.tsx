"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { findCityByZip } from "@/data/cities";

export function ZipFinder({ initialZip = "" }: { initialZip?: string }) {
  const router = useRouter();
  const [zip, setZip] = useState(initialZip);
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const city = findCityByZip(zip);
    if (city) {
      setError(null);
      router.push(`/zip/${zip.trim()}`);
    } else if (/^7[5-9]\d{3}$/.test(zip.trim())) {
      setError("That ZIP is in Texas but outside our listed areas. Request an estimate and we will confirm availability.");
    } else {
      setError("Enter a valid 5-digit Texas ZIP code.");
    }
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <label htmlFor="zip" className="sr-only">Enter your ZIP code</label>
      <div className="flex overflow-hidden rounded-md border-2 border-gold bg-white">
        <input
          id="zip"
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter your ZIP code"
          className="min-w-0 flex-1 px-4 py-3 text-ink outline-none"
        />
        <button type="submit" className="flex items-center gap-2 bg-gold px-5 font-display font-semibold uppercase tracking-wide text-navy">
          <Search className="h-4 w-4" /> Check
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-white/90">{error}</p>}
    </form>
  );
}
