import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Kopingalam.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown">
        Kebijakan Privasi
      </h1>
      <p className="mt-6 text-soft-black/80">Terakhir diperbarui: TO CONFIRM</p>
      <div className="mt-8 space-y-4 text-soft-black/80">
        <p>
          Kami menghargai privasi pengunjung. Halaman ini menjelaskan data apa
          yang kami kumpulkan dan bagaimana kami menggunakannya.
        </p>
        <p>
          <strong>Data yang dikumpulkan:</strong> Nama, kontak, dan jumlah tamu
          saat mengisi RSVP acara.
        </p>
        <p>
          <strong>Penggunaan data:</strong> Hanya untuk keperluan konfirmasi
          kehadiran dan komunikasi terkait acara.
        </p>
        <p>
          <strong>Penyimpanan:</strong> Data disimpan di Supabase dengan akses
          terbatas.
        </p>
        <p>
          <strong>Kontak:</strong> Untuk pertanyaan privasi, hubungi{" "}
          {siteConfig.contact.email}.
        </p>
      </div>
    </main>
  );
}