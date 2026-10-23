"use server";

import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const menuSchema = z.object({
  name: z.string().min(2, "Nama menu minimal 2 huruf"),
  description: z.string().optional(),
  category: z.enum(["coffee", "non-coffee", "food", "specials"]),
  priceIdr: z.coerce.number().min(0, "Harga tidak boleh negatif"),
  isAvailable: z.boolean().default(true),
});

export async function addMenuAction(
  _prevState: { ok: boolean; error?: string },
  formData: FormData
) {
  const parsed = menuSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    category: formData.get("category"),
    priceIdr: formData.get("priceIdr"),
    isAvailable: formData.get("isAvailable") === "on",
  });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("menu_items").insert({
    name: parsed.data.name,
    description: parsed.data.description,
    category: parsed.data.category,
    price_idr: parsed.data.priceIdr,
    is_available: parsed.data.isAvailable,
    sort_order: 99, // Default urutan paling bawah
  });

  if (error) {
    return { ok: false, error: "Gagal menyimpan menu." };
  }

  // Refresh halaman admin dan halaman publik agar data terbaru langsung muncul
  revalidatePath("/admin/dashboard");
  revalidatePath("/menu");
  revalidatePath("/");

  return { ok: true };
}