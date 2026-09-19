export type City = {
  slug: string;
  name: string;
  county: string;
  /** "metro" = Greater Houston core service area. "texas" = statewide reach, quoted case by case. */
  tier: "metro" | "texas";
  zips: string[];
  neighborhoods: string[];
  /** One or two genuinely local sentences used on the city page and service × city pages. */
  blurb: string;
  /** Local building-permit authority named on the page. */
  permitAuthority: string;
  lat: number;
  lng: number;
  driveMinutes: number;
};

export const cities: City[] = [
  {
    slug: "houston",
    name: "Houston",
    county: "Harris County",
    tier: "metro",
    zips: ["77002","77003","77004","77005","77006","77007","77008","77009","77010","77011","77012","77013","77014","77015","77016","77017","77018","77019","77020","77021","77022","77023","77024","77025","77026","77027","77028","77029","77030","77031","77032","77033","77034","77035","77036","77037","77038","77039","77040","77041","77042","77043","77044","77045","77046","77047","77048","77049","77050","77051","77053","77054","77055","77056","77057","77058","77059","77060","77061","77062","77063","77064","77065","77066","77067","77068","77069","77070","77071","77072","77073","77074","77075","77076","77077","77078","77079","77080","77081","77082","77083","77084","77085","77086","77087","77088","77089","77090","77091","77092","77093","77094","77095","77096","77098","77099"],
    neighborhoods: ["The Heights", "Montrose", "River Oaks", "Memorial", "Midtown", "Meyerland", "Oak Forest", "Spring Branch", "Westchase", "Clear Lake", "Kingwood", "Bellaire-adjacent West University"],
    blurb: "From 1920s bungalows in the Heights to mid-century ranches in Meyerland and new construction in Spring Branch, Houston's housing stock is as varied as its neighborhoods. Our crews are based inside the Loop and work in every quadrant of the city.",
    permitAuthority: "City of Houston Permitting Center",
    lat: 29.7604, lng: -95.3698, driveMinutes: 0,
  },
  {
    slug: "katy", name: "Katy", county: "Harris, Fort Bend & Waller Counties", tier: "metro",
    zips: ["77449","77450","77491","77492","77493","77494"],
    neighborhoods: ["Cinco Ranch", "Cross Creek Ranch", "Grand Lakes", "Firethorne", "Elyson", "Old Katy", "Seven Meadows", "Kelliwood"],
    blurb: "Katy's master-planned communities like Cinco Ranch and Cross Creek Ranch have strict HOA architectural guidelines, and many homes built in the early 2000s are now due for kitchen, bath and roof updates. We know the review boards and the builders' original specs.",
    permitAuthority: "City of Katy Permits & Inspections (or Harris / Fort Bend County for unincorporated areas)",
    lat: 29.7858, lng: -95.8245, driveMinutes: 35,
  },
  {
    slug: "sugar-land", name: "Sugar Land", county: "Fort Bend County", tier: "metro",
    zips: ["77478","77479","77487","77496","77498"],
    neighborhoods: ["First Colony", "Riverstone", "Telfair", "Greatwood", "New Territory", "Sweetwater", "Sugar Creek", "Avalon"],
    blurb: "Sugar Land homeowners in First Colony and Greatwood are remodeling 1990s builds into open-concept layouts, while Riverstone and Telfair see high-end finish upgrades. We hold Sugar Land's contractor registration and handle its plan-review process routinely.",
    permitAuthority: "City of Sugar Land Building Permits",
    lat: 29.6197, lng: -95.6349, driveMinutes: 30,
  },
  {
    slug: "pearland", name: "Pearland", county: "Brazoria & Harris Counties", tier: "metro",
    zips: ["77581","77584","77588"],
    neighborhoods: ["Shadow Creek Ranch", "Silverlake", "Southern Trails", "Old Townsite", "Pomona", "Green Tee Terrace"],
    blurb: "Pearland grew fast in the 2000s, and Shadow Creek Ranch and Silverlake homes are hitting the age where roofs, HVAC and original builder-grade kitchens need replacing. Our Pearland crews are twenty minutes from the Medical Center and work the city daily.",
    permitAuthority: "City of Pearland Community Development",
    lat: 29.5636, lng: -95.2860, driveMinutes: 25,
  },
  {
    slug: "cypress", name: "Cypress", county: "Harris County", tier: "metro",
    zips: ["77429","77433"],
    neighborhoods: ["Bridgeland", "Towne Lake", "Fairfield", "Coles Crossing", "Blackhorse Ranch", "Cypress Creek Lakes", "Longwood"],
    blurb: "Cypress is unincorporated Harris County, which means county permits, MUD utility districts and HOA reviews instead of a city permit office. Bridgeland and Towne Lake homeowners call us for outdoor living, additions and full kitchen remodels.",
    permitAuthority: "Harris County Engineering Department Permits",
    lat: 29.9691, lng: -95.6972, driveMinutes: 35,
  },
  {
    slug: "spring", name: "Spring", county: "Harris & Montgomery Counties", tier: "metro",
    zips: ["77373","77379","77380","77381","77382","77383","77386","77387","77388","77389","77391","77393"],
    neighborhoods: ["Klein", "Gleannloch Farms", "Champion Forest", "Northampton", "Spring Creek Oaks", "Old Town Spring", "Augusta Pines"],
    blurb: "Spring and Klein homes range from wooded 1970s two-stories in Champion Forest to newer builds in Gleannloch Farms. Heavy tree cover means roof and gutter work is constant here, and we handle both Harris and Montgomery County permitting.",
    permitAuthority: "Harris County or Montgomery County Permits (unincorporated)",
    lat: 30.0799, lng: -95.4172, driveMinutes: 35,
  },
  {
    slug: "the-woodlands", name: "The Woodlands", county: "Montgomery County", tier: "metro",
    zips: ["77380","77381","77382","77384","77385","77389"],
    neighborhoods: ["Grogan's Mill", "Panther Creek", "Cochran's Crossing", "Alden Bridge", "Sterling Ridge", "Creekside Park", "Indian Springs", "Carlton Woods"],
    blurb: "The Woodlands enforces some of the strictest design covenants in Texas through its Residential Design Review Committee. We prepare compliant drawing packages for additions, patios and exterior changes so approval comes on the first submission.",
    permitAuthority: "The Woodlands Township Covenant Administration and Montgomery County Permits",
    lat: 30.1658, lng: -95.4613, driveMinutes: 40,
  },
  {
    slug: "pasadena", name: "Pasadena", county: "Harris County", tier: "metro",
    zips: ["77501","77502","77503","77504","77505","77506","77507","77508"],
    neighborhoods: ["Golden Acres", "Pasadena Gardens", "Baywood", "Village Grove", "Riverstone Ranch", "Burke Crenshaw"],
    blurb: "Pasadena's mix of 1950s ranch homes near the refineries and newer construction toward Fairmont Parkway keeps our crews busy with foundation-related repairs, siding and full remodels. Commercial work along Spencer Highway is a specialty.",
    permitAuthority: "City of Pasadena Building Permits",
    lat: 29.6911, lng: -95.2091, driveMinutes: 25,
  },
  {
    slug: "baytown", name: "Baytown", county: "Harris & Chambers Counties", tier: "metro",
    zips: ["77520","77521","77522","77523"],
    neighborhoods: ["Goose Creek", "Country Club Oaks", "Eastpoint", "Lakewood", "Roseland Oaks", "Britton Cravens"],
    blurb: "Baytown's proximity to the ship channel means salt air and heavy weather punish exterior finishes. We install Hardie siding, metal roofing and impact windows built for the coast, and handle commercial finish-outs for the area's industrial contractors.",
    permitAuthority: "City of Baytown Planning & Development Services",
    lat: 29.7355, lng: -94.9774, driveMinutes: 35,
  },
  {
    slug: "league-city", name: "League City", county: "Galveston County", tier: "metro",
    zips: ["77573","77574"],
    neighborhoods: ["South Shore Harbour", "Tuscan Lakes", "Victory Lakes", "Westover Park", "Mar Bella", "Bay Colony", "Magnolia Creek"],
    blurb: "League City sits between Clear Lake and Galveston Bay, so windstorm certification matters for roofs and openings. We provide WPI-8 windstorm inspections on roofing and window projects and work with South Shore Harbour and Tuscan Lakes HOAs regularly.",
    permitAuthority: "City of League City Building Department",
    lat: 29.5075, lng: -95.0949, driveMinutes: 35,
  },
  {
    slug: "missouri-city", name: "Missouri City", county: "Fort Bend & Harris Counties", tier: "metro",
    zips: ["77459","77489"],
    neighborhoods: ["Sienna", "Riverstone", "Quail Valley", "Lake Olympia", "Colony Lakes", "Fondren Park", "Vicksburg"],
    blurb: "Missouri City spans established Quail Valley golf-course homes and fast-growing Sienna, giving us equal parts renovation and outdoor-living work. We are registered with the city and familiar with Sienna's ARC review.",
    permitAuthority: "City of Missouri City Development Services",
    lat: 29.6186, lng: -95.5377, driveMinutes: 25,
  },
  {
    slug: "humble", name: "Humble", county: "Harris County", tier: "metro",
    zips: ["77338","77346","77347","77396"],
    neighborhoods: ["Atascocita", "Fall Creek", "Eagle Springs", "Walden on Lake Houston", "Summerwood", "Balmoral"],
    blurb: "Humble and Atascocita homeowners near Lake Houston see heavy storm exposure and rising water risk, so we do a lot of roof replacement, elevated deck building and flood restoration alongside kitchen and bath remodels in Eagle Springs and Fall Creek.",
    permitAuthority: "City of Humble Permits or Harris County (Atascocita)",
    lat: 29.9988, lng: -95.2622, driveMinutes: 30,
  },
  {
    slug: "conroe", name: "Conroe", county: "Montgomery County", tier: "metro",
    zips: ["77301","77302","77303","77304","77305","77306","77384","77385"],
    neighborhoods: ["Grand Central Park", "Graystone Hills", "April Sound", "Wedgewood", "Panorama Village", "Woodforest", "Teaswood"],
    blurb: "Conroe is one of the fastest-growing cities in the country, with new construction in Grand Central Park and lakeside remodels around Lake Conroe. Our crews handle custom homes, boat-dock-side outdoor kitchens and commercial build-outs along I-45.",
    permitAuthority: "City of Conroe Building Permits",
    lat: 30.3119, lng: -95.4561, driveMinutes: 50,
  },
  {
    slug: "richmond", name: "Richmond", county: "Fort Bend County", tier: "metro",
    zips: ["77406","77407","77469"],
    neighborhoods: ["Aliana", "Harvest Green", "Long Meadow Farms", "Pecan Grove", "Lakes of Bella Terra", "Grand Mission", "Veranda"],
    blurb: "Richmond's new master-planned communities such as Aliana and Harvest Green have strict builder specs, while historic Richmond and Pecan Grove need thoughtful renovation. We manage Fort Bend County permits and every local HOA's review process.",
    permitAuthority: "City of Richmond or Fort Bend County Permits",
    lat: 29.5822, lng: -95.7608, driveMinutes: 40,
  },
  {
    slug: "rosenberg", name: "Rosenberg", county: "Fort Bend County", tier: "metro",
    zips: ["77471"],
    neighborhoods: ["Bonbrook Plantation", "Briarwood Crossing", "Kingdom Heights", "Summer Lakes", "Walnut Creek", "Downtown Rosenberg"],
    blurb: "Rosenberg pairs a historic downtown with rapidly expanding subdivisions west of the Brazos. We remodel older homes near downtown and build patios, fences and additions in Bonbrook Plantation and Kingdom Heights.",
    permitAuthority: "City of Rosenberg Building Permits",
    lat: 29.5572, lng: -95.8086, driveMinutes: 45,
  },
  {
    slug: "tomball", name: "Tomball", county: "Harris County", tier: "metro",
    zips: ["77375","77377"],
    neighborhoods: ["Wildwood at Northpointe", "Lakewood Grove", "Woodtrace", "Rosehill Reserve", "Willowcreek Ranch", "Old Town Tomball"],
    blurb: "Tomball blends acreage properties, a preserved historic downtown and newer subdivisions along 249. Barns, workshops, metal buildings and country-home remodels are common requests here alongside standard kitchen and roofing work.",
    permitAuthority: "City of Tomball Permits or Harris County",
    lat: 30.0972, lng: -95.6161, driveMinutes: 40,
  },
  {
    slug: "friendswood", name: "Friendswood", county: "Galveston & Harris Counties", tier: "metro",
    zips: ["77546","77549"],
    neighborhoods: ["West Ranch", "Eagle Lakes", "Wedgewood Village", "Sun Meadow", "Autumn Creek", "Heritage Park"],
    blurb: "Friendswood's larger lots and established trees make it a favorite for outdoor living, pool decks and additions. Homes along Clear Creek also rely on us for flood-resilient rebuilds with elevated electrical and water-resistant finishes.",
    permitAuthority: "City of Friendswood Community Development",
    lat: 29.5294, lng: -95.2010, driveMinutes: 30,
  },
  {
    slug: "stafford", name: "Stafford", county: "Fort Bend & Harris Counties", tier: "metro",
    zips: ["77477","77497"],
    neighborhoods: ["Stafford Oaks", "Southmeadow", "Kirkwood", "Promenade", "Stafford Run"],
    blurb: "Stafford has no city property tax and a large commercial base along US-59 and the Southwest Freeway, so much of our work here is office, warehouse and retail finish-outs alongside residential remodels in Stafford Oaks.",
    permitAuthority: "City of Stafford Permits & Inspections",
    lat: 29.6161, lng: -95.5577, driveMinutes: 20,
  },
  {
    slug: "bellaire", name: "Bellaire", county: "Harris County", tier: "metro",
    zips: ["77401","77402"],
    neighborhoods: ["Southdale", "Braeburn Country Club Estates", "Bellaire Oaks", "Post Oak Terrace", "Mulberry Manor"],
    blurb: "Bellaire is teardown-and-rebuild territory, with 1950s ranches replaced by custom two-stories on 75-foot lots. We build new homes, whole-house remodels and second-story additions under Bellaire's detailed zoning and drainage requirements.",
    permitAuthority: "City of Bellaire Development Services",
    lat: 29.7058, lng: -95.4588, driveMinutes: 15,
  },
  {
    slug: "deer-park", name: "Deer Park", county: "Harris County", tier: "metro",
    zips: ["77536"],
    neighborhoods: ["Deer Meadows", "Park Green", "College Park", "Heritage", "Battleground Estates"],
    blurb: "Deer Park's well-kept 1960s through 1990s homes are prime for kitchen, bath and flooring updates, and its industrial employers keep our commercial division busy with office and shop build-outs.",
    permitAuthority: "City of Deer Park Building Inspections",
    lat: 29.7052, lng: -95.1238, driveMinutes: 25,
  },
  {
    slug: "la-porte", name: "La Porte", county: "Harris County", tier: "metro",
    zips: ["77571","77572"],
    neighborhoods: ["Fairmont Park", "Lomax", "Shady River", "Brookglen", "Bayside Terrace", "Morgan's Point area"],
    blurb: "La Porte sits on Galveston Bay, so windstorm-rated roofing, siding and windows are essential. We provide certified installations and handle flood-zone rebuilds in Bayside neighborhoods.",
    permitAuthority: "City of La Porte Inspections Division",
    lat: 29.6658, lng: -95.0194, driveMinutes: 30,
  },
  {
    slug: "kingwood", name: "Kingwood", county: "Harris & Montgomery Counties", tier: "metro",
    zips: ["77325","77339","77345"],
    neighborhoods: ["Kings Point", "Fosters Mill", "Kings Forest", "Woodland Hills", "Elm Grove", "Mills Branch", "Royal Shores", "Barrington"],
    blurb: "The Livable Forest's mature trees and 1970s to 1990s homes mean constant roof, siding and remodel work, and Harvey-era flooding along the San Jacinto taught us how to rebuild Kingwood homes with resilience built in.",
    permitAuthority: "City of Houston Permitting Center (annexed) or Montgomery County",
    lat: 30.0530, lng: -95.1854, driveMinutes: 30,
  },
  {
    slug: "fulshear", name: "Fulshear", county: "Fort Bend County", tier: "metro",
    zips: ["77441"],
    neighborhoods: ["Cross Creek Ranch", "Fulbrook on Fulshear Creek", "Weston Lakes", "Jordan Ranch", "Tamarron", "Polo Ranch"],
    blurb: "Fulshear is the fastest-growing city in Texas, and its large-lot estates in Fulbrook and Weston Lakes call for outdoor kitchens, pool houses, barns and custom additions. We know Fulshear's expedited permit process well.",
    permitAuthority: "City of Fulshear Development Services",
    lat: 29.6900, lng: -95.8897, driveMinutes: 45,
  },
  {
    slug: "magnolia", name: "Magnolia", county: "Montgomery County", tier: "metro",
    zips: ["77353","77354","77355"],
    neighborhoods: ["Westwood", "Mostyn Manor", "High Meadow Ranch", "Northgrove", "Audubon", "Magnolia Ridge"],
    blurb: "Magnolia's wooded acreage properties bring us barndominium, workshop, metal roofing and custom home projects, along with kitchen and bath remodels in the newer Northgrove and Audubon communities.",
    permitAuthority: "City of Magnolia or Montgomery County Permits",
    lat: 30.2094, lng: -95.7508, driveMinutes: 55,
  },
  {
    slug: "webster", name: "Webster", county: "Harris County", tier: "metro",
    zips: ["77598"],
    neighborhoods: ["Clear Lake City adjacent", "Edgewater", "Bay Area Boulevard corridor", "NASA Parkway"],
    blurb: "Webster is the retail and medical hub of the Bay Area, so our commercial team handles restaurant, clinic and retail build-outs along Bay Area Boulevard while our residential crews serve Edgewater and Clear Lake homeowners.",
    permitAuthority: "City of Webster Building Department",
    lat: 29.5377, lng: -95.1183, driveMinutes: 30,
  },
  {
    slug: "alvin", name: "Alvin", county: "Brazoria County", tier: "metro",
    zips: ["77511","77512"],
    neighborhoods: ["Kendall Lakes", "Forest Heights", "Mustang Crossing", "Heritage Village", "Downtown Alvin"],
    blurb: "Alvin's older homes and rural acreage properties bring us foundation-related repairs, metal roofing and additions, while Kendall Lakes and Mustang Crossing homeowners call for patios, fences and interior upgrades.",
    permitAuthority: "City of Alvin Building Permits",
    lat: 29.4238, lng: -95.2441, driveMinutes: 40,
  },
  {
    slug: "galveston", name: "Galveston", county: "Galveston County", tier: "metro",
    zips: ["77550","77551","77552","77553","77554","77555"],
    neighborhoods: ["East End Historic District", "Silk Stocking", "Pirates Beach", "Jamaica Beach", "Beachtown", "Evia", "West End"],
    blurb: "Galveston's historic districts require Landmark Commission approval for exterior work, and the entire island needs WPI-8 windstorm certification. We restore Victorian homes downtown and build elevated beach houses on the West End.",
    permitAuthority: "City of Galveston Building Division and Landmark Commission",
    lat: 29.3013, lng: -94.7977, driveMinutes: 60,
  },
  {
    slug: "texas-city", name: "Texas City", county: "Galveston County", tier: "metro",
    zips: ["77590","77591","77592"],
    neighborhoods: ["Lago Mar", "Bayou Vista area", "Westwood", "Pelican Island area", "Nessler Park"],
    blurb: "Texas City is growing quickly with Lago Mar and its 12-acre lagoon, while older neighborhoods near the dike need storm-hardened roofs and siding. Our windstorm-certified crews serve both.",
    permitAuthority: "City of Texas City Building Department",
    lat: 29.3838, lng: -94.9027, driveMinutes: 45,
  },
  {
    slug: "channelview", name: "Channelview", county: "Harris County", tier: "metro",
    zips: ["77530"],
    neighborhoods: ["Sterling Green", "Woodforest", "Channelwood", "Lakeside Village", "Riverwood"],
    blurb: "Channelview's unincorporated status means Harris County permitting, and its ship-channel location means hard weather on exteriors. Siding, roofing and interior remodels for Sterling Green and Woodforest homes are our bread and butter here.",
    permitAuthority: "Harris County Engineering Department Permits",
    lat: 29.7761, lng: -95.1146, driveMinutes: 25,
  },
  {
    slug: "jersey-village", name: "Jersey Village", county: "Harris County", tier: "metro",
    zips: ["77040","77041"],
    neighborhoods: ["Jersey Village proper", "Wyndham Village", "Castlebridge", "Village Heights"],
    blurb: "Jersey Village is a small city with its own permit office and a large stock of 1960s and 1970s homes near White Oak Bayou. We specialize in flood-resilient remodels, elevated finishes and whole-home updates here.",
    permitAuthority: "City of Jersey Village Building Permits",
    lat: 29.8877, lng: -95.5633, driveMinutes: 25,
  },
  {
    slug: "porter", name: "Porter", county: "Montgomery County", tier: "metro",
    zips: ["77365"],
    neighborhoods: ["Oakhurst at Kingwood", "Bentwater on the Bay area", "Riverwalk", "Brooklyn Trails", "Auburn Trails"],
    blurb: "Porter and New Caney are booming along the Grand Parkway with new communities like Oakhurst and Brooklyn Trails. We build outdoor living spaces, additions and commercial shells along US-59.",
    permitAuthority: "Montgomery County Permits",
    lat: 30.1044, lng: -95.2338, driveMinutes: 40,
  },
  {
    slug: "dickinson", name: "Dickinson", county: "Galveston County", tier: "metro",
    zips: ["77539"],
    neighborhoods: ["Bayou Lakes", "Bayou Maison", "Dickinson Bayou area", "Deats Road", "Nicholstone"],
    blurb: "Dickinson homes along the bayou were hit hard by Harvey, and our team has rebuilt dozens with raised electrical, tile floors and closed-cell insulation. Roofing and siding upgrades are also constant in this coastal city.",
    permitAuthority: "City of Dickinson Building Department",
    lat: 29.4608, lng: -95.0513, driveMinutes: 40,
  },
  {
    slug: "manvel", name: "Manvel", county: "Brazoria County", tier: "metro",
    zips: ["77578"],
    neighborhoods: ["Pomona", "Meridiana", "Rodeo Palms", "Sedona Lakes", "Del Bello Lakes"],
    blurb: "Manvel's new master-planned communities along Highway 288 and older acreage properties give us a mix of patio covers, fences and fresh builder-warranty follow-ups plus barns and shops on larger lots.",
    permitAuthority: "City of Manvel Building Permits",
    lat: 29.4627, lng: -95.3580, driveMinutes: 35,
  },
  {
    slug: "sealy", name: "Sealy", county: "Austin County", tier: "metro",
    zips: ["77474"],
    neighborhoods: ["Westward Pointe", "Rexville", "Downtown Sealy", "Frydek", "San Felipe"],
    blurb: "West of Katy along I-10, Sealy's ranch properties and small-town homes bring us metal roofing, barndominiums and classic farmhouse remodels, plus commercial work near the outlet corridor.",
    permitAuthority: "City of Sealy Permits",
    lat: 29.7808, lng: -96.1572, driveMinutes: 55,
  },
  {
    slug: "angleton", name: "Angleton", county: "Brazoria County", tier: "metro",
    zips: ["77515","77516"],
    neighborhoods: ["Windrose Green", "Riverwood Ranch", "Kiber Reserve", "Downtown Angleton", "Bar X Ranch"],
    blurb: "Angleton is Brazoria County's seat and a steady market for roofing, remodels and county-permitted additions on acreage lots. Our commercial team also serves the medical and government buildings downtown.",
    permitAuthority: "City of Angleton Building Department",
    lat: 29.1694, lng: -95.4319, driveMinutes: 55,
  },
  {
    slug: "lake-jackson", name: "Lake Jackson", county: "Brazoria County", tier: "metro",
    zips: ["77566"],
    neighborhoods: ["Plantation Village", "Oyster Creek", "Timbercreek", "Dow Centennial area", "Flag Lake"],
    blurb: "Lake Jackson's mid-century planned neighborhoods and heavy oak canopy mean roof, gutter and siding work stays in demand, while Plantation Village homeowners call us for kitchens and outdoor living.",
    permitAuthority: "City of Lake Jackson Building Department",
    lat: 29.0339, lng: -95.4344, driveMinutes: 65,
  },

  // ---- Statewide reach: major Texas markets quoted case by case ----
  {
    slug: "dallas", name: "Dallas", county: "Dallas County", tier: "texas",
    zips: ["75201","75204","75205","75206","75208","75209","75214","75218","75219","75220","75225","75229","75230","75231","75238","75240","75243","75248","75252"],
    neighborhoods: ["Uptown", "Lakewood", "Preston Hollow", "Oak Cliff", "Lake Highlands", "Highland Park adjacent", "Far North Dallas"],
    blurb: "For Dallas projects we mobilize a dedicated North Texas crew for commercial build-outs and multi-unit renovations. Residential work is quoted case by case with a minimum project size.",
    permitAuthority: "City of Dallas Development Services",
    lat: 32.7767, lng: -96.7970, driveMinutes: 240,
  },
  {
    slug: "fort-worth", name: "Fort Worth", county: "Tarrant County", tier: "texas",
    zips: ["76102","76104","76107","76109","76110","76116","76123","76132","76137","76177","76179","76244"],
    neighborhoods: ["Tanglewood", "Fairmount", "Arlington Heights", "Alliance", "Keller adjacent", "TCU area"],
    blurb: "Our Fort Worth work centers on commercial tenant improvements and roofing programs for property managers, with residential remodels available for larger projects.",
    permitAuthority: "City of Fort Worth Development Services",
    lat: 32.7555, lng: -97.3308, driveMinutes: 260,
  },
  {
    slug: "austin", name: "Austin", county: "Travis County", tier: "texas",
    zips: ["78701","78703","78704","78731","78733","78735","78738","78739","78745","78746","78748","78749","78750","78759"],
    neighborhoods: ["Barton Hills", "Tarrytown", "Westlake adjacent", "Circle C", "Allandale", "Mueller", "Steiner Ranch"],
    blurb: "Austin's permit process is among the slowest in Texas, so we front-load plan review on every project. We take on commercial build-outs and full-home renovations in the Austin metro with scheduled crews.",
    permitAuthority: "City of Austin Development Services",
    lat: 30.2672, lng: -97.7431, driveMinutes: 165,
  },
  {
    slug: "san-antonio", name: "San Antonio", county: "Bexar County", tier: "texas",
    zips: ["78209","78212","78213","78216","78217","78230","78231","78232","78240","78248","78249","78255","78258","78259"],
    neighborhoods: ["Alamo Heights adjacent", "Stone Oak", "The Dominion", "Monte Vista", "Helotes", "Shavano Park"],
    blurb: "San Antonio's limestone soil and older housing stock differ from Houston's clay, and our crews adjust foundations and drainage accordingly. Commercial and roofing programs are our primary San Antonio services.",
    permitAuthority: "City of San Antonio Development Services",
    lat: 29.4241, lng: -98.4936, driveMinutes: 195,
  },
  {
    slug: "beaumont", name: "Beaumont", county: "Jefferson County", tier: "texas",
    zips: ["77701","77702","77703","77705","77706","77707","77708","77713"],
    neighborhoods: ["West End", "Calder Place", "Old Town", "Dowlen Road corridor", "Barrington Heights"],
    blurb: "Beaumont is just ninety minutes from our Houston base and shares our hurricane exposure, making it a natural extension for storm roofing, siding and flood restoration work.",
    permitAuthority: "City of Beaumont Building Codes",
    lat: 30.0802, lng: -94.1266, driveMinutes: 90,
  },
  {
    slug: "college-station", name: "College Station", county: "Brazos County", tier: "texas",
    zips: ["77840","77845","77801","77802","77803","77807","77808"],
    neighborhoods: ["Pebble Creek", "Castlegate", "Southwood Valley", "Wolf Pen Creek", "Bryan Historic District"],
    blurb: "College Station and Bryan give us steady rental-property renovation, student-housing turnarounds and commercial build-outs for the Aggieland market, all within a two-hour reach of Houston.",
    permitAuthority: "City of College Station Planning & Development Services",
    lat: 30.6280, lng: -96.3344, driveMinutes: 105,
  },
  {
    slug: "victoria", name: "Victoria", county: "Victoria County", tier: "texas",
    zips: ["77901","77904","77905"],
    neighborhoods: ["Colony Creek", "Northcrest", "Tanglewood", "Old Victoria", "Country Club"],
    blurb: "Victoria's coastal-plain location made it a Hurricane Harvey rebuilding hub, and our storm restoration and roofing crews still serve homeowners and businesses there today.",
    permitAuthority: "City of Victoria Development Services",
    lat: 28.8053, lng: -97.0036, driveMinutes: 125,
  },
  {
    slug: "corpus-christi", name: "Corpus Christi", county: "Nueces County", tier: "texas",
    zips: ["78401","78404","78411","78412","78413","78414","78418"],
    neighborhoods: ["Southside", "Padre Island", "Flour Bluff", "Calallen", "Bay Area"],
    blurb: "Corpus Christi's coastal windstorm requirements match our Galveston expertise. We deploy for roofing programs, storm restoration and commercial work along the Southside and Padre Island.",
    permitAuthority: "City of Corpus Christi Development Services",
    lat: 27.8006, lng: -97.3964, driveMinutes: 210,
  },
];

export const metroCities = cities.filter((c) => c.tier === "metro");
export const texasCities = cities.filter((c) => c.tier === "texas");

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Map a ZIP code to the first city that lists it. */
export function findCityByZip(zip: string): City | undefined {
  const z = zip.trim();
  return cities.find((c) => c.zips.includes(z));
}

export const allZips = Array.from(new Set(cities.flatMap((c) => c.zips))).sort();
