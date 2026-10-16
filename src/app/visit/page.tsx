import type { ReactNode } from "react";
import { MapPin, Clock, Phone, Mail, Car, Wifi, Dog, Cigarette } from "lucide-react";
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
          Kami menunggu kehadiranmu. Berikut informasi lokasi, jam buka, dan
          fasilitas.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <InfoCard
          icon={<MapPin />}
          title="Alamat"
          lines={[
            siteConfig.address.street,
            `${siteConfig.address.city}, ${siteConfig.address.region}`,
          ]}
        />
        <InfoCard icon={<Clock />} title="Jam Buka" lines={["TO CONFIRM"]} />
        <InfoCard icon={<Phone />} title="WhatsApp" lines={[siteConfig.contact.whatsapp]} />
        <InfoCard icon={<Mail />} title="Email" lines={[siteConfig.contact.email]} />
      </div>

      <section className="mt-12 rounded-2xl border border-light-grey bg-white p-6">
        <h2 className="font-heading text-xl font-semibold text-brown">
          Peta Lokasi
        </h2>
        <div className="mt-4 flex h-64 items-center justify-center rounded-xl bg-cream text-sm text-soft-black/50">
          Peta akan ditampilkan setelah alamat dikonfirmasi.
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-brown">
          Fasilitas
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Car size={18} />, label: "Parkir area" },
            { icon: <Wifi size={18} />, label: "WiFi" },
            { icon: <Dog size={18} />, label: "Pet friendly (TO CONFIRM)" },
            { icon: <Cigarette size={18} />, label: "Area merokok (TO CONFIRM)" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-light-grey bg-white p-3 text-sm text-soft-black/80"
            >
              <span className="text-moss">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-light-grey bg-white p-5">
      <div className="flex items-center gap-3 text-terracotta">
        {icon}
        <h2 className="font-heading text-lg font-semibold text-brown">
          {title}
        </h2>
      </div>
      <div className="mt-3 text-sm text-soft-black/70">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}