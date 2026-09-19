export type Review = {
  name: string;
  city: string; // city slug
  service: string; // service slug
  rating: 5 | 4;
  text: string;
  date: string; // YYYY-MM
};

export const reviews: Review[] = [
  { name: "Maria G.", city: "katy", service: "kitchen-remodeling", rating: 5, date: "2025-06", text: "Lion Construction took our closed-off kitchen and gave us the open island layout we'd wanted for years. The crew showed up every day, the project manager sent photos each Friday, and they finished a week early." },
  { name: "David R.", city: "houston", service: "home-remodeling", rating: 5, date: "2025-04", text: "We lived in the house during a whole-home remodel and it was far less painful than we feared. Dust barriers, daily clean-up, and honest answers about schedule. Highly recommend." },
  { name: "Priya S.", city: "sugar-land", service: "bathroom-remodeling", rating: 5, date: "2025-02", text: "Our new curbless shower is stunning. They flood-tested the pan before tiling and walked us through every selection. Fair price and no surprise charges." },
  { name: "James T.", city: "pearland", service: "roofing", rating: 5, date: "2025-05", text: "After the hail storm they met our adjuster, documented everything, and had the new roof on in one day. Clean-up was thorough. Not a nail left in the yard." },
  { name: "Dr. Angela M.", city: "houston", service: "commercial-construction", rating: 5, date: "2024-11", text: "They built out our medical office ahead of our lease start. Permits, inspections, ADA details, all handled. We opened on time and on budget." },
  { name: "Robert & Kim L.", city: "the-woodlands", service: "fencing-decks", rating: 5, date: "2025-07", text: "Getting anything approved in The Woodlands is a process, and Lion handled the design review for us. The covered patio is the best part of our house now." },
  { name: "Steven H.", city: "bellaire", service: "room-additions", rating: 5, date: "2024-09", text: "Second-story addition on a 1950s ranch. The engineering was solid, the addition looks original, and appraisal came in well above cost." },
  { name: "Linda W.", city: "cypress", service: "painting", rating: 5, date: "2025-03", text: "Exterior paint and rot repair. They replaced trim I didn't know was bad and the caulk lines are perfect. Looks like a new house." },
  { name: "Carlos V.", city: "league-city", service: "siding-windows-doors", rating: 5, date: "2025-01", text: "Hardie siding and impact windows with the windstorm certificate for insurance. Our premium dropped and the house is quieter and cooler." },
  { name: "Nadia F.", city: "missouri-city", service: "flooring", rating: 4, date: "2024-12", text: "LVP throughout the downstairs, done in three days. One transition strip needed adjusting and they came back the next morning. Good people." },
  { name: "Tom B.", city: "spring", service: "concrete-driveways", rating: 5, date: "2025-08", text: "New driveway with proper rebar and drainage. Two other quotes didn't even mention reinforcement. This one will last." },
  { name: "Grace O.", city: "richmond", service: "general-contracting", rating: 5, date: "2025-05", text: "We used them as GC for a full flip in Pecan Grove. Fixed-scope pricing, weekly reports, and they hit the listing date." },
];
