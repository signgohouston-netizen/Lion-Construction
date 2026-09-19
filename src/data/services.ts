export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Short noun phrase used in headings like "Kitchen Remodeling in Katy, TX" */
  shortName: string;
  icon:
    | "HardHat"
    | "Home"
    | "CookingPot"
    | "Bath"
    | "Expand"
    | "Warehouse"
    | "Building2"
    | "Layers"
    | "Fence"
    | "PaintRoller"
    | "House"
    | "DoorOpen"
    | "Grid3x3"
    | "DraftingCompass"
    | "ClipboardCheck"
    | "Tractor";
  excerpt: string;
  intro: string[];
  features: string[];
  process: { title: string; text: string }[];
  faqs: FAQ[];
  keywords: string[];
  /** Typical project length shown on the page; keep it a range. */
  timeline: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "general-contracting",
    name: "General Contracting",
    shortName: "General Contractor",
    icon: "HardHat",
    featured: true,
    excerpt:
      "One licensed team managing permits, trades, schedule and budget from the first sketch to the final walkthrough.",
    intro: [
      "Lion Construction acts as your single point of accountability. We pull permits, coordinate every subcontractor, hold the schedule and keep your budget transparent with line-item change orders you approve before any work begins.",
      "Our project managers have delivered residential and light-commercial builds across Greater Houston for more than a decade, so we know the inspectors, the soil, the drainage rules and the HOA quirks that trip up out-of-town crews.",
    ],
    features: [
      "Fixed-scope proposals with itemized pricing",
      "Permit filing and inspection scheduling",
      "Vetted, insured subcontractor network",
      "Weekly progress reports with photos",
      "Dedicated project manager on every job",
      "Two-year workmanship warranty",
    ],
    process: [
      { title: "Site visit & scope", text: "We walk the property, measure, and listen to what you want the finished space to do." },
      { title: "Design & proposal", text: "You receive drawings, selections and a line-item estimate within about a week." },
      { title: "Permits & scheduling", text: "We file with the city or county and lock in a start date with a realistic timeline." },
      { title: "Build & report", text: "Crews work on schedule while your PM sends weekly updates and handles inspections." },
      { title: "Punch list & warranty", text: "We walk the job with you, close every item, and back the work for two years." },
    ],
    faqs: [
      { q: "Do you handle permits?", a: "Yes. We file all building, electrical, plumbing and mechanical permits and schedule the inspections, so you never have to visit the permit office." },
      { q: "How do you price a project?", a: "After a free on-site visit we prepare a fixed-scope proposal with line-item pricing. Changes are documented and approved by you before any additional work starts." },
      { q: "Are your subcontractors insured?", a: "Every trade partner carries general liability and workers' compensation coverage, and we verify certificates before they set foot on your property." },
      { q: "What warranty do you offer?", a: "All workmanship carries a two-year warranty, and manufacturer warranties on materials pass directly to you." },
    ],
    keywords: ["general contractor", "licensed contractor", "construction company", "building contractor"],
    timeline: "2 weeks – 6 months depending on scope",
  },
  {
    slug: "home-remodeling",
    name: "Home Remodeling",
    shortName: "Home Remodeling",
    icon: "Home",
    featured: true,
    excerpt:
      "Whole-home renovations, open-concept conversions and interior updates that raise both comfort and resale value.",
    intro: [
      "Whether you are opening up a 1980s floor plan, updating finishes throughout or turning a fixer-upper into a forever home, our remodeling team delivers a cohesive result instead of a patchwork of separate trades.",
      "We start with how you actually live, then plan structural changes, lighting, flooring, cabinetry and paint as one design so every room speaks the same language.",
    ],
    features: [
      "Open-concept and load-bearing wall removal",
      "Flooring, trim, doors and millwork",
      "Lighting and electrical upgrades",
      "Insulation and energy efficiency improvements",
      "Aging-in-place and accessibility modifications",
      "Storm and flood damage restoration",
    ],
    process: [
      { title: "Discovery walk-through", text: "We tour your home together and map priorities against budget." },
      { title: "Design & selections", text: "3D layouts and finish boards help you make decisions confidently." },
      { title: "Phased construction", text: "We sequence work so you can keep living in the home whenever possible." },
      { title: "Final reveal", text: "Deep clean, walkthrough and warranty documentation." },
    ],
    faqs: [
      { q: "Can we live in the house during the remodel?", a: "In most cases, yes. We phase work by zone, seal off dust with negative-air barriers and keep at least one kitchen and bath functional." },
      { q: "How long does a whole-home remodel take?", a: "A single-story interior refresh runs four to eight weeks; whole-home renovations with structural work typically take three to five months." },
      { q: "Do you help with design?", a: "Yes. Our in-house designer prepares layouts, 3D renderings and material selections as part of the proposal." },
      { q: "Do you remodel flood-damaged homes?", a: "We have restored hundreds of Houston homes after storm events, from drywall and flooring to full electrical and cabinetry replacement." },
    ],
    keywords: ["home remodeling", "house renovation", "remodeling contractor", "home renovation company"],
    timeline: "4 weeks – 5 months",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen Remodeling",
    icon: "CookingPot",
    featured: true,
    excerpt:
      "Custom cabinetry, quartz and granite counters, islands and lighting designed around how your family cooks and gathers.",
    intro: [
      "The kitchen is where remodeling dollars return the most value, and where poor planning shows the fastest. Our designers balance work triangles, storage, seating and lighting before a single cabinet is ordered.",
      "From budget-friendly refacing to full gut renovations with relocated plumbing, we manage every trade in-house so your kitchen is back in service on the promised date.",
    ],
    features: [
      "Custom and semi-custom cabinetry",
      "Quartz, granite and butcher-block countertops",
      "Islands, peninsulas and breakfast bars",
      "Tile backsplash and under-cabinet lighting",
      "Plumbing, gas and electrical relocation",
      "Appliance installation and venting",
    ],
    process: [
      { title: "Measure & design", text: "Precise measurements and a 3D layout of your new kitchen." },
      { title: "Selections", text: "Cabinets, counters, tile and fixtures chosen with our designer." },
      { title: "Demolition & rough-in", text: "Plumbing and electrical relocated; inspections passed." },
      { title: "Install & finish", text: "Cabinets, counters, backsplash, lighting and appliances." },
    ],
    faqs: [
      { q: "How long is a kitchen remodel?", a: "A cosmetic update takes two to three weeks. A full remodel with new layout, cabinets and counters usually runs six to ten weeks including countertop fabrication." },
      { q: "Should I choose quartz or granite?", a: "Quartz is non-porous and low maintenance; granite is natural, heat resistant and unique. We show samples of both during selections and explain the trade-offs for your household." },
      { q: "Can you move my sink or stove?", a: "Yes. Relocating plumbing, gas and venting is common in open-concept redesigns and is included in our permit scope." },
      { q: "Do you offer cabinet refacing?", a: "We do. Refacing keeps your existing boxes and replaces doors, drawer fronts and hardware for a fraction of a full replacement." },
    ],
    keywords: ["kitchen remodel", "kitchen renovation", "kitchen remodeling contractor", "custom kitchen cabinets"],
    timeline: "2 – 10 weeks",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom Remodeling",
    icon: "Bath",
    featured: true,
    excerpt:
      "Walk-in showers, freestanding tubs, double vanities and waterproofing done right so your bathroom stays beautiful for decades.",
    intro: [
      "Bathrooms are the most technically demanding room per square foot: waterproofing, ventilation, drainage slope and tile layout all have to be perfect. Our tile setters and plumbers work as one crew so nothing falls through the cracks.",
      "We remodel powder rooms, hall baths and spa-style primary suites, including tub-to-shower conversions and accessible curbless designs.",
    ],
    features: [
      "Curbless and walk-in showers",
      "Tub-to-shower conversions",
      "Freestanding and soaking tubs",
      "Custom vanities and quartz tops",
      "Heated floors and smart ventilation",
      "Grab bars and accessibility upgrades",
    ],
    process: [
      { title: "Layout & fixtures", text: "We plan drain locations, niches and lighting around your fixtures." },
      { title: "Demo & waterproofing", text: "Old finishes removed; shower pans and walls sealed with a bonded membrane." },
      { title: "Tile & plumbing", text: "Tile set, grouted and sealed; fixtures installed and tested." },
      { title: "Finish", text: "Vanity, mirrors, lighting, accessories and final clean." },
    ],
    faqs: [
      { q: "How long does a bathroom remodel take?", a: "A hall bath typically takes two to three weeks. A primary suite with a custom shower runs four to six weeks." },
      { q: "What waterproofing do you use?", a: "We use bonded sheet or liquid membranes behind every wet wall and flood-test shower pans before tile is set." },
      { q: "Can you convert my tub to a walk-in shower?", a: "Yes, tub-to-shower conversions are one of our most requested projects and can usually be completed in under two weeks." },
      { q: "Do I need a permit for a bathroom remodel?", a: "Any plumbing or electrical changes require a permit in Houston and most surrounding cities. We handle the filing and inspections." },
    ],
    keywords: ["bathroom remodel", "bathroom renovation", "shower remodel", "tub to shower conversion"],
    timeline: "2 – 6 weeks",
  },
  {
    slug: "room-additions",
    name: "Room Additions",
    shortName: "Room Additions",
    icon: "Expand",
    excerpt:
      "Primary suites, sunrooms, second stories and garage conversions that blend seamlessly with your existing home.",
    intro: [
      "When you love your neighborhood but need more space, an addition beats moving. We engineer foundations for Houston's expansive clay soils, match rooflines and siding, and tie into your HVAC and electrical so the new space feels original.",
      "Our team handles setback checks, HOA architectural review and city permitting so your addition is fully legal and adds appraisable square footage.",
    ],
    features: [
      "Primary bedroom and bath suites",
      "Second-story additions",
      "Garage and attic conversions",
      "Sunrooms and enclosed patios",
      "In-law and multigenerational suites",
      "Engineered foundations for clay soil",
    ],
    process: [
      { title: "Feasibility", text: "We check setbacks, HOA rules and utilities before you spend on drawings." },
      { title: "Engineering & permits", text: "Structural plans, energy code compliance and permit approval." },
      { title: "Foundation & framing", text: "Post-tension or pier-and-beam foundation, then framing and dry-in." },
      { title: "Finish-out", text: "Mechanicals, insulation, drywall, flooring and paint to match your home." },
    ],
    faqs: [
      { q: "How much does an addition cost?", a: "Cost depends on foundation, roof tie-in, and whether a bathroom is included. We provide a free on-site estimate with fixed-scope pricing." },
      { q: "Will the addition match my house?", a: "We source matching brick, siding, shingles and trim, and align rooflines and window heights so the addition looks original." },
      { q: "Do I need HOA approval?", a: "Most Houston-area HOAs require architectural review. We prepare the drawing package and submit it on your behalf." },
      { q: "How long does an addition take?", a: "A single-room addition takes eight to twelve weeks; a second story or full suite runs three to five months." },
    ],
    keywords: ["room addition", "home addition contractor", "second story addition", "garage conversion"],
    timeline: "8 weeks – 5 months",
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    icon: "Warehouse",
    featured: true,
    excerpt:
      "Storm-rated shingle, metal and flat roof replacement with insurance claim support and manufacturer-backed warranties.",
    intro: [
      "Gulf Coast roofs take a beating from hail, hurricane winds and 100-degree summers. We install Class 4 impact-resistant shingles, standing-seam metal and TPO flat systems engineered for Houston's wind zones.",
      "If you have storm damage, our team documents it, meets your adjuster on-site and makes sure the scope covers everything required by code, including decking, underlayment and ventilation.",
    ],
    features: [
      "Full roof replacement and re-decking",
      "Class 4 impact-resistant shingles",
      "Standing-seam metal roofing",
      "TPO and modified bitumen flat roofs",
      "Insurance claim documentation",
      "Ridge vents, flashing and gutter systems",
    ],
    process: [
      { title: "Inspection", text: "Drone and on-roof inspection with a photo report of every issue." },
      { title: "Estimate or claim", text: "Fixed-price quote, or we meet your adjuster and align the scope." },
      { title: "Install", text: "Most residential roofs are torn off and replaced in a single day." },
      { title: "Clean-up & warranty", text: "Magnetic nail sweep, debris removal and registered warranty." },
    ],
    faqs: [
      { q: "How do I know if I need a new roof?", a: "Missing shingles, granule loss, curling edges, ceiling stains and roofs older than 15 years all warrant an inspection. Ours is free." },
      { q: "Do you work with insurance?", a: "Yes. We document damage, meet the adjuster, and supplement the claim if items required by code were missed." },
      { q: "What roofing is best for Houston?", a: "Class 4 architectural shingles offer the best value; standing-seam metal lasts longest and can lower insurance premiums." },
      { q: "How long does a roof replacement take?", a: "Most homes are completed in one day. Large or steep roofs may take two." },
    ],
    keywords: ["roofing contractor", "roof replacement", "roof repair", "storm damage roof", "metal roofing"],
    timeline: "1 – 3 days",
  },
  {
    slug: "commercial-construction",
    name: "Commercial Construction",
    shortName: "Commercial Construction",
    icon: "Building2",
    featured: true,
    excerpt:
      "Tenant improvements, retail build-outs, restaurants, offices and warehouses delivered on schedule with minimal downtime.",
    intro: [
      "Business owners need a contractor who understands that every day of construction is a day of lost revenue. We plan after-hours phasing, coordinate with landlords and expedite commercial permits so you open on time.",
      "Our commercial portfolio includes restaurant kitchens, medical offices, retail storefronts, salons, churches and light-industrial warehouse finish-outs across the Houston metro.",
    ],
    features: [
      "Tenant improvements and white-box finish-outs",
      "Restaurant and commercial kitchen build-outs",
      "Medical and dental office construction",
      "Retail storefronts and signage coordination",
      "ADA compliance upgrades",
      "Metal buildings and warehouse office space",
    ],
    process: [
      { title: "Pre-construction", text: "Budgeting, value engineering and landlord coordination." },
      { title: "Permitting", text: "Commercial plan review, health department and fire marshal approvals." },
      { title: "Construction", text: "Phased schedule with daily site supervision and safety oversight." },
      { title: "Certificate of occupancy", text: "Final inspections, CO issuance and turnover documentation." },
    ],
    faqs: [
      { q: "Do you handle commercial permits in Houston?", a: "Yes. We manage plan review with the City of Houston and surrounding jurisdictions, including health and fire marshal sign-offs." },
      { q: "Can you work nights and weekends?", a: "We routinely schedule after-hours work for occupied retail and office spaces to avoid disrupting your business." },
      { q: "Do you build restaurants?", a: "Restaurant build-outs, including hoods, grease traps and health-code compliance, are a core specialty." },
      { q: "Are you bonded?", a: "We can provide performance and payment bonds on projects that require them." },
    ],
    keywords: ["commercial contractor", "commercial construction company", "tenant improvement contractor", "restaurant build out"],
    timeline: "4 weeks – 9 months",
  },
  {
    slug: "new-home-construction",
    name: "New Home Construction",
    shortName: "Custom Home Building",
    icon: "House",
    excerpt:
      "Custom homes on your lot, from design and engineering to landscaping, with transparent allowances and no surprises.",
    intro: [
      "Building on your own land gives you a home that fits your life instead of a builder's floor plan. We guide you through site prep, drainage, foundation engineering, energy code and finish selections with a clear allowance schedule.",
      "Our custom homes are built to exceed Houston's energy code, with spray-foam or blown insulation options, high-efficiency HVAC and hurricane-rated windows.",
    ],
    features: [
      "Design-build with architect partners",
      "Site preparation and drainage engineering",
      "Post-tension slab foundations",
      "Energy-efficient envelopes and HVAC",
      "Transparent allowance schedules",
      "Ten-year structural warranty",
    ],
    process: [
      { title: "Land & feasibility", text: "Survey, soil test, floodplain and utility review." },
      { title: "Design & budget", text: "Plans, engineering and a detailed cost breakdown." },
      { title: "Construction", text: "Foundation, framing, mechanicals, finishes." },
      { title: "Move-in", text: "Final inspection, orientation walkthrough and warranty." },
    ],
    faqs: [
      { q: "How long does it take to build a custom home?", a: "Most custom homes take nine to fourteen months from permit to move-in, depending on size and finish level." },
      { q: "Do you build in the floodplain?", a: "Yes, with elevated foundations and drainage designed to meet Harris County and FEMA requirements." },
      { q: "Can I use my own architect?", a: "Absolutely. We work with your plans or connect you with our architect partners." },
      { q: "What warranty comes with a new home?", a: "One-year workmanship, two-year mechanical and ten-year structural coverage." },
    ],
    keywords: ["custom home builder", "new home construction", "build on your lot", "home builder Houston"],
    timeline: "9 – 14 months",
  },
  {
    slug: "concrete-driveways",
    name: "Concrete & Driveways",
    shortName: "Concrete Work",
    icon: "Layers",
    excerpt:
      "Driveways, patios, foundations, sidewalks and stamped concrete poured with proper reinforcement for Houston clay.",
    intro: [
      "Concrete that cracks in two summers is usually concrete that was poured without regard for our expansive soils. We compact base, place rebar or fiber mesh, cut control joints and cure properly so your slab lasts.",
      "From a simple driveway replacement to decorative stamped patios and slab foundations for additions or garages, our crews pour and finish year-round.",
    ],
    features: [
      "Driveway replacement and widening",
      "Stamped and decorative patios",
      "Sidewalks, walkways and steps",
      "Slab foundations and garage pads",
      "Retaining walls and drainage",
      "Concrete repair and leveling",
    ],
    process: [
      { title: "Layout", text: "Grade, forms and drainage planned to move water away from your home." },
      { title: "Base & steel", text: "Compacted base with rebar grid or fiber reinforcement." },
      { title: "Pour & finish", text: "Broom, smooth or stamped finish; control joints cut." },
      { title: "Cure & seal", text: "Proper curing and optional sealer for stain resistance." },
    ],
    faqs: [
      { q: "How thick should a driveway be?", a: "We pour residential driveways at a minimum of four inches with reinforcement; five to six inches for heavy vehicles or RVs." },
      { q: "When can I drive on new concrete?", a: "Foot traffic after 24 hours, passenger vehicles after seven days, and heavy vehicles after 28 days." },
      { q: "Do you need a permit for a driveway?", a: "Houston and most suburbs require a permit for driveway approaches that touch the public right-of-way. We take care of it." },
      { q: "Can you match stamped concrete to my patio?", a: "Yes, we offer dozens of stamp patterns and integral or broadcast colors." },
    ],
    keywords: ["concrete contractor", "driveway replacement", "stamped concrete patio", "concrete driveway"],
    timeline: "2 – 7 days",
  },
  {
    slug: "fencing-decks",
    name: "Fencing & Decks",
    shortName: "Fence & Deck Building",
    icon: "Fence",
    excerpt:
      "Cedar, composite and iron fences plus outdoor decks and pergolas built to stand up to Gulf Coast humidity and wind.",
    intro: [
      "Outdoor living is a year-round affair in Houston. We build cedar privacy fences with steel posts, low-maintenance composite decks, covered patios and pergolas that extend your home outside.",
      "All structures are engineered for wind load, fastened with stainless or coated hardware and sealed against moisture so they look sharp through humid summers and hurricane season.",
    ],
    features: [
      "Cedar and treated pine privacy fences",
      "Wrought iron and aluminum fencing",
      "Composite and hardwood decks",
      "Pergolas and covered patios",
      "Automatic driveway gates",
      "Fence repair and post replacement",
    ],
    process: [
      { title: "Property lines & HOA", text: "We confirm survey pins and HOA height and material rules." },
      { title: "Materials", text: "Choose cedar, composite, iron or aluminum with hardware options." },
      { title: "Build", text: "Steel posts set in concrete; decks framed to code with proper ledgers." },
      { title: "Finish", text: "Stain or seal, gate hardware and final walkthrough." },
    ],
    faqs: [
      { q: "How long does a fence last in Houston?", a: "Cedar on steel posts lasts 15 to 20 years; composite and iron last decades with minimal maintenance." },
      { q: "Do I need a permit for a fence?", a: "Fences over eight feet, corner-lot fences and anything in a floodway typically require a permit; we check for you." },
      { q: "Composite or wood deck?", a: "Composite costs more up front but needs no staining and resists rot and termites, which matters in our humidity." },
      { q: "Can you build a deck around my pool?", a: "Yes, we build pool decks and surrounds with slip-resistant surfaces and code-compliant barriers." },
    ],
    keywords: ["fence company", "fence installation", "deck builder", "pergola builder", "covered patio"],
    timeline: "1 – 3 weeks",
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    shortName: "Painting",
    icon: "PaintRoller",
    excerpt:
      "Clean lines, premium coatings and thorough prep for interiors, exteriors, cabinets and commercial spaces.",
    intro: [
      "A great paint job is 70 percent preparation. We pressure wash, scrape, caulk, prime and repair rotted trim before the first coat, then apply premium Sherwin-Williams or Benjamin Moore coatings for a finish that lasts.",
      "Interior repaints, exterior refreshes, cabinet spraying and commercial repaints are all scheduled around your household or business hours.",
    ],
    features: [
      "Interior walls, ceilings and trim",
      "Exterior siding, stucco and brick",
      "Cabinet refinishing and spraying",
      "Wood rot repair and caulking",
      "Wallpaper removal and drywall repair",
      "Commercial and HOA repaints",
    ],
    process: [
      { title: "Color consult", text: "Samples on your walls, in your light, before you commit." },
      { title: "Prep", text: "Wash, scrape, sand, repair, caulk and prime." },
      { title: "Paint", text: "Two coats of premium paint with crisp cut lines." },
      { title: "Inspect", text: "Walkthrough in daylight and touch-ups on the spot." },
    ],
    faqs: [
      { q: "How often should I repaint my exterior?", a: "Houston sun and humidity mean most exteriors need repainting every six to ten years, sooner for south- and west-facing walls." },
      { q: "Do you spray or brush cabinets?", a: "We spray cabinet doors in a controlled setup for a factory-smooth finish and brush or roll frames in place." },
      { q: "What paint brands do you use?", a: "Sherwin-Williams Duration, Emerald and SuperPaint, or Benjamin Moore Aura and Regal Select depending on the surface." },
      { q: "How long does a whole-house repaint take?", a: "Interior repaints run three to five days for a typical home; exteriors take two to four days including prep." },
    ],
    keywords: ["painting contractor", "house painters", "exterior painting", "cabinet painting"],
    timeline: "2 – 7 days",
  },
  {
    slug: "siding-windows-doors",
    name: "Siding, Windows & Doors",
    shortName: "Siding & Windows",
    icon: "DoorOpen",
    excerpt:
      "HardiePlank siding, energy-efficient windows and entry doors that cut cooling bills and boost curb appeal.",
    intro: [
      "Your home's envelope is its first defense against heat, humidity and storms. We replace rotted wood siding with James Hardie fiber cement, install Energy Star windows rated for Gulf Coast wind zones and hang solid entry and patio doors.",
      "Every installation includes proper flashing, house wrap and sealing so moisture stays out and conditioned air stays in.",
    ],
    features: [
      "James Hardie fiber cement siding",
      "Wood rot repair and trim replacement",
      "Vinyl, fiberglass and aluminum windows",
      "Hurricane-rated impact windows",
      "Entry, French and sliding patio doors",
      "Soffit, fascia and gutter replacement",
    ],
    process: [
      { title: "Inspection", text: "We probe for rot and check flashing, wrap and caulk." },
      { title: "Selections", text: "Siding profiles, colors, window styles and door hardware." },
      { title: "Install", text: "Remove, repair sheathing, wrap, flash and install." },
      { title: "Seal & paint", text: "Caulk, prime and paint for a finished look." },
    ],
    faqs: [
      { q: "Is HardiePlank worth it in Houston?", a: "Yes. Fiber cement resists rot, termites, hail and fire and carries a 30-year warranty, making it ideal for our climate." },
      { q: "Will new windows lower my energy bill?", a: "Low-E double-pane windows typically cut cooling costs 10 to 20 percent compared with single-pane aluminum windows." },
      { q: "Do you replace just a few windows?", a: "We handle single-window replacements as well as whole-house projects." },
      { q: "How long does siding replacement take?", a: "Most homes are completed in one to two weeks including paint." },
    ],
    keywords: ["siding contractor", "window replacement", "HardiePlank installation", "door installation"],
    timeline: "1 – 3 weeks",
  },
  {
    slug: "flooring",
    name: "Flooring Installation",
    shortName: "Flooring",
    icon: "Grid3x3",
    excerpt:
      "Luxury vinyl plank, tile, hardwood and engineered floors installed level, tight and ready for Houston humidity.",
    intro: [
      "Flooring transforms a home faster than any other update. We remove old carpet and tile, level the slab, treat for moisture and install luxury vinyl plank, porcelain tile, hardwood or engineered wood with precise transitions.",
      "Our installers are experienced with Houston's slab-on-grade homes and know how to handle moisture vapor, expansion gaps and uneven substrates.",
    ],
    features: [
      "Luxury vinyl plank and tile (LVP/LVT)",
      "Porcelain and ceramic tile",
      "Solid and engineered hardwood",
      "Slab leveling and moisture barriers",
      "Stair treads and risers",
      "Baseboard and transition installation",
    ],
    process: [
      { title: "Measure & moisture test", text: "Square footage plus slab moisture readings to pick the right product." },
      { title: "Removal & prep", text: "Old floor removed, slab ground or leveled, barrier applied." },
      { title: "Install", text: "Floors laid with proper expansion and pattern layout." },
      { title: "Trim", text: "Baseboards, quarter round and transitions installed and caulked." },
    ],
    faqs: [
      { q: "Is LVP good for Houston homes?", a: "Luxury vinyl plank is waterproof, durable and ideal for slab foundations and flood-prone areas, which is why it is our most installed product." },
      { q: "Can hardwood be installed on a slab?", a: "Engineered hardwood can be glued to a moisture-treated slab. Solid hardwood requires a subfloor or plywood sleeper system." },
      { q: "How long does flooring installation take?", a: "Most homes are completed in two to four days including removal and trim." },
      { q: "Do you move furniture?", a: "Yes, furniture moving and appliance disconnect and reconnect are included in our proposals." },
    ],
    keywords: ["flooring installation", "flooring contractor", "LVP installation", "tile installer", "hardwood floors"],
    timeline: "2 – 5 days",
  },
  {
    slug: "design-build-preconstruction",
    name: "Design-Build & Preconstruction",
    shortName: "Design-Build",
    icon: "DraftingCompass",
    featured: true,
    excerpt:
      "One contract for design and construction, with preconstruction budgeting and value engineering that removes surprises before the first shovel.",
    intro: [
      "Design-build puts the architect, engineer, estimator and builder on the same team from day one. Instead of designing a project, bidding it out and discovering it is over budget, you get real-time pricing as the drawings develop and a single point of accountability through completion.",
      "Our preconstruction services include feasibility studies, conceptual estimates, constructability reviews, scheduling, permit strategy and value engineering. Commercial owners, developers and homeowners building custom use this approach to lock budget and schedule early.",
    ],
    features: [
      "Feasibility and site analysis",
      "Conceptual and detailed cost estimating",
      "Architectural and engineering coordination",
      "Value engineering and constructability review",
      "Permit strategy and jurisdiction coordination",
      "Guaranteed maximum price contracts",
    ],
    process: [
      { title: "Discovery", text: "Program, budget, site and schedule goals defined together." },
      { title: "Concept & estimate", text: "Schematic drawings priced in real time with alternates." },
      { title: "Design development", text: "Engineering, selections and permit set with a locked GMP." },
      { title: "Build", text: "The same team that designed it builds it, on one contract." },
    ],
    faqs: [
      { q: "What is design-build?", a: "A delivery method where one firm is responsible for both design and construction under a single contract, which removes finger-pointing between architect and builder and shortens the schedule." },
      { q: "Is design-build more expensive?", a: "It is usually less. Continuous cost feedback during design avoids redesign, and overlapping design and permitting with early construction shortens the timeline." },
      { q: "Do you work with my architect?", a: "Yes. We can join as construction manager during design or bring our architect partners, whichever fits your project." },
      { q: "What is a GMP?", a: "A guaranteed maximum price: the most you will pay for the defined scope. Savings below the GMP return to you." },
    ],
    keywords: ["design build contractor", "design-build construction", "preconstruction services", "construction cost estimating", "value engineering"],
    timeline: "Preconstruction 4 – 12 weeks; build per project",
  },
  {
    slug: "construction-management",
    name: "Construction Management",
    shortName: "Construction Management",
    icon: "ClipboardCheck",
    excerpt:
      "Owner's-side management of schedule, budget, safety and quality for commercial and multi-site projects across Texas.",
    intro: [
      "When you have a project team already in place, or several projects at once, Lion Construction serves as construction manager: we run the schedule, manage bids and subcontracts, enforce safety, track budget and report to ownership.",
      "We manage tenant improvements for property owners, roofing and repair programs for portfolios, and ground-up commercial projects for developers who want an experienced Houston builder on their side of the table.",
    ],
    features: [
      "Bid management and subcontractor procurement",
      "Master schedule and look-ahead planning",
      "Budget tracking and pay-application review",
      "Safety programs and OSHA compliance",
      "Quality control and punch management",
      "Owner reporting and closeout documentation",
    ],
    process: [
      { title: "Planning", text: "Scope, schedule, budget and procurement strategy." },
      { title: "Procurement", text: "Bid packages, leveling and subcontract award." },
      { title: "Construction", text: "Daily supervision, safety, RFIs and reporting." },
      { title: "Closeout", text: "Punch list, commissioning, warranties and as-builts." },
    ],
    faqs: [
      { q: "What is the difference between CM and general contracting?", a: "As general contractor we hold the trade contracts and deliver a fixed price. As construction manager we manage the work on your behalf for a fee, and trade contracts may be held by you." },
      { q: "Do you manage multi-site programs?", a: "Yes. We run roofing, repair and tenant-improvement programs across multiple properties with a single reporting structure." },
      { q: "Can you take over a troubled project?", a: "We regularly step in mid-project to re-baseline schedule and budget and bring the job to completion." },
      { q: "What reporting do owners receive?", a: "Weekly schedule and budget reports, photo logs, safety records and a monthly executive summary." },
    ],
    keywords: ["construction management company", "construction manager Houston", "commercial project management", "owner's representative construction"],
    timeline: "Per project",
  },
  {
    slug: "land-clearing-site-prep",
    name: "Land Clearing & Site Preparation",
    shortName: "Land Clearing",
    icon: "Tractor",
    excerpt:
      "Lot clearing, tree removal, grading, right-of-way clearing, culverts and pad preparation for residential, commercial and utility projects.",
    intro: [
      "Before anything can be built, the land has to be ready. Lion Construction clears lots and acreage, removes and mulches trees, grades for drainage, builds pads and access roads, and installs culverts and driveways across Greater Houston and Southeast Texas.",
      "Our right-of-way clearing and construction-prep crews support utility, pipeline and roadway contractors with mulching, brush removal and access preparation, with erosion control and permits handled as part of the scope.",
    ],
    features: [
      "Lot and acreage clearing with forestry mulchers",
      "Tree removal and stump grinding",
      "Grading, drainage and building pads",
      "Right-of-way and easement clearing",
      "Culverts, driveways and access roads",
      "Erosion control and SWPPP compliance",
    ],
    process: [
      { title: "Site walk", text: "Boundaries, trees to save, drainage and access reviewed." },
      { title: "Plan & permits", text: "Clearing plan, tree permits where required, erosion control." },
      { title: "Clear & grade", text: "Mulching, removal, grading and pad construction." },
      { title: "Finish", text: "Culverts, driveway base and final grade ready for construction." },
    ],
    faqs: [
      { q: "How much does land clearing cost per acre?", a: "It depends on tree density, access and whether material is mulched on site or hauled. We quote after a site walk with a fixed per-project price." },
      { q: "Do you need a permit to clear land in Houston?", a: "The City of Houston regulates certain trees in the right-of-way, and Harris County requires floodplain development permits in mapped zones. We check and file for you." },
      { q: "Can you build a house pad on my lot?", a: "Yes. We clear, grade, compact and build engineered pads for slab foundations, and can add drainage swales and culverts." },
      { q: "Do you do right-of-way clearing for utilities?", a: "Yes. We support utility and pipeline contractors with mulching, brush removal and access roads across Southeast Texas." },
    ],
    keywords: ["land clearing Houston", "lot clearing", "site preparation contractor", "right of way clearing", "tree removal and grading", "building pad construction"],
    timeline: "1 – 10 days per site",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
