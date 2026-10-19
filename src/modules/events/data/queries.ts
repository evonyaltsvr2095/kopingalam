import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { EventItem } from "../types";

export async function getPublishedEvents(): Promise<EventItem[]> {
  const supabase = await createSupabaseServerClient();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("status", "published")
    .gte("starts_at", now) // <-- BARIS BARU: Filter event mendatang
    .order("starts_at", { ascending: true });

  if (error) throw error;

  return data.map((event) => ({
    id: event.id,
    slug: event.slug,
    title: event.title,
    description: event.description,
    startsAt: event.starts_at,
    endsAt: event.ends_at,
    locationText: event.location_text,
    capacity: event.capacity,
    priceLabel: event.price_label,
    status: event.status,
  }));
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    startsAt: data.starts_at,
    endsAt: data.ends_at,
    locationText: data.location_text,
    capacity: data.capacity,
    priceLabel: data.price_label,
    status: data.status,
  };
}