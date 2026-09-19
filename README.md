# Lion Construction — lionconstructiontx.com

Marketing website for Lion Construction, a Houston general contractor. Built with Next.js 16 (App Router),
Tailwind CSS v4 and TypeScript, deployed on Vercel.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx next build     # must pass before shipping
```

## How the site is organised

| Path                              | What it is                                                                 |
| --------------------------------- | -------------------------------------------------------------------------- |
| `src/data/site.ts`                | Business profile: name, phone, address, hours, socials, logo, photo slots. |
| `src/data/services.ts`            | The 13 services. Each entry becomes `/services/<slug>`.                    |
| `src/data/cities.ts`              | Service-area cities with ZIP codes, neighborhoods and permit authority.    |
| `src/data/projects.ts`            | Portfolio projects → `/projects/<slug>`.                                   |
| `src/data/reviews.ts`             | Testimonials shown across the site (also emitted as Review schema).        |
| `src/data/posts.ts`               | Blog articles → `/blog/<slug>`.                                            |
| `src/data/redirects.ts`           | 301 redirects from old-site URLs.                                          |
| `src/lib/seo.ts`                  | Metadata builder and JSON-LD generators.                                   |
| `src/app/sitemap.ts`, `robots.ts` | Generated automatically from the data files.                               |
| `src/app/api/estimate/route.ts`   | Estimate form handler (Resend email when configured).                      |

### Pages generated

- Home, About, Services hub, Projects hub + detail, Reviews, Blog hub + posts, Contact, Privacy, Terms
- One page per service: `/services/roofing`
- One page per city: `/service-areas/katy`
- One page per **service × city**: `/services/roofing/katy` (services × cities ≈ 570 pages)
- Every ZIP code is listed on its city page and on `/service-areas`, and the ZIP finder maps a ZIP to its city.

Adding a city or service is a data-file edit; every dependent page, sitemap entry and schema block updates.

## Before launch checklist

1. **Business details** — replace the `TODO` values in `src/data/site.ts` (phone, address, license info, socials).
2. **Logo** — save the real logo to `public/images/logo.png` and point `logo` / `logoDark` at it.
3. **Photos** — save team photos to `public/images/team/` using the filenames in `public/images/README.md`.
4. **Project photos** — add to `public/images/projects/` and set `image` in `src/data/projects.ts`.
5. **Reviews** — replace the sample reviews with real Google reviews (name, city, service, text).
6. **Redirects** — list every URL from the old site in `src/data/redirects.ts`. Get them from Google Search Console → Pages.
7. **Form delivery** — in Vercel → Project → Settings → Environment Variables add `RESEND_API_KEY`, `LEAD_TO_EMAIL`. See `.env.example`.
8. **Search Console** — add the verification token in `src/app/layout.tsx` (`metadata.verification.google`), then submit `https://www.lionconstructiontx.com/sitemap.xml`.
9. **Domain** — in Vercel add `lionconstructiontx.com` and `www.lionconstructiontx.com`, then update DNS at the registrar. Keep `www` as the canonical host (it is what `site.url` uses).

## Deploy

Push to `main`. Vercel builds and deploys automatically once the repo is connected
(Vercel → Add New Project → Import `signgohouston-netizen/Lion-Construction`). No special build settings are required.
