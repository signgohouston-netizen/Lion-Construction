/**
 * Local knowledge per city: housing stock, the projects we are most often hired for there,
 * and the neighborhood each ZIP code covers. Used on city pages, service × city pages and ZIP pages
 * so every page carries content that is genuinely about that place.
 */
export type CityDetail = {
  housing: string;
  commonProjects: string[];
  zipAreas?: Record<string, string>;
};

export const cityDetails: Record<string, CityDetail> = {
  houston: {
    housing:
      "Houston has no zoning, so a single block can hold a 1920s bungalow, a 1960s ranch and a new three-story townhome. Slab-on-grade foundations on expansive clay, flat roofs on mid-century homes, and post-Harvey flood-resilience upgrades drive much of the work inside the Loop.",
    commonProjects: ["Whole-home remodels of Heights and Montrose bungalows", "Garage apartments and second-story additions on 5,000 sq ft lots", "Restaurant and medical build-outs in Midtown, Westchase and the Galleria", "Roof replacement after spring hail and hurricane-season wind"],
    zipAreas: {
      "77002": "Downtown", "77003": "EaDo / East Downtown", "77004": "Third Ward / Museum District", "77005": "West University / Rice Village", "77006": "Montrose", "77007": "Washington Corridor / Rice Military", "77008": "The Heights", "77009": "Woodland Heights / Near Northside", "77010": "Downtown (Convention District)", "77011": "East End / Magnolia Park", "77012": "Harrisburg / Manchester", "77013": "Northshore", "77014": "North Houston / Greenspoint", "77015": "Cloverleaf / Northshore", "77016": "Trinity Gardens / Northeast Houston", "77017": "Gulfgate / South Houston", "77018": "Garden Oaks / Oak Forest", "77019": "River Oaks / Upper Kirby", "77020": "Fifth Ward / Denver Harbor", "77021": "MacGregor / South Union", "77022": "Independence Heights / Northside", "77023": "Eastwood / Idylwood", "77024": "Memorial / Hunters Creek", "77025": "Braeswood / Linkwood", "77026": "Kashmere Gardens", "77027": "Highland Village / Afton Oaks", "77028": "Settegast / Northeast Houston", "77029": "Pleasantville / Port Houston", "77030": "Texas Medical Center", "77031": "Braeburn / Brays Oaks", "77032": "IAH Airport Area", "77033": "Sunnyside / South Park", "77034": "Southeast Houston / Ellington", "77035": "Westbury / Willow Meadows", "77036": "Sharpstown / Chinatown", "77037": "Aldine", "77038": "Greenspoint West / Aldine", "77039": "Aldine East", "77040": "Jersey Village / Carverdale", "77041": "West Little York / Jersey Village", "77042": "Westchase / Briarmeadow", "77043": "Spring Branch West", "77044": "Lake Houston / Summerwood", "77045": "South Post Oak / Hiram Clarke", "77046": "Greenway Plaza", "77047": "Almeda / South Acres", "77048": "Crestmont / South Acres", "77049": "Sheldon", "77050": "Northeast Houston / Fall Creek", "77051": "Sunnyside", "77053": "Fort Bend Houston / Ridgemont", "77054": "NRG / Astrodome Area", "77055": "Spring Branch", "77056": "Galleria / Tanglewood", "77057": "Galleria West / Woodlake", "77058": "Clear Lake / NASA", "77059": "Clear Lake / Brook Forest", "77060": "Greenspoint", "77061": "Hobby Airport / Glenbrook Valley", "77062": "Clear Lake City", "77063": "Briargrove Park / Woodlake", "77064": "Willowbrook / Northwest Houston", "77065": "Copperfield / Cypress South", "77066": "Champions / Greenwood Forest", "77067": "Bammel / Greenspoint North", "77068": "Olde Oaks / Northgate Forest", "77069": "Champion Forest", "77070": "Willowbrook / Lakewood Forest", "77071": "Fondren Southwest", "77072": "Alief", "77073": "Imperial Valley / North Houston", "77074": "Sharpstown South", "77075": "South Belt / Sagemont", "77076": "Northline", "77077": "Energy Corridor / Briar Forest", "77078": "East Little York / Northeast Houston", "77079": "Memorial West / Nottingham Forest", "77080": "Spring Branch North", "77081": "Gulfton", "77082": "Westchase West / Alief North", "77083": "Mission Bend / Alief", "77084": "Bear Creek / Addicks", "77085": "Fondren Southwest / Fort Bend Houston", "77086": "Bammel / Northwest Houston", "77087": "Gulfgate / Pecan Park", "77088": "Inwood / Acres Homes", "77089": "Sagemont / South Belt", "77090": "Cypress Station / Northampton", "77091": "Acres Homes", "77092": "Oak Forest West / Northwest Crossing", "77093": "Northside / Eastex", "77094": "Energy Corridor / Kelliwood", "77095": "Copperfield / Cypress", "77096": "Meyerland / Maplewood", "77098": "Upper Kirby / Montrose South", "77099": "Alief / Beechnut",
    },
  },
  katy: {
    housing: "Most Katy homes were built between 1995 and 2015 by production builders, so they share the same aging points: original three-tab roofs, builder-grade kitchens, single-pane windows and aluminum-clad exteriors. Lots are generous and HOA rules are detailed.",
    commonProjects: ["Kitchen islands and pantry expansions in Cinco Ranch", "Covered patios and outdoor kitchens in Cross Creek Ranch", "Class 4 roof replacements after hail", "HOA-approved additions and garage conversions"],
    zipAreas: { "77449": "North Katy / Bear Creek Village", "77450": "Cinco Ranch / Kelliwood / Nottingham Country", "77491": "Katy (PO boxes)", "77492": "Katy (PO boxes)", "77493": "Old Katy / Elyson / Cane Island", "77494": "Cinco Ranch South / Seven Meadows / Grand Lakes" },
  },
  "sugar-land": {
    housing: "Sugar Land's First Colony and Sugar Creek homes date to the 1980s and 1990s, with formal layouts that owners now open up. Riverstone and Telfair are newer and skew toward high-end finish upgrades rather than structural changes.",
    commonProjects: ["Open-concept conversions in First Colony and Greatwood", "Primary bath spa remodels in Riverstone", "Whole-home flooring and paint refreshes", "Commercial finish-outs along Highway 6 and US-59"],
    zipAreas: { "77478": "Sugar Creek / Town Square / Sugar Mill", "77479": "First Colony / Riverstone / Telfair / Greatwood", "77487": "Sugar Land (PO boxes)", "77496": "Sugar Land (PO boxes)", "77498": "Sugar Land West / New Territory adjacent" },
  },
  pearland: {
    housing: "West Pearland is dominated by 2000s builds in Shadow Creek Ranch and Silverlake, while east Pearland near the Old Townsite has 1960s to 1980s homes on larger lots. Both need roofs, HVAC and kitchens right now.",
    commonProjects: ["Roof and gutter replacement in Shadow Creek Ranch", "Kitchen and bath updates in Silverlake", "Room additions on Old Townsite lots", "Fences and patio covers throughout"],
    zipAreas: { "77581": "East Pearland / Old Townsite / Green Tee", "77584": "West Pearland / Shadow Creek Ranch / Silverlake", "77588": "Pearland (PO boxes)" },
  },
  cypress: {
    housing: "Cypress is a mix of 1990s Coles Crossing and Longwood homes and brand-new Bridgeland and Towne Lake construction. Unincorporated status means county permits and active MUD districts.",
    commonProjects: ["Outdoor living rooms and pool decks in Bridgeland", "Kitchen remodels in Coles Crossing and Fairfield", "Roof replacements after northwest Harris hail events", "Detached garages and workshops on acreage lots"],
    zipAreas: { "77429": "Cypress / Longwood / Coles Crossing", "77433": "Bridgeland / Towne Lake / Fairfield / Blackhorse Ranch" },
  },
  spring: {
    housing: "Spring and Klein feature wooded lots with 1970s and 1980s two-stories in Champion Forest and Spring Creek Oaks, plus newer Gleannloch Farms. Heavy tree cover means roofing, gutters and siding work is year-round.",
    commonProjects: ["Roof, gutter and fascia replacement under mature trees", "Second-story bath and kitchen updates in Klein", "Covered patios in Gleannloch Farms", "Flood-resilient rebuilds near Cypress Creek"],
    zipAreas: { "77373": "Old Town Spring / Spring East", "77379": "Klein / Gleannloch Farms / Champion Forest", "77380": "The Woodlands (Grogan's Mill)", "77381": "The Woodlands (Panther Creek)", "77382": "The Woodlands (Alden Bridge / Sterling Ridge)", "77383": "Spring (PO boxes)", "77386": "Spring East / Imperial Oaks / Harmony", "77387": "Spring (PO boxes)", "77388": "Klein / Cypresswood / Northampton", "77389": "Augusta Pines / Creekside Park", "77391": "Spring (PO boxes)", "77393": "Spring (PO boxes)" },
  },
  "the-woodlands": {
    housing: "The Woodlands has strict Residential Design Review Committee covenants and mature forest lots. Homes range from 1970s Grogan's Mill to 2010s Creekside Park, and every exterior change needs township approval.",
    commonProjects: ["RDRC-approved covered patios and outdoor kitchens", "Kitchen remodels in Alden Bridge and Cochran's Crossing", "Roof replacements with approved shingle colors", "Primary suite additions in Panther Creek"],
    zipAreas: { "77380": "Grogan's Mill / Research Forest", "77381": "Panther Creek / Cochran's Crossing", "77382": "Alden Bridge / Sterling Ridge / Indian Springs", "77384": "College Park / Windsor Hills", "77385": "Harper's Landing / Imperial Oaks", "77389": "Creekside Park / Augusta Pines" },
  },
  pasadena: {
    housing: "Pasadena's older neighborhoods near the refineries hold 1950s and 1960s ranch homes, while Fairmont Parkway neighborhoods date to the 1980s and later. Foundation movement and exterior wear are the common complaints.",
    commonProjects: ["Siding, soffit and window replacement", "Kitchen and bath remodels in Fairmont", "Foundation-related interior repairs", "Retail and office finish-outs on Spencer Highway"],
    zipAreas: { "77501": "Pasadena (PO boxes)", "77502": "North Pasadena", "77503": "Central Pasadena / Red Bluff", "77504": "South Pasadena / Golden Acres", "77505": "Fairmont / Riverstone Ranch", "77506": "Pasadena East / Deepwater", "77507": "Bayport / Industrial District", "77508": "Pasadena (PO boxes)" },
  },
  baytown: {
    housing: "Baytown's Goose Creek area has historic homes from the oil boom, while Eastpoint and Country Club Oaks are 1980s to 2000s subdivisions. Salt air and Gulf storms punish roofs, siding and windows.",
    commonProjects: ["Metal and impact-rated roof replacements", "Hardie siding and impact windows", "Commercial and industrial office build-outs", "Kitchen and bath updates in Country Club Oaks"],
    zipAreas: { "77520": "Old Baytown / Goose Creek / Lakewood", "77521": "North Baytown / Eastpoint / Country Club Oaks", "77522": "Baytown (PO boxes)", "77523": "Mont Belvieu / Baytown East" },
  },
  "league-city": {
    housing: "League City spans 1980s South Shore Harbour to new Mar Bella and Westover Park construction. The city sits in a designated windstorm zone, so roofing, windows and doors require WPI-8 certification.",
    commonProjects: ["Windstorm-certified roof replacements", "Impact windows and doors in South Shore Harbour", "Outdoor living spaces in Tuscan Lakes", "Kitchen remodels in Victory Lakes and Bay Colony"],
    zipAreas: { "77573": "League City / South Shore Harbour / Tuscan Lakes", "77574": "League City (PO boxes)" },
  },
  "missouri-city": {
    housing: "Quail Valley and Lake Olympia homes from the 1970s to 1990s sit on golf courses and lakes, while Sienna is a master-planned community still under construction. Both markets remodel heavily.",
    commonProjects: ["Kitchen and bath remodels in Quail Valley", "Outdoor kitchens and patio covers in Sienna", "Roofing and siding upgrades", "Room additions on Lake Olympia lots"],
    zipAreas: { "77459": "Sienna / Riverstone / Lake Olympia / Quail Valley", "77489": "Fondren Park / Hunters Glen / Missouri City North" },
  },
  humble: {
    housing: "Humble and Atascocita grew fast in the 1980s to 2000s around Lake Houston. Storm exposure is high, and Fall Creek and Eagle Springs homes are now due for roofs and interior updates.",
    commonProjects: ["Roof replacements after Lake Houston storms", "Flood-resilient rebuilds near the San Jacinto", "Kitchen remodels in Eagle Springs and Fall Creek", "Decks and boat-dock-side outdoor living"],
    zipAreas: { "77338": "Humble / Northshire / Woodland Pines", "77346": "Atascocita / Eagle Springs / Walden", "77347": "Humble (PO boxes)", "77396": "Fall Creek / Balmoral / Summerwood North" },
  },
  conroe: {
    housing: "Conroe combines lakeside homes on Lake Conroe, downtown historic properties and rapid new construction in Grand Central Park and Woodforest. It is one of the fastest-growing cities in the nation.",
    commonProjects: ["Custom homes and lot builds", "Lakefront outdoor kitchens and decks in April Sound", "Commercial build-outs along I-45 and Loop 336", "Kitchen remodels in Graystone Hills"],
    zipAreas: { "77301": "Downtown Conroe / East Conroe", "77302": "South Conroe / River Plantation", "77303": "North Conroe / Cut and Shoot", "77304": "West Conroe / Lake Conroe / Grand Central Park", "77305": "Conroe (PO boxes)", "77306": "East Conroe / Crighton Ridge", "77384": "College Park / Woodforest South", "77385": "Imperial Oaks / Conroe South" },
  },
  richmond: {
    housing: "Richmond's Fort Bend County master-planned communities such as Aliana, Harvest Green and Long Meadow Farms are 2010s builds with strict architectural guidelines, while Pecan Grove and historic Richmond date to the 1980s and earlier.",
    commonProjects: ["Patio covers, pools decks and fences in Aliana", "Kitchen remodels in Pecan Grove", "Whole-home flips near downtown Richmond", "Roof replacements throughout"],
    zipAreas: { "77406": "Pecan Grove / Long Meadow Farms / Harvest Green", "77407": "Aliana / Grand Mission / Lakes of Bella Terra", "77469": "Downtown Richmond / Veranda / Riverpark" },
  },
  rosenberg: {
    housing: "Rosenberg's historic downtown holds early 1900s homes, while subdivisions west of the Brazos are brand new. Both bring us steady work.",
    commonProjects: ["Historic home renovations near downtown", "Fences and patio covers in Bonbrook Plantation", "Additions in Kingdom Heights", "Commercial finish-outs along US-59"],
    zipAreas: { "77471": "Rosenberg / Bonbrook Plantation / Kingdom Heights" },
  },
  tomball: {
    housing: "Tomball mixes acreage properties, a preserved historic downtown and 2000s subdivisions along SH-249. Barns, workshops and metal buildings sit alongside standard remodels.",
    commonProjects: ["Barndominiums, shops and metal buildings", "Kitchen remodels in Lakewood Grove and Woodtrace", "Roof replacements after northwest hail", "Country-home whole-house renovations"],
    zipAreas: { "77375": "Tomball / Old Town / Willowcreek Ranch", "77377": "Tomball West / Rosehill / Wildwood at Northpointe" },
  },
  friendswood: {
    housing: "Friendswood's large lots and mature trees make it a top outdoor-living market. Homes along Clear Creek have flooded and are rebuilt with elevated systems and water-resistant finishes.",
    commonProjects: ["Pool decks and covered patios in West Ranch", "Flood-resilient interior rebuilds", "Kitchen and bath remodels in Eagle Lakes", "Room additions on oversized lots"],
    zipAreas: { "77546": "Friendswood / West Ranch / Eagle Lakes", "77549": "Friendswood (PO boxes)" },
  },
  stafford: {
    housing: "Stafford is small, has no city property tax, and is dense with commercial property along US-59 and the Southwest Freeway. Residential neighborhoods date to the 1970s and 1980s.",
    commonProjects: ["Office, warehouse and retail finish-outs", "Kitchen and bath updates in Stafford Oaks", "Roofing for commercial flat roofs", "Exterior repaints and siding"],
    zipAreas: { "77477": "Stafford / Stafford Oaks / Southmeadow", "77497": "Stafford (PO boxes)" },
  },
  bellaire: {
    housing: "Bellaire is teardown-and-rebuild country. 1950s ranches on 75-foot lots are replaced by custom two-stories, and the city enforces detailed drainage and setback rules.",
    commonProjects: ["Custom new homes on existing lots", "Second-story additions over one-story ranches", "Whole-home remodels with new mechanicals", "Detached garages and pool houses"],
    zipAreas: { "77401": "Bellaire / Southdale / Braeburn Country Club Estates", "77402": "Bellaire (PO boxes)" },
  },
  "deer-park": {
    housing: "Deer Park homes are mostly 1960s through 1990s brick ranches and two-stories kept in good repair. Interior modernization and exterior refreshes are the norm.",
    commonProjects: ["Kitchen, bath and flooring updates", "Roof and gutter replacements", "Office and shop build-outs for industrial employers", "Patio covers and fences"],
    zipAreas: { "77536": "Deer Park / Park Green / College Park" },
  },
  "la-porte": {
    housing: "La Porte sits on Galveston Bay with 1950s to 1990s homes in Fairmont Park and Lomax and waterfront properties in Bayside Terrace. Windstorm-rated exteriors are essential.",
    commonProjects: ["Windstorm-certified roofing", "Impact windows and Hardie siding", "Elevated-home rebuilds near the bay", "Kitchen remodels in Fairmont Park"],
    zipAreas: { "77571": "La Porte / Fairmont Park / Lomax / Bayside", "77572": "La Porte (PO boxes)" },
  },
  kingwood: {
    housing: "Kingwood's 1970s to 1990s homes sit under a thick forest canopy along the San Jacinto. Harvey flooded thousands of homes here, and resilient rebuilding is now standard practice.",
    commonProjects: ["Flood restoration with elevated electrical", "Roof, gutter and siding work under mature trees", "Kitchen and bath remodels in Kings Point and Fosters Mill", "Screened porches and decks"],
    zipAreas: { "77325": "Kingwood (PO boxes)", "77339": "Kingwood West / Woodland Hills / Elm Grove / Trailwood", "77345": "Kingwood East / Kings Point / Fosters Mill / Mills Branch" },
  },
  fulshear: {
    housing: "Fulshear is the fastest-growing city in Texas. Estate lots in Fulbrook and Weston Lakes mix with new master-planned Cross Creek Ranch, Jordan Ranch and Tamarron.",
    commonProjects: ["Outdoor kitchens, pool houses and pergolas", "Barns and workshops on acreage", "Custom additions to estate homes", "Builder-warranty follow-up remodels in new communities"],
    zipAreas: { "77441": "Fulshear / Cross Creek Ranch / Fulbrook / Weston Lakes" },
  },
  magnolia: {
    housing: "Magnolia's wooded acreage brings barndominiums, workshops and metal roofing alongside new subdivisions in Northgrove and Audubon.",
    commonProjects: ["Barndominiums and metal buildings", "Metal roofing and standing seam", "Kitchen remodels in Westwood and High Meadow Ranch", "Custom homes on acreage"],
    zipAreas: { "77353": "Magnolia (PO boxes)", "77354": "Magnolia East / Westwood / Northgrove", "77355": "Magnolia West / High Meadow Ranch / Audubon" },
  },
  webster: {
    housing: "Webster is the Bay Area's retail and medical hub, with Clear Lake-adjacent neighborhoods and heavy commercial development along Bay Area Boulevard and NASA Parkway.",
    commonProjects: ["Restaurant, clinic and retail build-outs", "Commercial roofing", "Kitchen and bath remodels in Edgewater", "Exterior repaints"],
    zipAreas: { "77598": "Webster / Edgewater / Bay Area Boulevard" },
  },
  alvin: {
    housing: "Alvin combines rural acreage, 1970s in-town homes and new Kendall Lakes and Mustang Crossing subdivisions. Foundation and drainage issues are common on older lots.",
    commonProjects: ["Metal roofing on acreage homes", "Foundation-related interior repairs", "Patios and fences in Kendall Lakes", "Additions and garage conversions"],
    zipAreas: { "77511": "Alvin / Kendall Lakes / Mustang Crossing", "77512": "Alvin (PO boxes)" },
  },
  galveston: {
    housing: "Galveston's East End and Silk Stocking historic districts require Landmark Commission approval, and the whole island needs WPI-8 windstorm certification. West End beach houses are elevated on pilings.",
    commonProjects: ["Historic Victorian restorations", "Elevated beach houses in Pirates Beach and Jamaica Beach", "Windstorm-certified roofing and windows", "Vacation rental renovations"],
    zipAreas: { "77550": "East End / Downtown / Strand / UTMB", "77551": "Midtown / Denver Court / Central Galveston", "77552": "Galveston (PO boxes)", "77553": "Galveston (PO boxes)", "77554": "West End / Pirates Beach / Jamaica Beach / Evia", "77555": "UTMB Campus" },
  },
  "texas-city": {
    housing: "Texas City is growing fast with Lago Mar and its lagoon community, while older neighborhoods near the dike need storm-hardened exteriors.",
    commonProjects: ["Windstorm-certified roofing and siding", "Outdoor living in Lago Mar", "Kitchen and bath updates in Westwood", "Commercial build-outs on FM 1764"],
    zipAreas: { "77590": "Texas City / Nessler Park / Westwood", "77591": "Texas City West / Lago Mar / La Marque adjacent", "77592": "Texas City (PO boxes)" },
  },
  channelview: {
    housing: "Channelview is unincorporated Harris County along the Ship Channel. Sterling Green and Woodforest are 1970s to 1990s neighborhoods with hard-weather exteriors.",
    commonProjects: ["Siding and roofing replacements", "Kitchen and flooring updates", "Fences and patio covers", "Industrial office and shop build-outs"],
    zipAreas: { "77530": "Channelview / Sterling Green / Woodforest" },
  },
  "jersey-village": {
    housing: "Jersey Village is a small city of 1960s and 1970s homes near White Oak Bayou with its own permit office. Flood-resilient remodeling is a specialty here.",
    commonProjects: ["Flood-resilient whole-home remodels", "Kitchen and bath updates", "Roof and gutter replacement", "Home elevation-related finish work"],
    zipAreas: { "77040": "Jersey Village / Carverdale", "77041": "Jersey Village North / West Little York" },
  },
  porter: {
    housing: "Porter and New Caney are booming along the Grand Parkway and US-59, with new Oakhurst, Brooklyn Trails and Auburn Trails communities and rural properties beyond.",
    commonProjects: ["Outdoor living spaces in Oakhurst", "Additions and garages on acreage", "Commercial shells along US-59", "Roof replacements"],
    zipAreas: { "77365": "Porter / Oakhurst at Kingwood / Riverwalk" },
  },
  dickinson: {
    housing: "Dickinson homes along the bayou were hit hard by Harvey and have been rebuilt with raised electrical and tile floors. Coastal weather keeps roofing and siding in constant demand.",
    commonProjects: ["Flood restoration and elevated finishes", "Roof and siding replacement", "Bayou Lakes kitchen remodels", "Decks and screened porches"],
    zipAreas: { "77539": "Dickinson / Bayou Lakes / Bayou Maison" },
  },
  manvel: {
    housing: "Manvel's new master-planned communities along SH-288, including Pomona and Meridiana, sit beside older acreage properties. Both bring us patio covers, fences and shops.",
    commonProjects: ["Patio covers and fences in Pomona and Meridiana", "Barns and workshops on acreage", "Builder-warranty follow-up remodels", "Roof replacements"],
    zipAreas: { "77578": "Manvel / Pomona / Meridiana / Rodeo Palms" },
  },
  sealy: {
    housing: "Sealy is Austin County ranch country along I-10 with small-town homes and rural properties. Metal roofing and farmhouse remodels are typical.",
    commonProjects: ["Barndominiums and metal roofing", "Farmhouse remodels", "Commercial near the outlet corridor", "Fences and equipment shops"],
    zipAreas: { "77474": "Sealy / Westward Pointe / Frydek" },
  },
  angleton: {
    housing: "Angleton, the Brazoria County seat, has 1960s to 1990s in-town homes and acreage lots. County-permitted additions and roofing are steady work.",
    commonProjects: ["Roof replacements", "Additions and garages on acreage", "Kitchen and bath updates", "Government and medical office build-outs"],
    zipAreas: { "77515": "Angleton / Windrose Green / Riverwood Ranch", "77516": "Angleton (PO boxes)" },
  },
  "lake-jackson": {
    housing: "Lake Jackson's mid-century planned neighborhoods under a heavy oak canopy mean constant roof, gutter and siding work, plus kitchen remodels in Plantation Village.",
    commonProjects: ["Roof and gutter replacement under oaks", "Kitchen remodels in Plantation Village", "Siding and exterior paint", "Outdoor living"],
    zipAreas: { "77566": "Lake Jackson / Plantation Village / Oyster Creek" },
  },
  dallas: {
    housing: "Dallas ranges from 1920s Tudors in Lakewood to 1960s ranches in Preston Hollow and dense new construction in Uptown. Our North Texas work is commercial and multi-unit.",
    commonProjects: ["Commercial tenant improvements", "Multi-unit renovation programs", "Roofing programs for property managers", "Large residential renovations by quote"],
    zipAreas: { "75201": "Uptown / Downtown", "75204": "Uptown / State Thomas", "75205": "Highland Park / University Park", "75206": "Lower Greenville / M Streets", "75208": "Oak Cliff / Kessler Park", "75209": "Love Field / Bluffview", "75214": "Lakewood", "75218": "Lake Highlands / White Rock", "75219": "Oak Lawn / Turtle Creek", "75220": "Northwest Dallas / Midway Hollow", "75225": "Preston Hollow / University Park", "75229": "Preston Hollow West", "75230": "Preston Hollow North", "75231": "Vickery Meadow / Lake Highlands", "75238": "Lake Highlands", "75240": "Far North Dallas / Galleria", "75243": "Lake Highlands North / Richland", "75248": "Far North Dallas / Prestonwood", "75252": "Far North Dallas / Preston Road" },
  },
  "fort-worth": {
    housing: "Fort Worth's Tanglewood and Arlington Heights hold 1940s to 1960s homes, while Alliance and Keller-adjacent neighborhoods are new. Our Fort Worth work is commercial and roofing programs.",
    commonProjects: ["Commercial tenant improvements", "Roofing programs", "Retail and office build-outs", "Large residential remodels by quote"],
  },
  austin: {
    housing: "Austin homes range from 1930s bungalows in Tarrytown to hillside contemporaries in Westlake. Permitting is slow, so we front-load plan review.",
    commonProjects: ["Commercial build-outs", "Full-home renovations", "Roofing programs", "Restaurant build-outs"],
  },
  "san-antonio": {
    housing: "San Antonio sits on limestone rather than clay, with 1920s Monte Vista homes, 1990s Stone Oak and new Alamo Ranch construction. We adjust foundations and drainage accordingly.",
    commonProjects: ["Commercial construction", "Roofing programs", "Tenant improvements", "Large residential renovations by quote"],
  },
  beaumont: {
    housing: "Beaumont shares Houston's hurricane exposure and has 1950s West End homes and newer Dowlen Road development. Storm restoration is our primary work here.",
    commonProjects: ["Storm roofing and siding", "Flood restoration", "Commercial repairs", "Kitchen and bath remodels"],
  },
  "college-station": {
    housing: "College Station and Bryan have large rental inventories around Texas A&M plus Pebble Creek and Castlegate family neighborhoods.",
    commonProjects: ["Rental property renovations", "Student housing turnarounds", "Commercial build-outs", "Roofing programs"],
  },
  victoria: {
    housing: "Victoria's coastal-plain homes were battered by Hurricane Harvey in 2017, and rebuilding and roofing remain active markets.",
    commonProjects: ["Storm restoration", "Roof replacement", "Commercial repairs", "Kitchen and bath remodels"],
  },
  "corpus-christi": {
    housing: "Corpus Christi's Southside, Padre Island and Flour Bluff require windstorm-certified construction, and salt air accelerates exterior wear.",
    commonProjects: ["Windstorm-certified roofing", "Storm restoration", "Commercial build-outs", "Impact windows and siding"],
  },
};

export function getCityDetail(slug: string): CityDetail | undefined {
  return cityDetails[slug];
}

export function zipArea(citySlug: string, zip: string): string | undefined {
  const a = cityDetails[citySlug]?.zipAreas?.[zip];
  return a && a.length > 0 ? a : undefined;
}
