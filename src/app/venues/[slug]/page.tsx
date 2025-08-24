// src/app/venues/[slug]/page.tsx
import { findVenueBySlug, formatMoney } from "@/lib/venues";
import { notFound } from "next/navigation";
import Link from "next/link";
import PhotoGrid from "@/components/PhotoGrid";

type Props = { params: Promise<{ slug: string }> };

export default async function VenuePage({ params }: Props) {
  const { slug } = await params;
  const venue = findVenueBySlug(slug);
  if (!venue) return notFound();

  const images =
    venue.images && venue.images.length > 0
      ? venue.images
      : [venue.image, venue.image, venue.image, venue.image, venue.image];

  return (
    <article className="space-y-6">
      {/* Gallery */}
      <PhotoGrid images={images} />

      {/* Heading / meta */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">{venue.name}</h1>
        <p className="text-gray-400">
          {venue.city} • Capacity {venue.capacity}
        </p>
        <p className="text-lg">
          From{" "}
          <span className="font-semibold">
            {formatMoney(venue.basePriceCents)}
          </span>{" "}
          per event
        </p>
      </header>

      {/* Description */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-white">{venue.description}</p>
      </section>

      {/* Amenities */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Amenities</h2>
        <ul className="flex flex-wrap gap-2">
          {venue.amenities.map((a) => (
            <li
              key={a}
              className="rounded-full border px-3 py-1 text-sm bg-black"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
