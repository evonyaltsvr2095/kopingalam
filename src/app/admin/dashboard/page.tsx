import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logoutAction } from "../actions/auth";
import { LogOut } from "lucide-react";

export const instant = false;

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Jika tidak ada user yang login, tendang ke halaman login
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-cream p-8 dark:bg-[#010101]">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between rounded-2xl border border-light-grey bg-white p-6 dark:bg-[#111111] dark:border-gray-800">
          <div>
            <h1 className="font-heading text-2xl font-bold text-brown dark:text-white">
              Dashboard Admin
            </h1>
            <p className="text-sm text-soft-black/60 dark:text-gray-400">
              Selamat datang, {user.email}
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
            >
              <LogOut size={16} /> Logout
            </button>
          </form>
        </div>

        <div className="mt-8 rounded-2xl border border-light-grey bg-white p-12 text-center dark:bg-[#111111] dark:border-gray-800">
          <p className="text-soft-black/60 dark:text-gray-400">
            (Area ini akan kita isi dengan form kelola Menu, Acara, dan Buku pada tahap selanjutnya).
          </p>
        </div>
      </div>
    </div>
  );
}