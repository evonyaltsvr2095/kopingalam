"use server";

import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const rsvpSchema = z.object({
  eventId: z.string().uuid(),
  name: z.string().min(2).max(100),
  contact: z.string().min(5).max(100),
  guestCount: z.coerce.number().int().min(1).max(10),
  notes: z.string().max(500).optional(),
});

export type RsvpActionState = {
  ok: boolean;
  error?: string;
  rsvpId?: string;
};

export async function createRsvpAction(
  _prevState: RsvpActionState,
  formData: FormData
): Promise<RsvpActionState> {
  const parsed = rsvpSchema.safeParse({
    eventId: formData.get("eventId"),
    name: formData.get("name"),
    contact: formData.get("contact"),
    guestCount: formData.get("guestCount"),
    notes: formData.get("notes") || undefined,
  });

  if (!parsed.success) {
    return { ok: false, error: "Data RSVP tidak valid." };
  }

  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.rpc("create_rsvp", {
    p_event_id: parsed.data.eventId,
    p_name: parsed.data.name,
    p_contact: parsed.data.contact,
    p_guest_count: parsed.data.guestCount,
    p_notes: parsed.data.notes ?? null,
  });

  if (error) {
    const map: Record<string, string> = {
      CAPACITY_FULL: "Maaf, kapasitas acara sudah penuh.",
      EVENT_NOT_AVAILABLE: "Acara tidak tersedia atau sudah ditutup.",
      INVALID_GUEST_COUNT: "Jumlah tamu tidak valid.",
    };

    return {
      ok: false,
      error: map[error.message] ?? "RSVP gagal disimpan.",
    };
  }

  return { ok: true, rsvpId: data as string };
}