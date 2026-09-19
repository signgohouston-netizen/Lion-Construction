# Images

## Logo
`logo.svg` is a temporary stand-in drawn in the brand colors. Replace it with the real logo:
copy your file to `public/images/logo.png` and change `logo` / `logoDark` in `src/data/site.ts`
to `/images/logo.png`.

## Team photos → `public/images/team/`
Save the photos with these exact filenames. Each page picks up its photo automatically once the
file exists; until then the page shows the brand gradient.

| Filename                  | Photo                                                     | Used on                 |
| ------------------------- | --------------------------------------------------------- | ----------------------- |
| `hero-blueprints.jpg`     | Two project managers in Lion hard hats reading blueprints | Home hero, About hero   |
| `team-sunset.jpg`         | Four-person team at golden hour with blueprints           | About story             |
| `site-tablet.jpg`         | Crew with tablet, one pointing across the site            | Services hero, Home     |
| `site-walk.jpg`           | Two workers walking past a concrete structure             | Reviews hero, Home      |
| `concrete-crew.jpg`       | Crew in vests pouring a concrete footing                  | Projects hero, Home     |
| `site-lookup.jpg`         | Two men with clipboard looking up at the structure        | Service Areas hero      |
| `blueprint-overhead.jpg`  | Overhead of client in suit and engineer holding plans     | Every service page hero |
| `client-chat.jpg`         | Client and foreman talking beside an excavator            | Contact hero            |

Landscape JPGs around 1600–2000 px wide, under ~400 KB each, work best.

## Project photos → `public/images/projects/`
Reference them from `src/data/projects.ts` via the `image` field, e.g. `/images/projects/heights-kitchen.jpg`.
