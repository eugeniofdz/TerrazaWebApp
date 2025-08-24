import VenueCard from "@/components/VenueCard";
import { venues } from "@/lib/venues";

export default function Home() {
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">
        Find a venue for your next event
      </h1>
      <p className="text-gray-600">
        MVP coming soon. You’ll be able to search by date, capacity, and price.
      </p>
      <div className="flex gap-3">
        <a href="/host" className="rounded border px-4 py-2 hover:bg-gray-600">
          List a venue
        </a>
        <a
          href="/search"
          className="rounded border text-white px-4 py-2 hover:bg-gray-600"
        >
          Browse venues
        </a>
      </div>
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Explore event spaces</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {venues.map((v) => (
            <VenueCard key={v.id} venue={v} />
          ))}
        </div>
      </section>
    </section>
  );
}
