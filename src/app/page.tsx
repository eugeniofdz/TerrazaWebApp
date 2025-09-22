import VenueCard from "@/components/VenueCard";

export default function Home() {
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">
        Find a venue for your next event
      </h1>
      <p className="text-gray-600">
        MVP coming soon. You’ll be able to search by date, capacity, and price.
      </p>
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Explore event spaces</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"></div>
      </section>
    </section>
  );
}
