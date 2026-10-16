import { z } from "zod";

export const rsvpSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 huruf")
    .max(100, "Nama terlalu panjang"),

  contact: z
    .string()
    .min(5, "Nomor WhatsApp atau email tidak valid")
    .max(100, "Kontak terlalu panjang"),

  guestCount: z
    .number({ message: "Jumlah tamu harus berupa angka" })
    .int("Jumlah tamu harus bilangan bulat")
    .min(1, "Minimal 1 orang")
    .max(10, "Maksimal 10 orang per RSVP"),

  notes: z
    .string()
    .max(500, "Catatan maksimal 500 karakter")
    .optional()
    .or(z.literal("")),
});

export type RsvpInput = z.infer<typeof rsvpSchema>;