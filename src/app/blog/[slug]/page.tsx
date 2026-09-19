import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { posts, getPost } from "@/data/posts";
import { getService } from "@/data/services";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.description, path: `/blog/${p.slug}`, type: "article", publishedTime: p.date });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const service = getService(post.relatedService);
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleJsonLd({ title: post.title, description: post.description, date: post.date, path: `/blog/${post.slug}` })} />
      <Hero compact crumbs={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} eyebrow={`${post.category} · ${formatDate(post.date)} · ${post.readMinutes} min read`} title={post.title} text={post.description}>
        <div />
      </Hero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="prose-lion lg:col-span-8">
            {post.body.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="font-display mt-10 text-3xl font-semibold uppercase text-navy">{b.text}</h2>;
              if (b.type === "ul") return <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted">{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
              return <p key={i} className="mt-4 text-lg leading-relaxed text-muted">{b.text}</p>;
            })}
          </article>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {service && <ServiceCard service={service} />}
              <div className="rounded-xl border border-stone-warm bg-sand p-6">
                <p className="eyebrow">More reading</p>
                <ul className="mt-3 space-y-3">
                  {others.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`} className="font-medium text-navy hover:text-gold-dark">{p.title}</Link></li>)}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
