import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Memberitahu Next.js 16 agar tidak melakukan prerender statis di area admin
export const instant = false;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Kita biarkan layout ini kosong dari pengecekan auth, 
  // karena halaman /admin/login juga menggunakan layout ini.
  // Pengecekan user yang login dilakukan di dalam /admin/dashboard/page.tsx
  
  return <>{children}</>;
}