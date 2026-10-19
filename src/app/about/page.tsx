import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, BookOpen, Mountain, Users, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getGalleryPhotos } from "@/modules/gallery/data/queries";

export const instant = false;

export const metadata = {
  title: "Tentang",
  description: "Cerita, filosofi, dan nilai-nilai Kopingalam.",
};

export default async function AboutPage() {
  // Ambil foto dari galeri untuk ditampilkan di halaman About (jika ada)
  const photos = await getGalleryPhotos();
  // Ambil 2 foto yang kategorinya suasana atau panorama (kalau ada), kalau tidak ambil apa saja
  const highlightPhotos = photos.filter(p => p.category === "suasana" || p.category === "panorama").slice(0, 2);
  const fallbackPhotos = photos.slice(0, 2);
  const displayPhotos = highlightPhotos.length > 0 ? highlightPhotos : fallbackPhotos;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* HERO */}
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Tentang Kami
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Tempat untuk Pulang
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Lebih dari sekadar kafe, Kopingalam adalah ruang untuk berhenti sejenak, 
          membaca, dan menikmati alam.
        </p>
      </header>

      {/* FOTO SOROTAN (Jika ada) */}
      {displayPhotos.length > 0 && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {displayPhotos.map((photo, idx) => (
            <div key={photo.id} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-light-grey">
              <Image
                src={`/gallery/${photo.filePath}`}
                alt={photo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}

      {/* CERITA */}
      <section className="mt-16 space-y-6 text-soft-black/80 text-lg leading-relaxed">
        <h2 className="font-heading text-3xl font-bold text-brown mb-6">Cerita Kami</h2>
        <p>
          Kopingalam lahir dari kecintaan pada alam Malang dan gagasan yang tumbuh 
          dari percakapan. Kami percaya kopi bukan hanya minuman, tapi alasan untuk 
          duduk bersama, berbagi cerita, dan belajar.
        </p>
        <p>
          Nama "Kopingalam" menggabungkan kopi, pinggir alam, dan kehangatan. 
          Di sini kamu bisa menikmati racikan kopi lokal, membaca buku dari pustaka 
          kecil kami, atau sekadar menikmati pemandangan pegunungan yang jarang 
          dilihat orang.
        </p>
        <p>
          Kami merancang tempat ini agar terasa seperti rumah kedua. Tempat di mana 
          kamu bisa datang sendiri, bersama teman, atau keluarga, dan pulang dengan 
          hati yang lebih tenang.
        </p>
      </section>

      {/* NILAI-NILAI */}
      <section className="mt-16">
        <h2 className="font-heading text-3xl font-bold text-brown mb-8 text-center">
          Nilai-Nilai Kami
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <ValueCard
            icon={<Coffee />}
            title="Kopi Lokal"
            description="Biji kopi dari petani dataran tinggi Malang, diseduh dengan tangan dan hati."
          />
          <ValueCard
            icon={<BookOpen />}
            title="Pustaka"
            description="Koleksi buku untuk dibaca di tempat, gratis untuk semua pengunjung."
          />
          <ValueCard
            icon={<Mountain />}
            title="Panorama"
            description="Pemandangan gunung dan udara sejuk yang jarang ditemukan di kota."
          />
          <ValueCard
            icon={<Users />}
            title="Komunitas"
            description="Ruang untuk diskusi, workshop, dan acara komunitas yang terbuka untuk siapa saja."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-light-grey bg-cream p-8 text-center">
        <Heart className="mx-auto text-terracotta mb-4" size={32} />
        <h2 className="font-heading text-2xl font-bold text-brown">
          Ingin berkunjung?
        </h2>
        <p className="mt-2 text-soft-black/70">
          Lihat informasi lokasi dan jam buka kami.
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
    <div className="rounded-2xl border border-light-grey bg-white p-6">
      <div className="text-terracotta">{icon}</div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-brown">
        {title}
      </h3>
      <p className="mt-2 text-sm text-soft-black/70">{description}</p>
    </div>
  );
}