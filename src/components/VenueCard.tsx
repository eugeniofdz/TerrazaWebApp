import Link from "next/link";
import { formatMoney, type Venue } from "@/lib/venues";

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Link href={`/venues/${venue.slug}`} className="rounded-xl">
      <img
        src={venue.image}
        alt={venue.name}
        className="rounded-xl h-48 w-full object-cover"
      />
      <div className="px-1 py-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{venue.name}</h3>
        </div>
        <p className="text-sm text-gray-400">{venue.city}</p>
        <p className="text-sm text-gray-400">Capacity: {venue.capacity}</p>
      </div>
    </Link>
  );
}
