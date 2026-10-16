import type { ReactNode } from "react";
import Link from "next/link";
import { Coffee, BookOpen, Mountain, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Tentang",
  description: "Cerita dan filosofi Kopingalam.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Tentang
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Tempat untuk Pulang
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          {siteConfig.description}
        </p>
      </header>

      <section className="mt-12 space-y-4 text-soft-black/80">
        <p>
          Kopingalam lahir dari kecintaan pada alam Malang dan gagasan yang
          tumbuh dari percakapan. Kami percaya kopi bukan hanya minuman, tapi
          alasan untuk duduk bersama, berbagi cerita, dan belajar.
        </p>
        <p>
          Nama “Kopingalam” menggabungkan kopi, pinggir alam, dan kehangatan.
          Di sini kamu bisa menikmati racikan kopi lokal, membaca buku dari
          pustaka kecil kami, atau sekadar menikmati pemandangan pegunungan.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <ValueCard
          icon={<Coffee />}
          title="Kopi Lokal"
          description="Biji kopi dari petani dataran tinggi Malang, diseduh dengan tangan."
        />
        <ValueCard
          icon={<BookOpen />}
          title="Pustaka"
          description="Koleksi buku untuk dibaca di tempat, gratis untuk pengunjung."
        />
        <ValueCard
          icon={<Mountain />}
          title="Panorama"
          description="Pemandangan gunung dan udara sejuk yang jarang ditemukan."
        />
        <ValueCard
          icon={<Users />}
          title="Komunitas"
          description="Ruang untuk diskusi, workshop, dan acara komunitas."
        />
      </section>

      <section className="mt-12 rounded-2xl border border-light-grey bg-cream p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-brown">
          Ingin berkunjung?
        </h2>
        <p className="mt-2 text-soft-black/70">
          Lihat informasi lokasi dan jam buka.
        </p>
        <Link
          href="/visit"
          className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
        >
          Kunjungi Kami
        </Link>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-light-grey bg-white p-5">
      <div className="text-terracotta">{icon}</div>
      <h3 className="mt-3 font-heading text-lg font-semibold text-brown">
        {title}
      </h3>
      <p className="mt-1 text-sm text-soft-black/70">{description}</p>
    </div>
  );
}