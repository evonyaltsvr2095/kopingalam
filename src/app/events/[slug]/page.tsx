import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { getEventBySlug } from "@/modules/events/data/queries";
import { RsvpForm } from "@/modules/events/components/RsvpForm";


export const instant = false;

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) return { title: "Acara tidak ditemukan" };

  return {
    title: event.title,
    description: event.description.slice(0, 150),
  };
}

export default function EventDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/events"
        className="inline-flex items-center gap-2 text-sm font-medium text-moss hover:text-terracotta"
      >
        <ArrowLeft size={16} />
        Kembali ke daftar acara
      </Link>

      <Suspense fallback={<EventDetailSkeleton />}>
        <EventDetail params={params} />
      </Suspense>
    </main>
  );
}

async function EventDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const startDate = new Date(event.startsAt);
  const endDate = event.endsAt ? new Date(event.endsAt) : null;

  const dateLabel = format(startDate, "EEEE, d MMMM yyyy", {
    locale: localeId,
  });
  const startTime = format(startDate, "HH.mm");
  const endTime = endDate ? format(endDate, "HH.mm") : null;

  return (
    <>
      <header className="mt-8">
        <span className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-medium uppercase tracking-widest text-terracotta">
          {event.priceLabel}
        </span>
        <h1 className="mt-4 font-heading text-3xl font-bold text-brown md:text-4xl">
          {event.title}
        </h1>
      </header>

      <dl className="mt-8 grid gap-4 rounded-2xl border border-light-grey bg-white p-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Calendar size={18} className="mt-0.5 text-moss" />
          <div>
            <dt className="text-xs uppercase tracking-wide text-soft-black/50">
              Tanggal
            </dt>
            <dd className="text-sm font-medium text-soft-black">
              {dateLabel}
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 text-moss" />
          <div>
            <dt className="text-xs uppercase tracking-wide text-soft-black/50">
              Waktu
            </dt>
            <dd className="text-sm font-medium text-soft-black">
              {startTime}
              {endTime && ` – ${endTime} WIB`}
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 text-moss" />
          <div>
            <dt className="text-xs uppercase tracking-wide text-soft-black/50">
              Lokasi
            </dt>
            <dd className="text-sm font-medium text-soft-black">
              {event.locationText}
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Users size={18} className="mt-0.5 text-moss" />
          <div>
            <dt className="text-xs uppercase tracking-wide text-soft-black/50">
              Kapasitas
            </dt>
            <dd className="text-sm font-medium text-soft-black">
              {event.capacity} orang
            </dd>
          </div>
        </div>
      </dl>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-brown">
          Tentang Acara Ini
        </h2>
        <p className="mt-3 leading-relaxed text-soft-black/80">
          {event.description}
        </p>
      </section>

      <section className="mt-10">
        <RsvpForm eventId={event.id} eventTitle={event.title} />
      </section>
    </>
  );
}

function EventDetailSkeleton() {
  return (
    <div className="mt-8 space-y-6">
      <div className="h-8 w-3/4 animate-pulse rounded bg-light-grey" />
      <div className="h-48 animate-pulse rounded-2xl border border-light-grey bg-white" />
      <div className="h-24 animate-pulse rounded-2xl border border-light-grey bg-white" />
    </div>
  );
}