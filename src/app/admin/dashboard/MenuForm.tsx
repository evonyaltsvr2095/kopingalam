"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { addMenuAction } from "../actions/menu";
import { Plus, Loader2 } from "lucide-react";

const initialState = { ok: false, error: undefined as string | undefined };

export function MenuForm() {
  const [state, formAction] = useActionState(addMenuAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form jika berhasil disimpan
  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 rounded-2xl border border-light-grey bg-white p-6 dark:bg-[#111111] dark:border-gray-800">
      <h2 className="font-heading text-xl font-semibold text-brown dark:text-white">
        Tambah Menu Baru
      </h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-soft-black dark:text-gray-300">Nama Menu</label>
          <input type="text" name="name" required className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-3 py-2 text-sm dark:bg-[#010101] dark:text-white dark:border-gray-700" placeholder="Contoh: Kopi Susu" />
        </div>
        <div>
          <label className="block text-sm font-medium text-soft-black dark:text-gray-300">Kategori</label>
          <select name="category" className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-3 py-2 text-sm dark:bg-[#010101] dark:text-white dark:border-gray-700">
            <option value="coffee">Kopi</option>
            <option value="non-coffee">Non-Kopi</option>
            <option value="food">Makanan</option>
            <option value="specials">Spesial</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-soft-black dark:text-gray-300">Harga (Rp)</label>
          <input type="number" name="priceIdr" required className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-3 py-2 text-sm dark:bg-[#010101] dark:text-white dark:border-gray-700" placeholder="25000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-soft-black dark:text-gray-300">Deskripsi (Opsional)</label>
          <input type="text" name="description" className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-3 py-2 text-sm dark:bg-[#010101] dark:text-white dark:border-gray-700" placeholder="Racikan spesial..." />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" name="isAvailable" defaultChecked className="h-4 w-4 rounded border-gray-300 text-terracotta focus:ring-terracotta dark:bg-[#010101] dark:border-gray-700" />
        <label className="text-sm font-medium text-soft-black dark:text-gray-300">Tersedia (Tampilkan di website)</label>
      </div>

      {state.error && <p className="text-sm text-red-500">{state.error}</p>}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="flex items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-2 text-sm font-semibold text-cream hover:opacity-90 disabled:opacity-50 dark:bg-[#b6895b] dark:text-[#010101]">
      {pending ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
      Simpan Menu
    </button>
  );
}