/**
 * HAVEN HOUSE HOTELS — CENTRALIZED BUSINESS CONFIGURATION
 * 
 * All business details, room data, contact coordinates, and demonstration
 * settings are centralized in this file. When customizing this website for
 * a real hotel client, simply replace the values below.
 */

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  capacity: string;
  bed: string;
  size: string;
  pricePerNight: number;
  samplePriceLabel: string;
  image: string;
  additionalImages: string[];
  amenities: string[];
  view: string;
  badge?: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hours: string;
  image: string;
  highlights: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: "HeartHandshake" | "BedDouble" | "Compass" | "Sparkles";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "rooms" | "dining" | "wellness" | "spaces";
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stayDate: string;
  roomStayed: string;
  rating: number;
}

export const HOTEL_CONFIG = {
  // Brand & Identity
  brandName: "Haven House",
  legalName: "Haven House Hotels & Residences Ltd.",
  tagline: "A Better Way to Stay.",
  heroSubheadline: "YOUR PRIVATE ESCAPE",
  heroDescription:
    "An architectural sanctuary blending quiet luxury, mindful residential design, and bespoke hospitality in an intimate coastal enclave.",
  copyrightYear: 2026,

  // Demonstration Mode Settings
  isDemoMode: true,
  demoNotice:
    "Demonstration Website: Haven House is a portfolio showcase created to exhibit contemporary hospitality web architecture. Rates, rooms, location placeholders, and booking processes simulate a production hotel deployment.",

  // Contact Information (Easily replaceable for real client commissioning)
  contact: {
    // Demonstration safe placeholder phone numbers
    displayPhone: "+234 (0) 800 000 0000",
    phoneCallToAction: "+2348000000000",
    email: "reservations@havenhousehotels.demo",
    conciergeEmail: "concierge@havenhousehotels.demo",
    
    // WhatsApp Number: Leave as empty string "" for demonstration mode.
    // When deploying for a real client, enter their phone number in international format e.g. "+2348012345678"
    whatsappNumber: "", 
    displayWhatsapp: "+234 (0) 800 000 0000 (Demo)",
  },

  // Default Calendar Demonstration Dates
  defaultCheckIn: "2026-12-01",
  defaultCheckOut: "2026-12-05",

  // Social Media Channels (Replace with client's actual social profiles)
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    facebook: "https://facebook.com",
  },

  // Location & Surroundings (Demo-friendly placeholder setup)
  location: {
    regionName: "Victoria Island Enclave",
    city: "Lagos",
    country: "Nigeria",
    displayAddress: "Victoria Island, Lagos, Nigeria (Demonstration Area)",
    addressNote: "Sample location placeholder — easily updated to your verified hotel address upon commissioning.",
    description:
      "This section illustrates how your property's physical location, neighborhood context, and transit accessibility will be showcased to prospective guests. Upon client onboarding, this section is customized with your hotel's exact address, verified Google Maps embed, and curated local landmarks.",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.727506992928!2d3.4219!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53064379a5b%3A0x6b876b5dc1a88b5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng",
    googleMapsExternalUrl: "https://maps.google.com/?q=Victoria+Island+Lagos",
    sampleCoordinates: "6.4281° N, 3.4219° E",
    
    // Configurable landmark highlights for the client's property
    landmarkHighlights: [
      {
        title: "Airport Transit Logistics",
        description: "Configurable chauffeured transfer details tailored to your hotel's airport routes.",
      },
      {
        title: "Commercial & Financial Core",
        description: "Highlights proximity to corporate headquarters, embassies, and financial centers.",
      },
      {
        title: "Waterfront & Leisure Enclaves",
        description: "Curates distances to private beaches, leisure clubs, and yacht marinas.",
      },
      {
        title: "Arts & Cultural District",
        description: "Easy access to leading contemporary art galleries, museums, and fine dining.",
      },
    ],
  },

  // Currency
  currencyCode: "NGN",
  currencySymbol: "₦",

  // Rooms and Suites (Sample Rates Clearly Treated as Demonstration Figures)
  rooms: [
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      tagline: "Serene residential comfort with refined botanical views",
      description:
        "Thoughtfully proportioned for solo executives or couples seeking peaceful understated luxury, featuring artisanal oak carpentry, custom brass appointments, and Italian terrazzo bathrooms.",
      longDescription:
        "The Deluxe Room sets a benchmark for tranquil city living. Wake up to natural morning light streaming through floor-to-ceiling soundproof glazing. Each room features our bespoke king pocket-sprung mattress wrapped in 450-thread-count Egyptian cotton linens, a dedicated architectural work desk, high-speed Wi-Fi 6, and a walk-in rain shower stocked with organic apothecary botanicals.",
      capacity: "Up to 2 Guests",
      bed: "1 King Bed or 2 Twin Beds",
      size: "42 m² / 452 sq ft",
      pricePerNight: 185000,
      samplePriceLabel: "Sample demonstration rate",
      view: "Lush Garden & Courtyard View",
      badge: "Popular for Business Stays",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        "King-size pillow-top mattress",
        "Italian marble walk-in rainfall shower",
        "Smart climate control & ambient lighting",
        "Nespresso coffee station & artisanal tea bar",
        "High-fidelity Bluetooth audio system",
        "55\" 4K OLED Smart TV with streaming support",
        "Signature organic bath amenities",
        "Daily evening turn-down service",
      ],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      tagline: "Expansive one-bedroom haven with separated lounge salon",
      description:
        "An elegant residential suite offering distinct living, working, and sleeping quarters, complemented by a private balcony overlooking the pool terrace.",
      longDescription:
        "Designed for discerning long-stay travelers and executive leaders, the Executive Suite features an expansive private salon separated from the master bedroom by sliding smoked-oak partitions. Entertain visitors in comfort with a four-person dining corner, curated library, dry bar, and a lavish dual-vanity bathroom featuring a freestanding soaking tub.",
      capacity: "Up to 3 Guests",
      bed: "1 California King Bed",
      size: "68 m² / 732 sq ft",
      pricePerNight: 295000,
      samplePriceLabel: "Sample demonstration rate",
      view: "Pool Terrace & Skyline Panorama",
      badge: "Spacious Living Area",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        "Separate living salon & dining nook",
        "Deep freestanding soaking bathtub",
        "Private furnished balcony",
        "Personalized in-suite bar curated to preference",
        "Priority reservations at dining venues",
        "Complimentary garment pressing service",
        "65\" 4K Smart TV in living & bedroom",
        "Dedicated concierge & room service",
      ],
    },
    {
      id: "premium-king-suite",
      name: "Premium King Suite",
      tagline: "Panoramic floor-to-ceiling corner suite with wrap-around terrace",
      description:
        "Corner architectural suite bathed in gentle amber sunlight, showcasing bespoke African contemporary art, walk-in dressing chamber, and serene lounge.",
      longDescription:
        "Elevated on the upper sanctuary levels, the Premium King Suite commands breathtaking panoramic vistas through double-height panoramic windows. The suite integrates a bespoke dressing room, an oversized bathroom sanctuary lined in Travertine marble, a guest powder room, and private check-in privileges.",
      capacity: "Up to 3 Guests",
      bed: "1 Custom Emperor King Bed",
      size: "95 m² / 1,022 sq ft",
      pricePerNight: 440000,
      samplePriceLabel: "Sample demonstration rate",
      view: "Lagoon & Coastal Horizon",
      badge: "Signature Collection",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        "Wrap-around sunlit private terrace",
        "Travertine marble bathroom with view tub",
        "Walk-in dressing room and vanity boudoir",
        "Curated Nigerian contemporary art selection",
        "Sub-Zero climate-controlled wine cooler",
        "VIP arrival and departure coordination",
        "Bang & Olufsen bespoke sound system",
        "Private in-room wellness treatment options",
      ],
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      tagline: "The crown jewel of Haven House — palatial living redefined",
      description:
        "Our grand penthouse estate featuring two master bedrooms, private dining hall for eight, chef's service pantry, private plunge pool, and dedicated host.",
      longDescription:
        "The pinnacle of hospitality excellence. The Presidential Suite spans the entire top floor, crafted for heads of state, international luminaries, and extraordinary celebrations. Features include a private elevator vestibule, expansive salon with grand fireplace, private heated dipping pool, dedicated butler pantry with private service entrance, and boardroom-ready conference technology.",
      capacity: "Up to 6 Guests",
      bed: "2 Emperor Beds + 1 Daybed",
      size: "210 m² / 2,260 sq ft",
      pricePerNight: 920000,
      samplePriceLabel: "Sample demonstration rate",
      view: "360° Unobstructed Coastal Horizon",
      badge: "Penthouse Masterpiece",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      ],
      amenities: [
        "Private heated open-air plunge pool & deck",
        "Formal 8-guest dining salon & wine cellar",
        "Private elevator foyer with secure access",
        "Dedicated personal butler & private chef upon request",
        "Dual master bedrooms with ensuite spa sanctuaries",
        "Executive private study with telepresence technology",
        "Unrestricted access to all hotel wellness facilities",
        "Complimentary luxury car transfer coordination",
      ],
    },
  ] as Room[],

  // Experiences (Sample Amenity Concept Showcase)
  experiences: [
    {
      id: "dining",
      title: "The Verandah & Cellar",
      subtitle: "Contemporary Coastal & Afro-Fusion Gastronomy",
      description:
        "A culinary concept celebrating indigenous West African ingredients reinterpreted through modern gastronomy, paired with an extensive international wine collection.",
      hours: "Breakfast: 06:30 – 10:30 | All-Day: 12:00 – 23:00 (Sample Hours)",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Chef-curated seasonal tasting menus",
        "Sommelier-guided wine tasting cellar",
        "Al-fresco courtyard dining beneath frangipani trees",
        "Artisanal cocktails with native botanicals",
      ],
    },
    {
      id: "pool",
      title: "Azure Pool & Cabanas",
      subtitle: "Sun-Drenched Sanctuary & Solarium",
      description:
        "Suspended amidst lush palms, our 25-meter temperature-controlled lap pool and shallow lounging deck provide a peaceful haven with private daybeds and discreet service.",
      hours: "Daily: 06:00 – 21:00 | Cabana Bar: 11:00 – 22:00 (Sample Hours)",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Heated infinity-edge freshwater swimming pool",
        "Private curtained cabanas with charging ports",
        "Complimentary poolside chilled towels & fruit service",
        "Sunset acoustic sessions on weekends",
      ],
    },
    {
      id: "wellness",
      title: "The Haven Spa & Thermal Suite",
      subtitle: "Holistic Restorative Therapies",
      description:
        "A peaceful sanctuary combining ancient botanical traditions with modern bodywork therapies, cedar dry saunas, aroma steam rooms, and sound bath sessions.",
      hours: "Daily: 08:00 – 20:30 | Prior reservation advised (Sample Hours)",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Custom aromatherapy massage treatments",
        "Finnish cedar sauna & Himalayan salt inhalation room",
        "State-of-the-art fitness pavilion",
        "Private restorative yoga & pilates studio",
      ],
    },
    {
      id: "events",
      title: "The Glasshouse Pavilion & Suites",
      subtitle: "Bespoke Gatherings & Executive Assemblies",
      description:
        "Sunlit architectural spaces designed for discreet corporate symposiums, intimate celebrations, and board meetings with cutting-edge audiovisual integration.",
      hours: "Available on reservation for private delegates (Sample Arrangement)",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      highlights: [
        "Acoustically engineered meeting boardrooms",
        "High-definition 4K video conferencing wall",
        "Private pre-function terrace & cocktail garden",
        "Bespoke catering & executive hospitality coordination",
      ],
    },
  ] as Experience[],

  // Why choose us
  benefits: [
    {
      id: "hospitality",
      title: "Thoughtful Hospitality",
      description:
        "Anticipatory yet unobtrusive service. Every interaction is tailored to honour your schedule, peace of mind, and personal rituals.",
      iconName: "HeartHandshake",
    },
    {
      id: "comfort",
      title: "Comfortable Accommodation",
      description:
        "Bespoke acoustic soundproofing, certified organic bedding, and climate-balanced rooms ensure uninterrupted restorative sleep.",
      iconName: "BedDouble",
    },
    {
      id: "location",
      title: "Convenient Location",
      description:
        "Demonstration framework configured to showcase your property's immediate proximity to business and leisure destinations.",
      iconName: "Compass",
    },
    {
      id: "experience",
      title: "Personalised Experience",
      description:
        "From tailored culinary preferences to private airport logistics, our concierge team curates every facet of your stay.",
      iconName: "Sparkles",
    },
  ] as Benefit[],

  // Gallery
  gallery: [
    {
      id: "gal-1",
      title: "Architectural Exterior at Dusk",
      category: "spaces",
      categoryLabel: "Spaces",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
      description: "Warm amber lighting illuminating the perimeter gardens and contemporary facade.",
    },
    {
      id: "gal-2",
      title: "Executive Suite Master Bedroom",
      category: "rooms",
      categoryLabel: "Suites",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
      description: "Bespoke linen, solid oak millwork, and warm diffused lighting.",
    },
    {
      id: "gal-3",
      title: "The Verandah Dining Room",
      category: "dining",
      categoryLabel: "Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      description: "Fine dining ambiance with curated tableware and courtyard garden views.",
    },
    {
      id: "gal-4",
      title: "Azure Pool & Cabana Deck",
      category: "wellness",
      categoryLabel: "Wellness",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      description: "Sun-drenched loungers and crystal-clear freshwater pool.",
    },
    {
      id: "gal-5",
      title: "Deluxe Suite Living Chamber",
      category: "rooms",
      categoryLabel: "Suites",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
      description: "Comfortable residential lounge seating with curated library titles.",
    },
    {
      id: "gal-6",
      title: "The Haven Thermal Spa Sanctuary",
      category: "wellness",
      categoryLabel: "Wellness",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
      description: "Tranquil treatment suites infused with cedarwood and eucalyptus.",
    },
    {
      id: "gal-7",
      title: "Private Courtyard & Cocktail Lounge",
      category: "dining",
      categoryLabel: "Dining",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
      description: "Golden hour cocktails under ambient festoon lighting and sea breeze.",
    },
    {
      id: "gal-8",
      title: "Glasshouse Executive Boardroom",
      category: "spaces",
      categoryLabel: "Spaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      description: "Ergonomic seating and state-of-the-art telepresence facilities.",
    },
  ] as GalleryItem[],

  // Demonstration Testimonials
  testimonials: [
    {
      id: "test-1",
      quote:
        "Haven House is a masterclass in quiet residential luxury. The staff anticipated our needs with effortless grace, and the acoustic isolation made it feel like we were on a secluded private island right in Victoria Island.",
      author: "Adewale Adeleke",
      role: "Managing Director, Sovereign Capital",
      stayDate: "Sample Review • October 2026",
      roomStayed: "Presidential Suite",
      rating: 5,
    },
    {
      id: "test-2",
      quote:
        "The attention to design detail is breathtaking. From the organic bath amenities to the sommelier's pairing at The Verandah, Haven House easily ranks alongside boutique hotels in London and Zurich.",
      author: "Elena Rostova",
      role: "International Design Consultant",
      stayDate: "Sample Review • September 2026",
      roomStayed: "Executive Suite",
      rating: 5,
    },
    {
      id: "test-3",
      quote:
        "As a frequent business traveler across West Africa, Haven House is the only property where I genuinely sleep eight uninterrupted hours. Seamless check-in, pristine rooms, and world-class coffee.",
      author: "Chinedu Okonkwo",
      role: "Tech Founder & Venture Partner",
      stayDate: "Sample Review • November 2026",
      roomStayed: "Deluxe Room",
      rating: 5,
    },
  ] as Testimonial[],
};
