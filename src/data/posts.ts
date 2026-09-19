export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  category: string;
  relatedService: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "kitchen-remodel-cost-houston",
    title: "How Much Does a Kitchen Remodel Cost in Houston in 2026?",
    description: "Realistic Houston kitchen remodel budgets by tier, what drives the price, and where homeowners overspend.",
    date: "2026-08-12",
    readMinutes: 7,
    category: "Cost Guides",
    relatedService: "kitchen-remodeling",
    body: [
      { type: "p", text: "Kitchen pricing in Houston varies more than any other room because the range of choices is so wide. A refresh with painted cabinets and new counters and a full gut with relocated plumbing can differ by a factor of five. Here is how we help homeowners set a budget before design begins." },
      { type: "h2", text: "Three budget tiers" },
      { type: "ul", items: [
        "Refresh: keep the layout, reface or paint cabinets, new quartz counters, backsplash, sink, faucet and lighting.",
        "Mid-range: new semi-custom cabinets in the existing footprint, quartz or granite, tile floor, updated electrical and recessed lighting.",
        "Full remodel: walls removed, island added, plumbing and gas relocated, custom cabinetry, premium appliances and finishes.",
      ] },
      { type: "h2", text: "What drives the price" },
      { type: "p", text: "Cabinetry is typically 30 to 40 percent of the total. Moving the sink or range adds permit, plumbing and often slab work. Structural changes require an engineer's letter and a beam. Appliance packages swing widely. Labor in Houston has risen steadily since 2021, so quotes older than six months are usually out of date." },
      { type: "h2", text: "Where homeowners overspend" },
      { type: "p", text: "Ordering appliances before the layout is final, choosing a countertop with heavy veining that requires extra slabs for seam matching, and changing selections after cabinets are ordered are the three most expensive mistakes we see. A good design phase prevents all three." },
      { type: "p", text: "Ready for a real number? Request a free on-site estimate and we will price your kitchen with line-item detail." },
    ],
  },
  {
    slug: "houston-building-permits-guide",
    title: "Do I Need a Permit? A Houston Homeowner's Guide",
    description: "Which remodeling projects require a permit in Houston and surrounding cities, and what happens if you skip one.",
    date: "2026-07-03",
    readMinutes: 6,
    category: "Permits",
    relatedService: "general-contracting",
    body: [
      { type: "p", text: "Permit rules differ between the City of Houston, its suburbs and unincorporated Harris County. Getting this wrong can stall a home sale or void an insurance claim. Here is the short version." },
      { type: "h2", text: "Almost always requires a permit" },
      { type: "ul", items: ["Room additions and structural changes", "Moving or adding plumbing, gas or electrical", "Roof replacement in most incorporated cities", "New driveways touching the public right-of-way", "Water heater and HVAC replacement", "Fences over eight feet or in a floodway"] },
      { type: "h2", text: "Usually does not require a permit" },
      { type: "ul", items: ["Painting, flooring and trim", "Cabinet replacement in the same location", "Countertops and backsplash", "Like-for-like fixture swaps without moving lines"] },
      { type: "h2", text: "Unincorporated areas" },
      { type: "p", text: "Cypress, Spring, Atascocita, Channelview and much of Katy fall outside city limits. Harris County requires permits for structural, electrical, plumbing and mechanical work, and floodplain development permits for anything in a mapped flood zone." },
      { type: "p", text: "Lion Construction files every permit and schedules every inspection as part of our standard scope, so you never have to guess." },
    ],
  },
  {
    slug: "best-roof-for-houston-weather",
    title: "The Best Roofing Materials for Houston's Heat, Hail and Hurricanes",
    description: "Class 4 shingles vs. metal vs. tile: how each performs in Gulf Coast weather and what insurers reward.",
    date: "2026-05-20",
    readMinutes: 5,
    category: "Roofing",
    relatedService: "roofing",
    body: [
      { type: "p", text: "A Houston roof has to survive 100-degree summers, hail, tropical storm winds and months of humidity. Not every product does. Here is how the common options compare." },
      { type: "h2", text: "Class 4 impact-resistant shingles" },
      { type: "p", text: "The best value for most homes. They resist hail damage, carry 30 to 50 year manufacturer warranties, and many Texas insurers offer premium discounts for a certified Class 4 installation." },
      { type: "h2", text: "Standing-seam metal" },
      { type: "p", text: "Fifty-plus year lifespan, excellent wind rating and reflective coatings that reduce attic heat. Higher upfront cost, but often the lowest cost per year of service." },
      { type: "h2", text: "Concrete and clay tile" },
      { type: "p", text: "Beautiful and long-lasting, but heavy. Most Houston homes need structural reinforcement to carry tile, which adds cost." },
      { type: "h2", text: "What matters more than the shingle" },
      { type: "ul", items: ["Synthetic underlayment and ice-and-water shield in valleys", "Proper ridge and soffit ventilation", "Correct nailing pattern for the wind zone", "New flashing, not reused flashing"] },
    ],
  },
  {
    slug: "room-addition-vs-moving-houston",
    title: "Room Addition or Move? The Math for Houston Homeowners",
    description: "When adding on beats buying a bigger house, and the questions to answer before you decide.",
    date: "2026-04-08",
    readMinutes: 6,
    category: "Additions",
    relatedService: "room-additions",
    body: [
      { type: "p", text: "With mortgage rates well above what most homeowners locked in, moving means giving up a cheap loan. An addition lets you keep the rate, the school zone and the neighbors. But it is not always the right call." },
      { type: "h2", text: "Addition makes sense when" },
      { type: "ul", items: ["Your lot has room within setbacks", "The neighborhood supports a higher value", "You need one or two specific rooms, not a different house", "Your foundation and roof are in good shape"] },
      { type: "h2", text: "Moving makes sense when" },
      { type: "ul", items: ["You would exceed the value ceiling of your street", "The lot is too small or has easements", "You want a different layout entirely", "HOA restrictions prevent the addition"] },
      { type: "p", text: "We offer a free feasibility visit that checks setbacks, HOA rules, foundation type and utility locations before you spend a dollar on drawings." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
