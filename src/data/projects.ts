export type Project = {
  slug: string;
  title: string;
  service: string; // service slug
  city: string; // city slug
  neighborhood: string;
  year: number;
  summary: string;
  scope: string[];
  duration: string;
  /** Path under /public. Drop real photos into public/images/projects and reference them here. */
  image?: string;
  /** Tailwind gradient classes used when no photo is present. */
  tone: string;
};

export const projects: Project[] = [
  {
    slug: "heights-bungalow-whole-home-remodel",
    title: "1928 Heights Bungalow Whole-Home Remodel",
    service: "home-remodeling",
    city: "houston",
    neighborhood: "Houston Heights",
    year: 2025,
    summary:
      "A century-old bungalow opened into a light-filled family home with a new kitchen, two rebuilt baths, refinished pine floors and a rear primary suite addition.",
    scope: ["Load-bearing wall removal with steel beam", "Kitchen relocation and custom cabinetry", "Two full bathroom rebuilds", "Rear 320 sq ft primary suite addition", "Historic-district exterior approval"],
    duration: "16 weeks",
    tone: "from-amber-700 via-stone-800 to-slate-900",
  },
  {
    slug: "cinco-ranch-kitchen-transformation",
    title: "Cinco Ranch Open-Concept Kitchen",
    service: "kitchen-remodeling",
    city: "katy",
    neighborhood: "Cinco Ranch",
    year: 2025,
    summary:
      "Removed a peninsula and pantry wall to create a 10-foot quartz island, added a walk-in pantry and updated lighting for a family of five.",
    scope: ["Wall removal and beam", "Shaker cabinetry to ceiling", "Calacatta quartz island", "Herringbone tile backsplash", "Recessed and pendant lighting"],
    duration: "7 weeks",
    tone: "from-yellow-600 via-amber-800 to-stone-900",
  },
  {
    slug: "sugar-land-spa-bathroom",
    title: "First Colony Spa Primary Bath",
    service: "bathroom-remodeling",
    city: "sugar-land",
    neighborhood: "First Colony",
    year: 2024,
    summary:
      "A 1990s garden-tub bathroom converted to a curbless walk-in shower with a freestanding soaking tub, heated porcelain floors and a floating double vanity.",
    scope: ["Curbless shower with linear drain", "Freestanding tub", "Heated tile floor", "Floating walnut vanity", "LED mirror and niche lighting"],
    duration: "5 weeks",
    tone: "from-slate-600 via-slate-800 to-slate-950",
  },
  {
    slug: "pearland-class4-roof-replacement",
    title: "Shadow Creek Ranch Class 4 Roof Replacement",
    service: "roofing",
    city: "pearland",
    neighborhood: "Shadow Creek Ranch",
    year: 2025,
    summary:
      "Hail-damaged roof replaced with Class 4 impact-resistant architectural shingles, new synthetic underlayment, ridge ventilation and seamless gutters, coordinated with the homeowner's insurance claim.",
    scope: ["Insurance adjuster meeting", "Full tear-off and re-deck of 12 sheets", "Class 4 IR shingles", "Ridge vent and flashing", "6-inch seamless gutters"],
    duration: "1 day",
    tone: "from-stone-500 via-stone-700 to-stone-900",
  },
  {
    slug: "westchase-medical-office-buildout",
    title: "Westchase Medical Office Build-Out",
    service: "commercial-construction",
    city: "houston",
    neighborhood: "Westchase",
    year: 2024,
    summary:
      "4,200 sq ft white-box suite converted into a six-exam-room family practice with lab, reception and ADA restrooms, delivered ahead of the lease commencement date.",
    scope: ["Commercial permit and plan review", "Metal stud framing and drywall", "Medical-grade plumbing and electrical", "ADA restrooms", "Reception millwork and flooring"],
    duration: "10 weeks",
    tone: "from-sky-800 via-slate-800 to-slate-950",
  },
  {
    slug: "woodlands-covered-patio-outdoor-kitchen",
    title: "Sterling Ridge Covered Patio & Outdoor Kitchen",
    service: "fencing-decks",
    city: "the-woodlands",
    neighborhood: "Sterling Ridge",
    year: 2025,
    summary:
      "A 480 sq ft cedar-beam covered patio with tongue-and-groove ceiling, stone outdoor kitchen, ceiling fans and stamped concrete, approved by The Woodlands design review on first submission.",
    scope: ["RDRC approval package", "Cedar post and beam structure", "Metal roof tie-in", "Stone outdoor kitchen with grill and fridge", "Stamped concrete pad"],
    duration: "3 weeks",
    tone: "from-emerald-800 via-stone-800 to-slate-950",
  },
  {
    slug: "bellaire-second-story-addition",
    title: "Bellaire Second-Story Addition",
    service: "room-additions",
    city: "bellaire",
    neighborhood: "Southdale",
    year: 2024,
    summary:
      "Added 1,100 sq ft upstairs with three bedrooms and two baths over an existing one-story ranch, including a new stair, structural upgrades and full exterior re-siding to unify the look.",
    scope: ["Structural engineering and foundation piers", "Second-story framing", "New staircase", "Three bedrooms and two baths", "Hardie siding across entire home"],
    duration: "5 months",
    tone: "from-orange-800 via-stone-800 to-slate-950",
  },
  {
    slug: "league-city-hardie-siding-windows",
    title: "South Shore Harbour Siding & Impact Windows",
    service: "siding-windows-doors",
    city: "league-city",
    neighborhood: "South Shore Harbour",
    year: 2025,
    summary:
      "Rotted wood siding replaced with James Hardie lap siding and 22 windows upgraded to impact-rated units with WPI-8 windstorm certification for the homeowner's insurance.",
    scope: ["Rot repair and sheathing replacement", "Hardie lap siding and trim", "22 impact-rated windows", "WPI-8 certification", "Full exterior paint"],
    duration: "2 weeks",
    tone: "from-cyan-800 via-slate-800 to-slate-950",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
