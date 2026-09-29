export interface Destination {
  id: string;
  name: string;
  region: 'highlands' | 'cultural' | 'southern' | 'wildlife' | 'east-north';
  regionLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  journeysCount: number;
  bestMonths: string;
  elevation?: string;
  highlights: string[];
  mustSee: string[];
  recommendedStayDays: number;
  averageTemp: string;
}

export interface Experience {
  id: string;
  title: string;
  category: 'wildlife' | 'rail-tea' | 'coastal' | 'cultural' | 'trekking' | 'culinary';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  idealFor: string;
  included: string[];
  highlights: string[];
  priceEst: string;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  stay: string;
  meals: string;
}

export interface Tour {
  id: string;
  title: string;
  duration: string;
  nights: number;
  days: number;
  pricePerPerson: number;
  tag: string;
  isFeatured?: boolean;
  heroImage: string;
  overview: string;
  routeStops: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: TourItineraryDay[];
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  content: string[];
  travelTips: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  origin: string;
  tourType: string;
  avatar: string;
  rating: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'ella',
    name: 'Ella',
    region: 'highlands',
    regionLabel: 'Central Highlands',
    tagline: 'Misty Highlands & Emerald Viaducts',
    description: 'Where misty mountains meet endless tea fields, waterfalls, and peaceful hiking paths.',
    longDescription: 'Perched in the southern rim of the central highlands at 1,041m elevation, Ella is surrounded by cascading tea plantations, dramatic peaks, and tumbling jungle waterfalls. From the iconic Nine Arch Demodara Viaduct where vintage trains emerge from dense mist to the summit of Little Adam\'s Peak, Ella offers refreshing mountain air, quiet plantation walks, and soul-stirring sunrises.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNKt81w3LDmrVoEovQXR3mapS3-EYIcJck94fu8wN-tfW0nDad5Wg6Yi7DRfiBfy8XQe7NDMvNcE-_1FUvIOJqp4LB1sCf31XI-nFoc2o2rzjbcw5PKUwgoHm9Bas4zLmIQ1e61-lQnDdItpAYgKnqdDQLzUcl7peaz_yLl0Ij4fiZi2y9HBcVFc5zcrVNxUKbP_FQWlmhgR_cPPDMb0xJONf1E1t09SUeTyPbb3DG9LpJDyuPjT7rwQ',
    tag: 'Misty Highlands',
    journeysCount: 12,
    bestMonths: 'December – April, July – September',
    elevation: '1,041 m',
    highlights: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Ravana Falls', 'Artisan Tea Factories'],
    mustSee: ['Watching the 9:20am blue passenger train cross the Nine Arch Bridge', 'Sunrise meditation hike on Little Adam\'s Peak', 'Cool dip beneath Ravana Falls'],
    recommendedStayDays: 3,
    averageTemp: '19°C – 25°C',
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'cultural',
    regionLabel: 'Cultural Triangle',
    tagline: 'The Ancient Sky Palace & Water Gardens',
    description: 'The ancient 5th-century palace in the sky, crowned by legendary water gardens and frescoes.',
    longDescription: 'Rising 200 meters sheer from the emerald jungle floor, the monumental granite citadel of Sigiriya (the Lion Rock) was conceived by King Kasyapa in 477 AD. Admire the world-renowned celestial maiden frescoes, traverse the mirrored polished corridor, walk through the monumental lion paws, and survey royal water gardens that continue to function fifteen centuries later.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIOoteZXG35_UhRtLhCP7StGBYI614yeYfOhwa9WvjVUdVMbPrsnlLKHXzoRfPZCGV13WD0iSGCuCvkCCxP9FVJ4LyfDOf5sKNhi5P-4jhWmIrp9D1DdLdUEsQJKSb6zgKGEmLoD2fNYwtSuRUvsIQ1K-MhJTvgJqtwEj_YMZtjyZf6YvZ-p9mol6cvZLwpAmwOXCTBIqK9KASK4BWwPQ86bmGYne78if4nU-Jp7x7tC7eM4AiMS4xQA',
    tag: 'UNESCO Citadel',
    journeysCount: 9,
    bestMonths: 'Year-Round (Best January – September)',
    elevation: '349 m',
    highlights: ['Lion Rock Citadel', 'Ancient Water Gardens', 'Mirror Wall', 'Frescoes of Apsaras'],
    mustSee: ['Private dawn ascent before the mid-day sun', 'Bird\'s eye sunrise hot-air ballooning', 'Sunset panoramic views from adjacent Pidurangala Rock'],
    recommendedStayDays: 2,
    averageTemp: '27°C – 32°C',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'cultural',
    regionLabel: 'Cultural Triangle & Hill Capital',
    tagline: 'Sacred Tooth Temple & Royal Sanctuaries',
    description: 'Sacred relic temples surrounded by rainforest hills, artisan craft, and royal botany.',
    longDescription: 'The last royal capital of ancient Sri Lanka, Kandy nestles peacefully around a serene central lake encircled by mist-draped hills. Home to Sri Dalada Maligawa (Temple of the Sacred Tooth Relic), the city echoes with ceremonial drumming, fragrant frangipani blossoms, and the lush majesty of the Royal Botanical Gardens in Peradeniya with over 4,000 plant species.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtwKQXTZ-KXCIX_M7UpXlzr0S0S8hmnFMxjj-IEusISi9kq6VNfcM_jb_QyFovojJQr7DorGqz3sP1ImZV-52gSuBPET66HWLpqrwQapsR4BALYfiveBSBEL4I-lJ7eLCHreGrnU4xfjfJLfAMRdaeLJgn-qPDhNB0njKLlJsgNx8PG5geYQia0o08Y18L2jx1La__WZ2pVp-pTb5CRuIVe0hijLy5iQfvMHwWGguZ53GiYuu0KQpWTw',
    tag: 'Sacred Realm',
    journeysCount: 15,
    bestMonths: 'December – April, July – August',
    elevation: '500 m',
    highlights: ['Temple of the Sacred Tooth', 'Royal Botanical Gardens', 'Kandy Lake Walk', 'Kandyan Dance Theatre'],
    mustSee: ['Evening puja ceremony with ceremonial drummers at the Temple of the Tooth', 'Orchid house walk at Peradeniya Gardens', 'Artisan brass & batik workshops'],
    recommendedStayDays: 2,
    averageTemp: '22°C – 28°C',
  },
  {
    id: 'galle',
    name: 'Galle',
    region: 'southern',
    regionLabel: 'Southern Coast',
    tagline: 'Colonial Dutch Ramparts & Ocean Bastions',
    description: '17th-century Dutch fortress alive with boutique charm, ocean ramparts, and jeweler alleys.',
    longDescription: 'A living UNESCO World Heritage site, Galle Fort seamlessly weaves Portuguese, Dutch, and British colonial history with warm island hospitality. Stroll along 400-year-old stone ramparts overlooking crashing turquoise surf, browse upscale art galleries and sapphire boutiques, and dine on fresh lobster in courtyards draped in vibrant bougainvillea.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAURqveXbmK2eUSqAUDPF03WSEa7opur8-H0HBMwRn7YRT0aIfPSZ_loF12MAoLzBk6agJx_56YHVQpjPzkFvIIdjlXpYSx5d00IWu3q5_VCb2GVnvj39JEBldWhYjfN3GOgANjeGoigorHqcsXG-FZp-GERXwBvYyL4ZXDAPAdi2_zmwstaeEu0YTpesCCDwcOAkW0P8snzN59tAXEELUKSss3lWBWkIIPZnMwk82TbhTggBrUKD7rg',
    tag: 'Colonial Bastion',
    journeysCount: 11,
    bestMonths: 'November – April',
    elevation: 'Sea Level',
    highlights: ['Galle Fort Ramparts', 'Galle Lighthouse', 'Dutch Reformed Church', 'Pedlar Street Boutiques'],
    mustSee: ['Sunset stroll along the Flag Rock rampart', 'Vintage architecture walking tour with local historian', 'Seafood dining in a restored 18th-century Dutch villa'],
    recommendedStayDays: 3,
    averageTemp: '26°C – 31°C',
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    region: 'southern',
    regionLabel: 'Southern Coast',
    tagline: 'Golden Crescent Bays & Ocean Giants',
    description: 'Crescent golden bays, offshore migrations of blue whales, and laidback seaside evenings.',
    longDescription: 'Famed for its tranquil crescent-shaped beach, leaning coconut palms, and world-class offshore marine life, Mirissa is one of the premier locations on Earth to spot blue whales, sperm whales, and pods of spinner dolphins in their natural migratory corridors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx540TRfwHVcHhtmYTDKlqBBlJF8cKoK9WacZjkxYly5IXq6vS_K3Pj0hweYKG3FGRh3sNYTkZ1e44n3K1eSX9r47cYHe3yXPf_jIGgQHctnslo0IaAx-PaGxytvM4wSFApjz9ZNLJkyUNQNsjMRmJAMa0C0GZhVnfQpdw_P7sXG8yWijeo6O8j0_Z9nCEOa8_AAlAQ_47yACaNp2d09-_WYsYlJaSuQqi_zity8r5C82bRPn-mUr8JQ',
    tag: 'Ocean & Whales',
    journeysCount: 8,
    bestMonths: 'November – April',
    elevation: 'Sea Level',
    highlights: ['Coconut Tree Hill', 'Blue Whale Watching', 'Secret Beach', 'Parrot Rock'],
    mustSee: ['Early morning catamaran voyage into deep ocean trenches', 'Golden hour photo at Coconut Tree Hill', 'Candlelit seafood grills on the sand'],
    recommendedStayDays: 2,
    averageTemp: '27°C – 32°C',
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    region: 'highlands',
    regionLabel: 'Central Highlands',
    tagline: 'Little England, Misty Valleys & Heritage Tea',
    description: 'Little England’s cool mountain air, grand colonial tea estates, and crystal mountain waterfalls.',
    longDescription: 'Nestled at 1,868m beneath Mount Pidurutalagala, Sri Lanka\'s highest peak, Nuwara Eliya earned the moniker "Little England" for its mock-Tudor country clubs, red-brick Victorian post office, and manicured rose gardens. Here, in the crisp mountain air, the world\'s finest single-origin Ceylon black tea is cultivated and hand-harvested on steep emerald ridges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSmG8598NmQM25fPs0dokczHW8lt16141GwmUaZdyAXAScx9GfqatgMfcMAp5HDJU6d6An1vnmL6NvwhmN87ljmxv79vYSWJJqKn9saW-09ZaJ4wtA7K0by3JWCf69J-zo9JIpED53uQMu5Oobe1Fw4Mn01cjFCzhyyMbZ8v4Mm985WxaKnUJz0DiJBLdVYxjOUNY98GhNeZL2Pf7-FQCtvaQBCOH1eVZInbLnB2rAjn5niueYrIyQEQ',
    tag: 'Little England',
    journeysCount: 10,
    bestMonths: 'February – May, September – November',
    elevation: '1,868 m',
    highlights: ['Pedro Tea Estate', 'Horton Plains & World\'s End', 'Gregory Lake', 'Victorian Post Office'],
    mustSee: ['Private morning high tea in a heritage colonial planter\'s bungalow', 'Trek across Horton Plains to the 870m World\'s End cliff drop', 'Artisan tea tasting with master tea sommelier'],
    recommendedStayDays: 2,
    averageTemp: '12°C – 20°C',
  },
  {
    id: 'yala',
    name: 'Yala',
    region: 'wildlife',
    regionLabel: 'Southern Dry Zone',
    tagline: 'The Realm of the Leopard & Wild Elephants',
    description: 'The highest leopard density on Earth, paired with wild elephant herds and pristine coastlines.',
    longDescription: 'Spanning nearly 1,000 square kilometers of coastal dunes, dry thorny scrubland, and brackish lagoons, Yala National Park hosts the highest concentration of Sri Lankan leopards (Panthera pardus kotiya) in the world. Alongside leopards, encounter magnificent herds of Asian elephants, sloth bears, marsh crocodiles, and over 215 species of birds.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApLONQ3Diwxr8Shs35F9-mmGuPWJ8ppKyeyXd5FhRYsbp_SQRDXd-JZjIBrM-FiV_hWgMDZzvOqdR8iSFOr6EYle0SkU7L9oUTFdtr-erPEWE6pTm7ipFMgRPirHoN0xU96esorC8mcs7vrnFGQhqGkKGQ9iDwH2s9oNE60VCCItft3bF023jd2b1M-itLc2v2fPOxOUh7YmCRav_na80cNZ_zFym8UUjJEQzW4dxr4YCYjTxH4PsXLg',
    tag: 'Big Game Safari',
    journeysCount: 7,
    bestMonths: 'February – July (Drier months mean optimal wildlife viewing)',
    elevation: '30 m',
    highlights: ['Leopard Tracking Game Drives', 'Elephant Herds by Waterholes', 'Sloth Bear Encounters', 'Remote Coastal Dunes'],
    mustSee: ['Dawn private game drive with master island naturalist', 'Sundowner drinks overlooking quiet coastal saltpans', 'Luxury tented camp glamping under unpolluted stars'],
    recommendedStayDays: 2,
    averageTemp: '28°C – 34°C',
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay',
    region: 'east-north',
    regionLabel: 'East Coast',
    tagline: 'World-Class Point Breaks & Bohemian Soul',
    description: 'World-class peeling right-hand surf breaks, bohemian beach shacks, and wild coastal lagoons.',
    longDescription: 'Consistently ranked among the top surf destinations on the planet, Arugam Bay is a sun-kissed haven on Sri Lanka\'s southeastern coast. Peeling right-hand point breaks, chilled open-air cafes, yoga pavilions, and easy access to Kumana National Park make this an unmatched bohemian retreat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkMx2TY_KjzbfSSQPJMLi8FLG1ldWYBlRNVzXUPhgYOPLvZjk7tKpptO6hI143LlL3aWbFyyuep-0btfPb2YzmhZ4miq2uR6IYzznYbDB3CrA_dcPQApIj0ZQGtJFHCoGfWCAdfVyj2RNJXlpay1VO087-TVTdUT7dEHAKsRXsBmYfyHMfMIXY60T-8yK6BpPYT9YBIQK-vuURzFn3UKll1EwgeUGeEDLiF6_gxOEgiqBC0CNc72Rkcw',
    tag: 'Surf & Soul',
    journeysCount: 6,
    bestMonths: 'May – October (Peak East Coast season)',
    elevation: 'Sea Level',
    highlights: ['Main Point Right-Hand Wave', 'Whiskey Point', 'Elephant Rock Sunset', 'Kumana Bird Sanctuary'],
    mustSee: ['Sunset surf session at Main Point', 'Lagoon safari spotting wild crocodiles & migratory storks', 'Bonfire fresh grilled fish under the stars'],
    recommendedStayDays: 3,
    averageTemp: '29°C – 35°C',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'wildlife-safari',
    title: 'Private Leopard & Sloth Bear Expeditions',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    shortDesc: 'Exclusive early access permits with master island naturalists across Yala, Wilpattu, and Minneriya.',
    fullDesc: 'Step aboard a custom-outfitted, open-top safari vehicle with an elite island naturalist who has tracked big cats across Sri Lanka for decades. Avoid the convoy trails with our dawn priority permits, tracking elusive leopards resting on warm granite boulders and watching Asian elephant herds bathe in lily-strewn reservoirs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCyZSjoQiqj6a3Br66KVyTUtx47i0IbL20xCfDwzaLWupjtP9bSawZTUcDyyUBLomJIv3OQQj0CidrNXdTP_CXCVjLKVepwSU3KRvt0mYGki0AFeYYB3t54vwragyvUfKS_FHZwUVTNFyJs5QPkwMZ41fGFyve3SdW44AI6D0yKTg-zIbDUDRjrR9CvroWjKTOUtsbL1r4F-pFNTcN2P4F-pqsufGNzW2VJjVznSieYM7wrAo0H2H0Mg',
    duration: 'Full Day or Half Day Dawn/Dusk',
    idealFor: 'Wildlife photographers, nature lovers, adventurous couples',
    included: ['Custom 4x4 Land Cruiser with open viewing roof', 'Certified senior wildlife naturalist', 'All national park entrance fees & tracking permits', 'Artisan bush breakfast & chilled refreshments'],
    highlights: ['Highest leopard density in the world', 'Wild elephant family interactions', 'Sloth bear spotting in dry palu tree groves'],
    priceEst: '$180 / person',
  },
  {
    id: 'highland-rail',
    title: 'Tea Country Heritage & First-Class Rail',
    category: 'rail-tea',
    categoryLabel: 'Highland Rail',
    shortDesc: 'Scenic observation carriages through the clouds followed by private tastings inside century-old planter bungalows.',
    fullDesc: 'Board the legendary blue train as it snakes along cliffside contours through misty mountain cloud forests, eucalyptus groves, and rolling emerald tea plantations. Settle into reserved first-class observation seating before disembarking for an exclusive afternoon tasting of rare silver tip Ceylon teas at a private colonial estate.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZsvd2PwjPRL_5sr7qJy3A5q5xcNNS9-FqTRah8KYMMvpb3j3VQ2ifaERS14D1-p4ZWkPFTe4jWqKH6RZrjiy3HqyhPiy___xXL8he5c-yJiJTpa9fR8t-H3JXSMt45wsOpI2XDjSGpDIFX2FpbvSjweoGHy_WhJTDNg6MWW-ADfY7lQ0zpcvJ_SKayPT8h7I6g5RVFzXcoofpPl5qoJNmOqHcUYl_X9wQw7H80hFypHbVzupkd4KwA',
    duration: 'Full Day Experience',
    idealFor: 'Couples, slow travelers, photography enthusiasts',
    included: ['Pre-booked guaranteed 1st Class observation seats', 'Luggage transfer to your next luxury bungalow', 'Private tea factory tour with Master Tea Blender', 'Traditional high tea on heritage lawn'],
    highlights: ['Traversing the Nine Arch Demodara Bridge', 'Iconic open-door mountain vista photography', 'Tasting single-estate virgin white tea'],
    priceEst: '$120 / person',
  },
  {
    id: 'coastal-sail',
    title: 'Surf, Sail & Secret Southern Coves',
    category: 'coastal',
    categoryLabel: 'Coastal Sanctuaries',
    shortDesc: 'Private catamaran charters, hidden reef surf breaks, and tranquil barefoot luxury villas overlooking the Indian Ocean.',
    fullDesc: 'Cast off aboard a private 48-foot sailing catamaran along the golden coast of Mirissa, Weligama, and Tangalle. Anchor in secluded turquoise coves accessible only by water, paddleboard over vibrant coral gardens, and enjoy freshly caught mahi-mahi prepared on board by your private chef.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0tfOI7N2IcrAauwLXE1VdItX06l71XupufNmCqZaA7rxIQt_7qxqllBYRa99cXnPtfVSeEKv8vpWd8FK9v4mp3RMOUQNoejD3suafmIlVSH2I22AkIWFmKrS4ABPRv6hsP1iz0NKZeGQagSnPNwZ35_n0jrNPB6pebnsdV9gmRlS_qu699stiyT4dGvOVpgqoNaUZvI9UxuZ9UZGN6NzUO1a1cIharEh_MTiSQ15svJkmPz7O3KcwUA',
    duration: '4 to 6 Hours',
    idealFor: 'Honeymooners, private groups, ocean adventurers',
    included: ['Private catamaran charter with licensed skipper & crew', 'Stand-up paddleboards & premium snorkel gear', 'Chef-prepared fresh seafood lunch or sundowner tapas', 'Champagne & tropical coconut water'],
    highlights: ['Secluded swimming in sheltered ocean lagoons', 'Chance dolphin encounters alongside the hulls', 'Sunset over the endless southern horizon'],
    priceEst: '$240 / person',
  },
  {
    id: 'cultural-sacred',
    title: 'Monk Blessings & Ancient Boulder Art',
    category: 'cultural',
    categoryLabel: 'Cultural Sacredness',
    shortDesc: 'Private dusk ceremonies at quiet monastery caves and private access to UNESCO archaeological restorations.',
    fullDesc: 'Experience the living spiritual pulse of Sri Lanka far from tour buses. Walk barefoot through ancient granite cave temples lit by flickering coconut oil lamps, receive a traditional pirith thread blessing from an elder Buddhist monk, and explore 2,000-year-old rock inscriptions with our archaeological advisor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEV2SitQpR-lQtUDPwmImbC_iEBriAHxMoWRnMgeFNAsERJ3G9R4EZzKLkRWk69eZl3mzus4FygyzAmv_EkGcUL8sbPprDtlEMnIUXfvW9nYxrNH7BEoNwxIYGlnutYlhLlciINyb9u_60y84r-IjpizDpY6IWhJQh47SMiQPYJiYf1ptSdDXLkxvt2X_GWxtJfudXOQDQ_lKIfLnc3ofQtT6dpRY9Q5humIv0ukGu_IoCblRPmts0ag',
    duration: '4 Hours (Late Afternoon to Dusk)',
    idealFor: 'Culture seekers, mindful travelers, heritage enthusiasts',
    included: ['Private access to quiet monastic forest hermitage', 'Personal Buddhist scholar and translator', 'Traditional offerings of white lotus flowers and lamps', 'Private blessing ceremony with pirith thread'],
    highlights: ['Chanting in ancient Pali language reverberating off stone', 'Intimate quietude inside hidden rock shelters', 'Sunset meditation over ancient water tanks'],
    priceEst: '$95 / person',
  },
  {
    id: 'pekoe-trail',
    title: 'Cloud Forest Treks & Adams Peak',
    category: 'trekking',
    categoryLabel: 'Pekoe Trail & Peaks',
    shortDesc: 'Curated stages of the world-acclaimed Pekoe Trail with portered luxury glamping and sunrise mountain summits.',
    fullDesc: 'Walk the acclaimed 300km Pekoe Trail that weaves through Sri Lanka\'s central highlands. We curate the most dramatic single-day stages—through mist-shrouded cloud forests, remote Tamil tea communities, and steep mountain ridges with panoramic 360-degree views toward the southern plains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClYh3dh0BVol62iYOqDnGAUdmodJy6eSlh_kicVMHiRaMfKrtJDKym7fTQpzeXRsOaToKolQl-GyAzBJdS_Iyt_GrTYZRN8yHg2eGAmvAEhhEqPT_6VQDbLcrAhDg-bundNClUM4Jh4E4YdIEJRGxlWiVAqk4IzsHPqNLjDvf4MIC7POe9ieo1L22Vd4OqIOeoXCozTtD-sqa8gnUUkyqi9OMShYhVKjGWUMhJhQXH-9pPecB2inl0tw',
    duration: '6 to 8 Hours',
    idealFor: 'Hikers, outdoor enthusiasts, active couples',
    included: ['Licensed mountain trekking guide', 'Support vehicle and luggage portering', 'Gourmet trail picnic with hot tea in insulated thermoses', 'First-aid and trekking poles provided'],
    highlights: ['Passing secluded high-elevation tea factories', 'Endemic bird sightings including the Ceylon whistling thrush', 'Crisp mountain air and sweeping valley vistas'],
    priceEst: '$110 / person',
  },
  {
    id: 'culinary-mastery',
    title: 'Spiced Seafood Feasts & Village Kitchens',
    category: 'culinary',
    categoryLabel: 'Flavors & Spices',
    shortDesc: 'Harvest organic cinnamon with generational growers and master aromatic hopper making with coastal grandmothers.',
    fullDesc: 'Immerse your senses in the complex alchemy of true Ceylon spices. Begin by walking through a fragrant organic spice garden harvesting true Ceylon cinnamon, wild black pepper, and fresh curry leaves. Then join an esteemed village cook in a traditional open-air clay hearth kitchen, learning the sacred art of stone-grinding coconut sambol, crafting lace-thin egg hoppers, and simmering rich Jaffna-style crab curry.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX5yQRdAEpvK6PWFDr6l4c2ydRHfxKQXKGBzjCUlWghqjj8_ND7IGP9AsI7p0gtqEnbU58jFFzg4ACrdGuZKD17S2ChUaoMh8xZ6bC635GgBvuri4uLamtT4irqP9isEiRXeSbbG-awnDp_TzHQd9lVwZ1was0WCw2UXCVBF5G38QKJrOfPXx0OzSkhykUrnhZ_i9OfVKvvUfkPaYZ8LXv4zO_nYycPqAgvolyvafS5dw4W1UpPX8_XA',
    duration: '4 Hours (Morning or Evening)',
    idealFor: 'Foodies, families, home cooks, spice connoisseurs',
    included: ['Guided spice harvest in certified organic plantation', 'Hands-on cooking masterclass with master home cook', 'Generous 8-course banquet served on banana leaves', 'Custom spice gift box to take home'],
    highlights: ['Peeling Ceylon cinnamon quill with artisan tools', 'Crisping your own egg hopper in miniature woks', 'Learning authentic roasted curry powder blends'],
    priceEst: '$85 / person',
  },
];

