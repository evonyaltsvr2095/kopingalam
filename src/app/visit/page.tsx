import type { ReactNode } from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Car, Wifi, Coffee, BookOpen, Camera, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Kunjungi Kami",
  description: "Lokasi, jam buka, dan informasi kunjungan ke Kopingalam.",
};

export default function VisitPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Kunjungi
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Rencanakan Kunjunganmu
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Kami menunggu kehadiranmu. Berikut informasi lokasi, jam buka, dan fasilitas.
        </p>
      </header>

      {/* KARTU INFORMASI UTAMA */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <InfoCard
          icon={<MapPin />}
          title="Alamat"
          lines={[
            siteConfig.address.street,
            `${siteConfig.address.city}, ${siteConfig.address.region}`,
          ]}
          action={{
            label: "Buka di Google Maps",
            href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.street + ", " + siteConfig.address.city)}`,
          }}
        />
        <InfoCard
          icon={<Clock />}
          title="Jam Buka"
          lines={[
            "Senin - Minggu: 10.00 - 22.00 WIB",
            "Dapur tutup 30 menit sebelum closing",
            "Acara khusus bisa berbeda (cek halaman Acara)",
          ]}
        />
        <InfoCard
          icon={<Phone />}
          title="WhatsApp"
          lines={[siteConfig.contact.whatsapp]}
          action={{
            label: "Hubungi via WhatsApp",
            href: `https://wa.me/${siteConfig.contact.whatsapp}`,
          }}
        />
        <InfoCard
          icon={<Mail />}
          title="Email"
          lines={[siteConfig.contact.email]}
        />
      </div>

      {/* PETA (Embed Google Maps Placeholder) */}
      <section className="mt-12 overflow-hidden rounded-2xl border border-light-grey bg-white">
        <div className="border-b border-light-grey p-6">
          <h2 className="font-heading text-xl font-semibold text-brown">
            Peta Lokasi
          </h2>
          <p className="mt-1 text-sm text-soft-black/60">
            Gunakan peta di bawah untuk menemukan rute terbaik menuju Kopingalam.
          </p>
        </div>
            <iframe
          src="https://www.openstreetmap.org/export/embed?bbox=112.73364451564323%2C-8.031203437704711%2C112.73478177226555%2C-8.030186225868293&layer=mapnik"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="aspect-video w-full"
          title="Lokasi Kopingalam"
        />
      </section>

      {/* FASILITAS */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brown">
          Fasilitas
        </h2>
        <p className="mt-2 text-soft-black/70">
          Kami menyiapkan berbagai fasilitas agar kunjunganmu nyaman.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { icon: <Car size={20} />, label: "Area Parkir" },
            { icon: <Wifi size={20} />, label: "WiFi Gratis" },
            { icon: <Coffee size={20} />, label: "Kopi & Camilan" },
            { icon: <BookOpen size={20} />, label: "Pustaka" },
            { icon: <Camera size={20} />, label: "Spot Foto" },
            { icon: <MessageCircle size={20} />, label: "Ruang Diskusi" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-light-grey bg-white p-4 text-sm font-medium text-soft-black/80"
            >
              <span className="text-terracotta">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA WHATSAPP */}
      <section className="mt-12 rounded-2xl bg-brown p-8 text-center text-cream">
        <h2 className="font-heading text-2xl font-bold">
          Ada pertanyaan?
        </h2>
        <p className="mt-2 text-cream/80">
          Tim kami siap membantu. Hubungi kami lewat WhatsApp.
        </p>
        <Link
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
        >
          Chat via WhatsApp
        </Link>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  lines,
  action,
}: {
  icon: ReactNode;
  title: string;
  lines: string[];
  action?: { label: string; href: string };
}) {
  return (
    <div className="rounded-2xl border border-light-grey bg-white p-6">
      <div className="flex items-center gap-3 text-terracotta">
        {icon}
        <h2 className="font-heading text-lg font-semibold text-brown">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-1 text-sm text-soft-black/70">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {action && (
        <Link
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-terracotta hover:underline"
        >
          {action.label} &rarr;
        </Link>
      )}
    </div>
  );
}
