// src/lib/venues.ts

export type Venue = {
  id: string;
  name: string;
  slug: string;
  city: string;
  capacity: number;
  basePriceCents: number;
  /** Legacy/hero image (fallback if images[] is missing) */
  image: string;
  /** NEW: gallery images (first one is used as the big “hero” photo) */
  images?: string[];
  description: string;
  ratings: number; // 0–5
  amenities: string[];
};

export const venues: Venue[] = [
  {
    id: "v1",
    name: "Terraza Central",
    slug: "terraza-central",
    city: "CDMX",
    capacity: 120,
    basePriceCents: 250000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description: "Rooftop terrace with skyline views.",
    ratings: 5,
    amenities: ["Wi-Fi", "Restrooms", "Bar"],
  },
  {
    id: "v2",
    name: "Casa Jardín",
    slug: "casa-jardin",
    city: "Guadalajara",
    capacity: 80,
    basePriceCents: 150000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description: "Lush garden with pergola.",
    ratings: 5,
    amenities: ["Lighting", "Restrooms"],
  },
  {
    id: "v3",
    name: "Loft Industrial",
    slug: "loft-industrial",
    city: "Monterrey",
    capacity: 200,
    basePriceCents: 400000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description: "Open loft with exposed brick.",
    ratings: 5,
    amenities: ["Parking", "AV-ready"],
  },
  {
    id: "v4",
    name: "Hacienda del Sol",
    slug: "hacienda-del-sol",
    city: "Querétaro",
    capacity: 150,
    basePriceCents: 300000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description: "Traditional hacienda with open courtyard and colonial charm.",
    ratings: 5,
    amenities: ["Parking", "Garden area", "Catering kitchen"],
  },
  {
    id: "v5",
    name: "Skyline Lounge",
    slug: "skyline-lounge",
    city: "Monterrey",
    capacity: 90,
    basePriceCents: 200000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description:
      "Modern rooftop bar overlooking the mountains. Ideal for networking events.",
    ratings: 5,
    amenities: ["Wi-Fi", "Bar", "DJ booth", "Elevator"],
  },
  {
    id: "v6",
    name: "Marina Deck",
    slug: "marina-deck",
    city: "Cancún",
    capacity: 60,
    basePriceCents: 180000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description:
      "Waterfront deck with ocean views, perfect for intimate weddings and cocktail parties.",
    ratings: 5,
    amenities: ["Restrooms", "Outdoor seating", "Boat access"],
  },
  {
    id: "v7",
    name: "Cultural Forum Hall",
    slug: "cultural-forum-hall",
    city: "Puebla",
    capacity: 250,
    basePriceCents: 500000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description:
      "Spacious indoor hall with stage and lighting system, suitable for concerts or conferences.",
    ratings: 5,
    amenities: ["Stage", "Lighting", "Sound system", "Green room"],
  },
  {
    id: "v8",
    name: "Eco Retreat",
    slug: "eco-retreat",
    city: "Oaxaca",
    capacity: 70,
    basePriceCents: 220000,
    image: "/placeholder.jpg",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
    ],
    description:
      "Eco-friendly outdoor retreat surrounded by nature, ideal for workshops and wellness events.",
    ratings: 5,
    amenities: ["Solar power", "Restrooms", "Yoga area", "Outdoor kitchen"],
  },
];

export function formatMoney(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function findVenueBySlug(slug: string) {
  return venues.find((v) => v.slug === slug) || null;
}

/** Helper: always return a gallery of at least 5 images */
export function getVenueImages(venue: Venue): string[] {
  const imgs =
    venue.images && venue.images.length > 0 ? venue.images : [venue.image];
  // pad to 5 so the gallery layout is stable
  while (imgs.length < 5) imgs.push(imgs[imgs.length - 1]);
  return imgs.slice(0, 5);
}
