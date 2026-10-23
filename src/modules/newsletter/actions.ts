"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { subscribeSchema } from "./schemas";

export async function subscribeAction(
  _prevState: { ok: boolean; error?: string },
  formData: FormData
) {
  const email = formData.get("email");
  const parsed = subscribeSchema.safeParse({ email });

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0].message };
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.from("subscribers").insert({
    email: parsed.data.email.toLowerCase(),
  });

  if (error) {
    // Error code 23505 artinya email duplikat (sudah terdaftar)
    if (error.code === "23505") {
      return { ok: true, error: "Email ini sudah berlangganan." };
    }
    console.error("Newsletter error:", error);
    return { ok: false, error: "Gagal mendaftar. Coba lagi nanti." };
  }

  return { ok: true };
}