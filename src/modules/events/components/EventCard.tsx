import Link from "next/link";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import type { EventItem } from "../types";

export function EventCard({ event }: { event: EventItem }) {
  const startDate = new Date(event.startsAt);
  const endDate = event.endsAt ? new Date(event.endsAt) : null;

  const dateLabel = format(startDate, "EEEE, d MMMM yyyy", { locale: localeId });
  const startTime = format(startDate, "HH.mm");
  const endTime = endDate ? format(endDate, "HH.mm") : null;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block rounded-2xl border border-light-grey bg-white p-6 transition hover:-translate-y-1 hover:border-terracotta hover:shadow-lg dark:bg-[#b6895b] dark:border-[#b6895b]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-brown group-hover:text-terracotta dark:text-[#010101] dark:group-hover:text-[#333]">
            {event.title}
          </h3>
        </div>
        <span className="whitespace-nowrap rounded-full bg-cream px-3 py-1 text-xs font-medium text-terracotta dark:bg-[#010101] dark:text-[#b6895b]">
          {event.priceLabel}
        </span>
      </div>

      <p className="mt-3 line-clamp-3 text-sm text-soft-black/70 dark:text-[#010101]">
        {event.description}
      </p>

      <dl className="mt-5 flex flex-col gap-2 text-sm text-soft-black/80 dark:text-[#010101]">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-moss dark:text-[#010101]" />
          <span>{dateLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-moss dark:text-[#010101]" />
          <span>
            {startTime}
            {endTime && ` – ${endTime} WIB`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-moss dark:text-[#010101]" />
          <span>{event.locationText}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-moss dark:text-[#010101]" />
          <span>Kapasitas {event.capacity} orang</span>
        </div>
      </dl>
    </Link>
  );
}