import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="font-heading text-6xl font-bold text-terracotta">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-brown">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-soft-black/70">
        Mungkin halaman yang kamu cari sudah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
      >
        <Home size={16} /> Kembali ke Beranda
      </Link>
    </main>
  );
}