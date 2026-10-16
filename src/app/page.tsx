import Link from "next/link";
import { Coffee, Calendar, MapPin, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
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

      {/* Highlights */}
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
            href="/about"
          />
          <HighlightCard
            icon={<MapPin size={24} />}
            title="Kunjungi Kami"
            description="Lokasi, jam buka, dan panduan menuju Kopingalam."
            href="/visit"
          />
        </div>
      </section>

      {/* Welcome */}
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
      className="group flex flex-col gap-3 rounded-2xl border border-light-grey bg-white p-6 transition hover:-translate-y-1 hover:border-terracotta hover:shadow-lg"
    >
      <div className="text-terracotta">{icon}</div>
      <h3 className="font-heading text-lg font-semibold text-brown">
        {title}
      </h3>
      <p className="text-sm text-soft-black/70">{description}</p>
    </Link>
  );
}