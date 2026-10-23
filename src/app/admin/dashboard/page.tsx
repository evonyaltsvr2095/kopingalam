import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logoutAction } from "../actions/auth";
import { LogOut } from "lucide-react";
import { getAllMenuItemsAdmin } from "@/modules/menu/data/admin-queries";
import { MenuForm } from "./MenuForm";
import { connection } from "next/server";

export const instant = false;

export default async function DashboardPage() {
    await connection();
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const menus = await getAllMenuItemsAdmin();

  return (
    <div className="min-h-screen bg-cream p-8 dark:bg-[#010101]">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Dashboard */}
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
            <button type="submit" className="flex items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50">
              <LogOut size={16} /> Logout
            </button>
          </form>
        </div>

        {/* Form Tambah Menu */}
        <MenuForm />

        {/* Daftar Menu */}
        <div className="rounded-2xl border border-light-grey bg-white p-6 dark:bg-[#111111] dark:border-gray-800">
          <h2 className="mb-4 font-heading text-xl font-semibold text-brown dark:text-white">
            Daftar Menu ({menus.length})
          </h2>
          <div className="space-y-3">
            {menus.map((menu) => (
              <div key={menu.id} className="flex items-center justify-between rounded-xl border border-light-grey p-4 dark:border-gray-800">
                <div>
                  <p className="font-semibold text-brown dark:text-white">{menu.name}</p>
                  <p className="text-xs text-soft-black/60 dark:text-gray-400">
                    {menu.category} • Rp {menu.priceIdr.toLocaleString("id-ID")}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${menu.isAvailable ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                  {menu.isAvailable ? "Tersedia" : "Kosong"}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}