export type EventStatus = "published" | "draft" | "cancelled";

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  startsAt: string; // ISO date string
  endsAt?: string;
  locationText: string;
  capacity: number;
  priceLabel: string; // contoh: "Gratis" atau "Rp 50.000"
  status: EventStatus;
};