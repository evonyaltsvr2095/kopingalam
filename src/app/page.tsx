import Link from "next/link";
import { Coffee, Calendar, MapPin, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getAvailableMenuItems } from "@/modules/menu/data/queries";
import { getPublishedEvents } from "@/modules/events/data/queries";
import { getGalleryPhotos } from "@/modules/gallery/data/queries";
import { EventCard } from "@/modules/events/components/EventCard";
import Image from "next/image";

// Mencegah error build di Next.js 16
export const instant = false;

export default async function HomePage() {
  // Ambil data secara paralel dari Supabase
  const [menuItems, events, photos] = await Promise.all([
    getAvailableMenuItems(),
    getPublishedEvents(),
    getGalleryPhotos(),
  ]);

  // Ambil 3 menu pertama, 1 acara mendatang, dan 3 foto galeri
  const featuredMenu = menuItems.slice(0, 3);
  const nextEvent = events[0];
  const featuredPhotos = photos.slice(0, 3);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Malang · Jawa Timur
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-brown md:text-6xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-soft-black/80">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
          >
            Lihat Menu
          </Link>
          <Link
            href="/visit"
            className="rounded-full border border-brown px-6 py-3 text-sm font-semibold text-brown hover:bg-brown hover:text-cream"
          >
            Rencanakan Kunjungan
          </Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <HighlightCard
            icon={<Coffee size={24} />}
            title="Kopi Pilihan"
            description="Kopi lokal dan racikan khas dari dataran tinggi Malang."
            href="/menu"
          />
          <HighlightCard
            icon={<Calendar size={24} />}
            title="Acara Mingguan"
            description="SINAU BARENG tiap Kamis, Live Acoustic tiap Sabtu."
            href="/events"
          />
          <HighlightCard
            icon={<BookOpen size={24} />}
            title="Pustaka Kopingalam"
            description="Koleksi buku untuk dibaca sambil menikmati panorama."
            href="/library"
          />
          <HighlightCard
            icon={<MapPin size={24} />}
            title="Kunjungi Kami"
            description="Lokasi, jam buka, dan panduan menuju Kopingalam."
            href="/visit"
          />
        </div>
      </section>

      {/* FEATURED MENU (Dinamis) */}
      {featuredMenu.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brown">
                Racikan Favorit
              </h2>
              <p className="mt-2 text-soft-black/70">
                Beberapa menu yang paling sering dipesan.
              </p>
            </div>
            <Link
              href="/menu"
              className="hidden items-center gap-1 text-sm font-semibold text-terracotta hover:underline sm:flex"
            >
              Lihat Semua <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredMenu.map((item) => (
              <div key={item.id} className="rounded-2xl border border-light-grey bg-white p-6 dark:bg-[#b6895b] dark:border-[#b6895b]">
                <h3 className="font-heading text-lg font-semibold text-brown dark:text-[#010101]">
                   {item.name}
               </h3>
                <p className="mt-2 line-clamp-2 text-sm text-soft-black/70 dark:text-[#010101]/80">
                   {item.description}
               </p>
                <p className="mt-4 font-medium text-terracotta dark:text-[#010101]">
                   Rp {item.priceIdr.toLocaleString("id-ID")}
               </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* NEXT EVENT (Dinamis) */}
      {nextEvent && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-brown">
              Acara Terdekat
            </h2>
            <p className="mt-2 text-soft-black/70">
              Jangan lewatkan keseruan di Kopingalam.
            </p>
          </div>
          <div className="max-w-2xl">
            <EventCard event={nextEvent} />
          </div>
        </section>
      )}

      {/* GALLERY PREVIEW (Dinamis) */}
      {featuredPhotos.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-brown">
                Suasana Kopingalam
              </h2>
              <p className="mt-2 text-soft-black/70">
                Sekilas tentang tempat kami.
              </p>
            </div>
            <Link
              href="/gallery"
              className="hidden items-center gap-1 text-sm font-semibold text-terracotta hover:underline sm:flex"
            >
              Lihat Galeri <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredPhotos.map((photo) => (
              <div key={photo.id} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={`/gallery/${photo.filePath}`}
                  alt={photo.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WELCOME TEXT */}
      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="font-heading text-3xl font-bold text-brown">
          Tempat untuk Pulang
        </h2>
        <p className="mt-4 text-soft-black/80">
          Kopingalam lahir dari kecintaan pada alam Malang dan gagasan yang
          tumbuh dari percakapan. Di sini kamu bisa ngopi, membaca, berdiskusi,
          dan menikmati pemandangan yang jarang dilihat orang.
        </p>
      </section>
    </main>
  );
}

function HighlightCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-light-grey bg-white p-6 transition hover:-translate-y-1 hover:border-terracotta hover:shadow-lg dark:bg-[#b6895b] dark:border-[#b6895b]"
    >
      <div className="text-terracotta">{icon}</div>
      <h3 className="font-heading text-lg font-semibold text-brown group-hover:text-terracotta dark:text-[#010101]">
        {title}
      </h3>
      <p className="text-sm text-soft-black/70 dark:text-[#010101]/80">
        {description}
      </p>
    </Link>
  );
}