import { Suspense } from "react";
import { EventCard } from "@/modules/events/components/EventCard";
import { getPublishedEvents } from "@/modules/events/data/queries";

export const metadata = {
  title: "Acara",
  description:
    "Acara rutin dan spesial di Kopingalam: SINAU BARENG, Live Acoustic, dan workshop komunitas.",
};

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Acara
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Jadwal & Komunitas
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Kopingalam bukan hanya tempat ngopi. Ada diskusi, musik, dan
          kegiatan komunitas setiap minggu.
        </p>
      </header>

      <Suspense fallback={<EventsSkeleton />}>
        <EventsList />
      </Suspense>
    </main>
  );
}

async function EventsList() {
  const publishedEvents = await getPublishedEvents();

  if (publishedEvents.length === 0) {
    return (
      <p className="text-center text-soft-black/60">
        Belum ada acara yang dijadwalkan.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {publishedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function EventsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="h-48 animate-pulse rounded-2xl border border-light-grey bg-white"
        />
      ))}
    </div>
  );
}