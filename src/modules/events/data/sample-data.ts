import type { EventItem } from "../types";

export const sampleEvents: EventItem[] = [
  {
    id: "evt-001",
    slug: "sinau-bareng-pertama",
    title: "SINAU BARENG: Belajar dari Buku",
    description:
      "Diskusi terbuka mingguan membahas satu buku pilihan. Setiap peserta dapat teh gratis. Terbuka untuk siapa saja, dari pemula hingga yang sudah terbiasa berdiskusi.",
    startsAt: "2026-10-24T19:00:00+07:00",
    endsAt: "2026-10-24T21:00:00+07:00",
    locationText: "Kopingalam, Malang",
    capacity: 50,
    priceLabel: "Gratis",
    status: "published",
  },
  {
    id: "evt-002",
    slug: "live-acoustic-sabtu",
    title: "Live Acoustic Saturday",
    description:
      "Malam Sabtu ditemani alunan musik akustik live. Cocok untuk bersantai bersama teman atau pasangan sambil menikmati kopi.",
    startsAt: "2026-10-26T19:00:00+07:00",
    endsAt: "2026-10-26T22:00:00+07:00",
    locationText: "Kopingalam, Malang",
    capacity: 60,
    priceLabel: "Gratis (min. 1 minuman)",
    status: "published",
  },
  
];