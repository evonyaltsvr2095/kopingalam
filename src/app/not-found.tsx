import Link from "next/link";
import Image from "next/image";
import { Home, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      {/* Logo */}
      <div className="relative h-32 w-32 opacity-20 grayscale">
        <Image
          src="/logo.png"
          alt="Kopingalam"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="mt-8 font-heading text-6xl font-bold text-terracotta">
        404
      </h1>
      <h2 className="mt-4 font-heading text-3xl font-bold text-brown">
        Halaman tidak ditemukan
      </h2>
      <p className="mt-4 text-soft-black/70">
        Sepertinya kamu tersesat di hutan yang salah. Halaman yang kamu cari
        mungkin sudah dipindahkan atau tidak pernah ada.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
        >
          <Home size={16} /> Kembali ke Beranda
        </Link>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 rounded-full border border-brown px-6 py-3 text-sm font-semibold text-brown hover:bg-brown hover:text-cream"
        >
          <Coffee size={16} /> Lihat Menu
        </Link>
      </div>
    </main>
  );
}