import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { ReviewCard, Stars } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, reviewJsonLd } from "@/lib/seo";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { photo } from "@/lib/photos";

export const metadata = buildMetadata({
  title: "Reviews | Lion Construction Houston Customer Testimonials",
  description: `Read ${site.rating.count}+ reviews from Houston-area homeowners and businesses. Lion Construction is rated ${site.rating.value} out of 5 for remodeling, roofing, additions and commercial construction.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewJsonLd(reviews)} />
      <Hero compact image={photo(site.photos.siteWalk)} imageAlt="Lion Construction superintendents on site" crumbs={[{ name: "Reviews", path: "/reviews" }]} eyebrow="Testimonials" title="Rated" highlight={`${site.rating.value} out of 5`} text="Our reputation is built one job at a time. Here is what clients across Greater Houston say about working with Lion Construction.">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="font-display text-6xl font-bold text-gold">{site.rating.value}</p>
          <Stars rating={5} />
          <p className="mt-2 text-sm text-white/75">{site.rating.count}+ verified reviews</p>
          <a href={site.social.google} className="btn-gold mt-4 w-full">Leave a Google review</a>
        </div>
      </Hero>
      <Section>
        <SectionHeading eyebrow="Client stories" title="In their words" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
        </div>
      </Section>
      <CtaBand title="Become our next five-star review" />
    </>
  );
}
