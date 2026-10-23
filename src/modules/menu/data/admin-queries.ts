import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { MenuItem } from "../types";

export async function getAllMenuItemsAdmin(): Promise<MenuItem[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description ?? "",
    category: item.category as MenuItem["category"],
    priceIdr: item.price_idr,
    isAvailable: item.is_available,
  }));
}