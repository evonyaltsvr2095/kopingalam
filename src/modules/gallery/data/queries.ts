import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { GalleryPhoto } from "../types";

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("gallery_photos")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data.map((photo) => ({
    id: photo.id,
    title: photo.title,
    description: photo.description ?? "",
    category: photo.category as GalleryPhoto["category"],
    filePath: photo.file_path,
  }));
}