import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Book } from "../types";

export async function getBooks(): Promise<Book[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("books")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return data.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    category: book.category as Book["category"],
    description: book.description ?? "",
    isAvailable: book.is_available,
  }));
}