export const TOURS: Tour[] = [
  {
    id: 'ultimate-escape',
    title: 'The Ultimate Sri Lanka Escape',
    duration: '10 Days / 9 Nights',
    nights: 9,
    days: 10,
    pricePerPerson: 1299,
    tag: 'Featured Journey • Highly Curated',
    isFeatured: true,
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnIyFvR6aObITOBgYuT8gwdTnI1MUZhFJgW6PuJQsNhf4qNDUQvbJP9gJhYGKVkMPZ_6tOYl1Z-Pmgs4RLqJ69Pz0OlzxrcvirJ10FjqUqr64NnA3AClNL6BEDi91iltFc9JKWAm7H1PIoUJPA2mnm3vvQB1PLzy0XCA7-svQpyivOgt8gXa2g7tsP1Varl6PHQJnYxVoP7UdRTUMJwqt3MUFfU8DzIZqDYerUZMsSWEkrpsCyf0BOnQ',
    overview: 'From ancient royal citadels and misty highlands to wild leopard sanctuaries and pristine tropical shores, experience the absolute best of Sri Lanka in one seamless, private 10-day expedition.',
    routeStops: ['Colombo', 'Sigiriya', 'Kandy', 'Ella', 'Yala Safari', 'Galle Fort'],
    highlights: [
      'Climb the 5th-century Sigiriya Rock Fortress at golden sunrise',
      'Scenic first-class mountain train through highland tea fields',
      'Two private leopard and elephant game drives in Yala National Park',
      'Luxury colonial bungalow and oceanfront boutique stays',
      'Sunset ramparts stroll and private dining in Galle Fort',
    ],
    included: [
      'Private air-conditioned luxury vehicle throughout',
      'English-speaking certified Chauffeur-Guide',
      '9 nights in curated boutique 5-star & heritage hotels',
      'Daily artisan breakfasts and selected gourmet dinners',
      'All national park safari jeeps, naturalists & entrance fees',
      'Pre-booked 1st class scenic railway tickets',
    ],
    excluded: [
      'International flights',
      'Sri Lanka tourist visa fees (ETA)',
      'Gratuities and personal expenses',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo & Coastal Transition',
        location: 'Colombo / Negombo',
        description: 'Warm airport welcome by your private chauffeur. Transfer to your seaside sanctuary to relax after travel. Evening orientation stroll along the golden sands and welcome cocktail.',
        stay: 'The Wallawwa Heritage Manor',
        meals: 'Dinner included',
      },
      {
        day: 2,
        title: 'Sacred Dambulla Caves to Sigiriya',
        location: 'Sigiriya',
        description: 'Journey north into the Cultural Triangle. Explore the UNESCO Dambulla Cave Temples with golden Buddhas and ancient ceiling murals. Settle into your eco-resort overlooking the jungle rock.',
        stay: 'Water Garden Sigiriya',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 3,
        title: 'The Sky Citadel of Sigiriya & Village Feast',
        location: 'Sigiriya',
        description: 'Dawn ascent of King Kasyapa\'s 5th-century fortress before the heat of the day. Afternoon bullock-cart ride through a rural lake village followed by a clay-pot culinary feast.',
        stay: 'Water Garden Sigiriya',
        meals: 'Breakfast & Traditional Lunch',
      },
      {
        day: 4,
        title: 'Spices of Matale & The Sacred City of Kandy',
        location: 'Kandy',
        description: 'Ascend into the lush foothills. Walk through an aromatic spice garden learning Ceylon cinnamon and clove cultivation. Evening puja ceremony at the Temple of the Sacred Tooth Relic.',
        stay: 'The Kandy House (1804 Manor)',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 5,
        title: 'The Highland Blue Train to Ella',
        location: 'Ella',
        description: 'Board the famous blue train for the world\'s most scenic rail journey across deep green valleys, thundering waterfalls, and cloud forests. Arrive in the dramatic mountain village of Ella.',
        stay: '98 Acres Resort & Spa',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 6,
        title: 'Nine Arch Demodara Bridge & Little Adam\'s Peak',
        location: 'Ella',
        description: 'Early morning forest walk to watch the colonial steam and diesel trains cross the Nine Arch Viaduct. Moderate hike up Little Adam\'s Peak with 360-degree panorama of the southern plains.',
        stay: '98 Acres Resort & Spa',
        meals: 'Breakfast & High Tea',
      },
      {
        day: 7,
        title: 'Descend to Wild Yala & Afternoon Game Drive',
        location: 'Yala National Park',
        description: 'Drive down from the cool heights through Ravana Falls to the southern dry plains. Check in to your luxury tented camp. Embark on a private sunset safari in search of leopards and elephants.',
        stay: 'Chena Huts by Uga Escapes',
        meals: 'Breakfast, Lunch & Safari Dinner',
      },
      {
        day: 8,
        title: 'Dawn Safari with Naturalist & Coastline Bound',
        location: 'Yala to Galle',
        description: 'Pre-dawn game drive into Block 1 with our senior tracker. Afternoon drive along the Indian Ocean coastline past traditional stilt fishermen to the historic ramparts of Galle Fort.',
        stay: 'Amangalla / Fort Bazaar',
        meals: 'Breakfast & Dinner',
      },
      {
        day: 9,
        title: 'Galle Fort Heritage & Sunset Bastions',
        location: 'Galle',
        description: 'Private morning walking tour of Galle Fort with a local historian. Leisurely afternoon browsing artisanal jewelry, tea boutiques, and relaxing. Farewell seafood dinner on the ramparts.',
        stay: 'Amangalla / Fort Bazaar',
        meals: 'Breakfast & Farewell Dinner',
      },
      {
        day: 10,
        title: 'Coastal Highway & Departure',
        location: 'Galle to Colombo Airport',
        description: 'Scenic drive along the southern expressway to Bandaranaike International Airport (CMB) for your journey home, carrying memories of serendipity.',
        stay: 'Departure',
        meals: 'Breakfast',
      },
    ],
  },
  {
    id: 'ceylon-tea-mist',
    title: 'Ceylon Tea, Rails & Misty Highlands',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    pricePerPerson: 890,
    tag: 'Mountain Heritage & Treks',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhuUf7S-mV2uocfJmtIdbpmri_PDzE6WfN9V9uSuuIAhxaEcyXERZRGy9Iy0XnMU9ThyFJSuMiHKLAd6WJO8ufkod8mLujk-rIY_xyueksoEwn62qE-Okb4rNPRZLkXLyh4ED26LWhORR3nut9TdPr_hStkIluHsZCbBe8y_ZVREwivsozqrSP1U3PBp8FscweNwai8Esgo64IW-WndJBUqiUw1fOD6bKrNxENiejag4_r5Yz1OnYCGg',
    overview: 'Immerse yourself in cool mountain air, historic colonial tea planter bungalows, scenic high-elevation rail passages, and stage walks along the world-renowned Pekoe Trail.',
    routeStops: ['Colombo', 'Kandy', 'Hatton', 'Nuwara Eliya', 'Ella'],
    highlights: [
      'Private stay in restored 1920s Scottish tea planter bungalow',
      'Scenic train ride across high mountain passes above 1,800m',
      'Guided stages of the world-famous Pekoe Trail',
      'Artisan high tea and single-estate blind tasting sessions',
    ],
    included: [
      'Private chauffeur & vehicle',
      '6 nights in premium highland bungalows',
      'All meals & plantation high teas',
      'All rail tickets & trekking guides',
    ],
    excluded: ['Flights', 'Visa fees'],
    itinerary: [
      { day: 1, title: 'Ascent to Kandy Hills', location: 'Kandy', description: 'Transfer from Colombo into misty Kandy.', stay: 'Theva Residency', meals: 'Dinner' },
      { day: 2, title: 'Temple & Royal Gardens', location: 'Kandy', description: 'Sacred tooth relic and Peradeniya botany.', stay: 'Theva Residency', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Tea Valley of Hatton', location: 'Hatton / Castlereagh', description: 'Lake Castlereagh tea estates and vintage hydro-power dams.', stay: 'Ceylon Tea Trails', meals: 'All Inclusive' },
      { day: 4, title: 'The Pekoe Trail Walk', location: 'Hatton', description: 'Scenic walking trail through tea terraces and cedar forests.', stay: 'Ceylon Tea Trails', meals: 'All Inclusive' },
      { day: 5, title: 'Nuwara Eliya & Horton Plains', location: 'Nuwara Eliya', description: 'World\'s End drop and high mountain flora.', stay: 'Grand Hotel Nuwara Eliya', meals: 'Breakfast & High Tea' },
      { day: 6, title: 'Ella Nine Arch & Sunset', location: 'Ella', description: 'Demodara viaduct and mountain serenity.', stay: '98 Acres Resort', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Descent & Return Transfer', location: 'Colombo', description: 'Scenic mountain descent to Colombo.', stay: 'Departure', meals: 'Breakfast' },
    ],
  },
  {
    id: 'wild-leopards-ocean',
    title: 'Wild Leopards, Elephants & Ocean Giants',
    duration: '8 Days / 7 Nights',
    nights: 7,
    days: 8,
    pricePerPerson: 1080,
    tag: 'Safari & Marine Expedition',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGLzARPxwXCxP3FN26weYzU5ydTEXUV5-KrMxbqpKbdFIOzhZW6Ge-mfiX7jlwCd-nuMOdBd06ZjBheP0ZVyRsTSjuUAVFvHE_J0JEJ1useQhkAuTww9pdmyQ4ZCqMAsTOWph1-AnAMxcLO6SKIA7F66ZWg-8gDprKIfcbZUdgzIqiglzDiwzDp-rPvCBlbRyDqXYINeeMQHSdKWR2MtjGM_xzPEGrLPVaNPcjEMl4WZXjLSLTqAe_Nw',
    overview: 'The definitive wildlife voyage of Sri Lanka: Track big leopards in Yala, witness the great elephant gathering in Minneriya, and sail offshore in search of blue whales.',
    routeStops: ['Colombo', 'Minneriya', 'Yala National Park', 'Mirissa', 'Galle'],
    highlights: [
      'Private 4x4 game drives in two distinct national parks',
      'Offshore blue whale & dolphin private boat charter',
      'Glamping under the stars in eco-safari tents',
      'Exclusive naturalist guide assigned throughout',
    ],
    included: [
      'All safari vehicles & permits',
      '7 nights luxury lodge & glamping stays',
      'All meals on safari & boat cruises',
      'Private naturalist',
    ],
    excluded: ['International airfare', 'Alcoholic beverages'],
    itinerary: [
      { day: 1, title: 'Arrival & Northward Bound', location: 'Habarana', description: 'Arrival and transition to the elephant dry zone.', stay: 'Cinnamon Lodge', meals: 'Dinner' },
      { day: 2, title: 'The Great Elephant Gathering', location: 'Minneriya', description: 'Hundreds of wild elephants around the ancient reservoir.', stay: 'Cinnamon Lodge', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Transit to Southern Yala', location: 'Yala', description: 'Drive south through central wilderness.', stay: 'Wild Coast Tented Lodge', meals: 'All Inclusive' },
      { day: 4, title: 'Leopard Tracking Game Drives', location: 'Yala', description: 'Dawn and dusk private safaris in leopard hotspots.', stay: 'Wild Coast Tented Lodge', meals: 'All Inclusive' },
      { day: 5, title: 'Mirissa Coastal Arrival', location: 'Mirissa', description: 'Oceanfront villa arrival and coconut grove relaxation.', stay: 'Sri Sharavi Beach Villas', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Blue Whale Ocean Charter', location: 'Mirissa', description: 'Private boat voyage seeking blue and sperm whales.', stay: 'Sri Sharavi Beach Villas', meals: 'Breakfast & Seafood Lunch' },
      { day: 7, title: 'Galle Fort Heritage Stroll', location: 'Galle', description: 'Historic Dutch fortress exploration.', stay: 'Fort Bazaar', meals: 'Breakfast & Dinner' },
      { day: 8, title: 'Coastal Return', location: 'Colombo Airport', description: 'Transfer along southern expressway.', stay: 'Departure', meals: 'Breakfast' },
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: '10-places',
    title: '10 Places You Shouldn’t Miss in Sri Lanka',
    category: 'Travel Guide',
    readTime: '7 min read',
    date: 'Autumn 2026',
    author: 'Sunil Weeraratne, Senior Naturalist',
    summary: 'From ancient rock citadels to hidden southern coves, discover the essential locations that define the soul of Ceylon.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1YXDvfbAZO5P5L3y8axege2xDc7wgJm_d5M1VtqzVJdZPTXhFtI5kzJWh4NFHfEItiXeZZmuG_v5zipzWmLjsuAjcmE6bwZTAF8xXinmPYYPuAEof4dh847ksOayRF1J2TyIw71BmrBdKMFY92mS9GcQUtocYWyKvvnEucbp0uKru35W1TYNN92bFh-x7CwO5_htlHWCgzeOZ_538GeUX3JBIU_Ya3hL3XZi2HzmySVUOyoEFNsMgxA',
    content: [
      'Sri Lanka may look like a modest drop off the southern tip of the Indian subcontinent, but within its borders lies an extraordinary density of microclimates, wildlife spectacles, and millennia of civilization.',
      '1. Sigiriya Rock Fortress: Start in the heart of the Cultural Triangle where King Kasyapa sculpted a palace into a sheer monolithic monolith. Arrive before 7:00 AM to beat both crowds and tropical heat.',
      '2. The High Country & Ella: The air cools dramatically as you ascend into the central massif. The Nine Arch Demodara Bridge is an engineering marvel nestled in mist.',
      '3. Galle Fort: Walk the 400-year-old Dutch ramparts at sunset as ocean waves crash against centuries-old coral limestone bastions.',
      '4. Yala National Park: Track leopards in early morning golden light on sun-warmed granite outcrops.',
      '5. Mirissa and Weligama: Golden sand bays, vibrant surf culture, and gentle ocean giants in offshore waters.',
      '6. Kandy & Temple of the Tooth: The spiritual core of the island with evening drums and fragrant frangipani blossoms.',
    ],
    travelTips: [
      'Book the blue train tickets at least 30 days ahead or travel with a licensed tour operator who holds reserved carriage allotments.',
      'Always dress respectfully (covered shoulders and knees) when visiting sacred temples.',
      'Carry cash in Sri Lankan Rupees for roadside king coconuts and village fruit stands.',
    ],
  },
  {
    id: 'ella-guide',
    title: 'The Ultimate Guide to Ella & The Nine Arch Bridge',
    category: 'Destination Spotlight',
    readTime: '5 min read',
    date: 'Updated September 2026',
    author: 'Kavindi Perera, Highlands Specialist',
    summary: 'Best vantage points, timing train passages, and secret forest shortcuts to avoid the mid-day crowds.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKh2ep7TRjiOSO-RjHAiOgOYuC1yzMRLGTb5EsHfJfaTyG-NhlselYcDnRZ4yL-G71UNYwzN5jvb_pLJWbD6TU23Vh26ThzVR10_kVOg9yLzfdeJfflS_1AeywECk8HrBzNe1wiBAKhLyuVP0LB0wzjPZVKHJq309URvsJdiNi_9fi64JHNUQ5ec0airTI1m6UTqfr62HM44Mdkxz0wrnLagnYBwSJzMR5OC5RhTtk7r0OilKgpbp5_Q',
    content: [
      'Hidden in the green folds of the Uva Province, the Nine Arch Bridge—locally known as \'Ahas Namaye Palama\' (Nine Skies Bridge)—is one of the most picturesque railway bridges anywhere in the world.',
      'Constructed entirely of solid stone bricks and cement without a single piece of steel during World War I, the bridge spans 91 meters across a lush jungle valley.',
      'Timing is everything: The blue passenger trains generally pass at approximately 9:20 AM, 11:45 AM, 3:30 PM, and 5:30 PM. We recommend reaching the western tea terrace viewpoint by 8:45 AM.',
    ],
    travelTips: [
      'Take the jungle path from Ella town via Little Adam\'s Peak road for a peaceful 25-minute trek away from motorized traffic.',
      'Sample freshly plucked golden passionfruit juice at the humble lookout cafes overlooking the arches.',
      'Wear sturdy walking shoes with good tread as morning dew on tea trails can be slippery.',
    ],
  },
  {
    id: 'monsoon-guide',
    title: 'When Is the Best Time to Visit Sri Lanka?',
    category: 'Trip Planning',
    readTime: '6 min read',
    date: 'Travel Intelligence 2026',
    author: 'Travel Ceylon Editorial Team',
    summary: 'Navigating the two distinct monsoon seasons to guarantee blue skies whichever month you travel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1GIF-RwbE-0r2CXC2SCOPJXw-cXwQU531D0wdBrNTO26pl65S9O8nD4QfObYU-qoILL6R9g9KI8VYOOs58j8dcOT66sDAUhA_f0C6Wj_E7l0SJBgtTQ1yzub3vKkLN9ShLtCF_PhY1qYM3_X87GF2OgASMXneJSE2HVVj3PKXXb42OiHbFjX3bu8xCLwfyzYiu9Kij3692lNob-lMDKaAmB3PDRmcOCbbdy7XJJqI2M6hRdWZkiKhZw',
    content: [
      'One of Sri Lanka\'s greatest geographical gifts is its dual monsoon system. While one coast experiences rain, the other enjoys brilliant sunshine and calm waters. There is literally no "bad" time of year to visit Sri Lanka—you only need to know which coast to choose!',
      'December to April: The West and South Coasts (Colombo, Galle, Mirissa, Bentota) and the Central Hill Country enjoy dry, sunny weather and crystal seas.',
      'May to September: The East Coast (Passikudah, Trincomalee, Arugam Bay) and Cultural Triangle (Sigiriya, Anuradhapura) are glorious with calm turquoise lagoons and peak surf.',
      'October and November: The shoulder inter-monsoon period brings lush greenery and quieter sanctuaries with fewer international visitors.',
    ],
    travelTips: [
      'If you travel between May and September, plan your beach stay in Trincomalee or Arugam Bay instead of the south coast.',
      'For wildlife, February to July is peak leopard viewing as water sources shrink in Yala and Wilpattu.',
      'Pack light, breathable linens and one warm layer for highland evenings in Nuwara Eliya where temperatures can dip to 12°C.',
    ],
  },
  {
    id: 'food-guide',
    title: 'A Beginner’s Guide to Sri Lankan Food',
    category: 'Culinary Journey',
    readTime: '8 min read',
    date: 'Epicurean Ceylon',
    author: 'Chef Ruwan Wickramasinghe',
    summary: 'From sizzling night-market kottu roti to delicate egg hoppers and fragrant black pork curry.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBayrxs_whlZ3pbWqKG_vHQ_TghMnJJ6MzPDUd8njsTjSdG2Alyd51gD66T4aX47D4Dm8C-RPewSQ6e3iqTvx3gXh1_RJUU46rCIdO8D5yDx1vExB96uG0sxuOaGvMExp7Kiikhu7wYzVo2H_ns7PKUKzJY7_s9Xb3n80uHQU2uCYwUQo-FK1ptn2XRh1goS4FZLKyirZJ0vA-QIhKlaEgwIPFa4LjZDidwp39pw3BTdPLmiy-rgXXq-w',
    content: [
      'Sri Lankan cuisine is one of the world\'s most vibrant and misunderstood culinary traditions. It is distinctly separate from Indian food, defined by the heavy use of coconut milk, unrefined coconut oil, freshly grated coconut sambols, roasted dark curry powders, and fiery scotch bonnets (kochchi miris).',
      'The Hopper (Appa): A bowl-shaped fermented rice-flour and coconut-milk pancake with a crisp lacy rim and a soft, pillowy center, often crowned with a sunny steamed egg.',
      'Kottu Roti: The rhythmic soundtrack of Sri Lankan evenings—shredded godamba roti chopped on hot iron griddles with vegetables, egg, aromatic meat curry, and spices.',
      'Pol Sambol: Freshly grated coconut mortar-pounded with dried red chillies, shallots, lime juice, and smoked Maldive fish flakes. Simple, unforgettable perfection.',
    ],
    travelTips: [
      'Pair fiery curries with cooling buffalo curd drizzled with treacle (kitul palm nectar).',
      'Never hesitate to ask for "mild" (sudu curry style) if you prefer subtle warming spice over chilli heat.',
      'Always drink freshly hacked king coconut water (thambili) after an afternoon temple visit.',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Travel Ceylon made our honeymoon pure magic. The private tea bungalow in Hatton and seeing a leopard in Yala within two hours of our first safari was simply unforgettable. Every single detail was seamless.',
    author: 'Elena & Marcus Vance',
    origin: 'United Kingdom',
    tourType: 'Bespoke Honeymoon',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS6UfqPfGAuOJoT_2P9s3vWg754QtOXjAi2Fg9VDBbE7C71BXaSyXCJTYwDMO86RGy3qKZLKjBuPYxmi6qpI8_BWF2mu_HcFpKGiyEsu8DQd3OvlQFv9gC2HnNhJg6l1rhMW9LyydkeyArvKADNgj03Wo6071QRQ8BdK6ZaePvTnj5D9fTyjgHVDmNqJXa6yitawb1yi_VA9jLfPjSI5-C5TYg9AVM9f_Dn_ckAqcNJH3uE8ICJ8strQ',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'Traveling with two teenagers can be difficult, but our private chauffeur-guide Dinesh was phenomenal. He showed us hidden waterfalls, street food spots, and kept everyone fascinated by Sigiriya.',
    author: 'David Henderson',
    origin: 'Australia',
    tourType: 'Family Grand Tour',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCloI45jg1daQ2VGKHA8H9hhQztTT4dGIt-zhxuWMe4yoxkvUk_E7_fFDCSWHE8LNycJvHX5jFGYXhAGD21rMtv3x95uPZU9v4-c-3CpWBxrv36r8vQRU107-COB6Rs6XWMCiGkRLLP3A1XGX6inqxNZdLc-3VVdyCxwtVcdg6gVR8i-trwr34oiSn_ZhnWE_EjBbbEwLDXQOgWWp1fMoYmVBoJhqz8TeEndgcZt5c_EzNrgdjxmsyyCA',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'The bespoke wellness sanctuary retreat in Kandy followed by private surf lessons in Weligama gave me the deepest rejuvenation. As a solo female traveler, I felt utterly supported, respected, and enriched.',
    author: 'Sophie Laurent',
    origin: 'France',
    tourType: 'Solo Wellness & Surf',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbVwDUnzReEb-qheH-uI1S28A1cXkGEkn1ZifnQRBVmz60kI8F6enGDXh3MUuVvKeSMraDhj8cqtVRIoLe07YtBS3XVZ6ENsg9u2wM23acEamIDPJOo0Ow_lCzwdaeaD653Wtcs2fYniOOhIlZaS7C9NHC3TONTBWs3Zq2pe6YSmVrPDE_V3X50V6fV09D4NmJM25sDiPpwxyYpjyH6jxtlUxND7m6DCVzyXJN6CYw2yjHx0qKYlA4Yg',
    rating: 5,
  },
];
