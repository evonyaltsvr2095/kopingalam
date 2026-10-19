import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Kebijakan Privasi",
  description:
    "Bagaimana Kopingalam mengumpulkan, menggunakan, dan melindungi data pengunjung.",
};

export default function PrivacyPage() {
  const lastUpdated = "Oktober 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown">
        Kebijakan Privasi
      </h1>
      <p className="mt-3 text-sm text-soft-black/60">
        Terakhir diperbarui: {lastUpdated}
      </p>

      <div className="mt-10 space-y-8 text-soft-black/80 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            1. Pendahuluan
          </h2>
          <p className="mt-3">
            {siteConfig.name} ("kami") berkomitmen melindungi privasi pengunjung
            website ini. Kebijakan ini menjelaskan data apa yang kami kumpulkan,
            bagaimana kami menggunakannya, dan hak-hak kamu sebagai pengguna.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            2. Data yang Kami Kumpulkan
          </h2>
          <p className="mt-3">
            Kami mengumpulkan data dalam dua kategori:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Data yang kamu berikan secara langsung:</strong> Nama,
              kontak (WhatsApp atau email), jumlah tamu, dan catatan yang kamu
              isi saat mendaftar acara (RSVP).
            </li>
            <li>
              <strong>Data otomatis:</strong> Alamat IP, jenis browser, halaman
              yang dikunjungi, dan durasi kunjungan — dikumpulkan melalui
              Google Analytics untuk memahami perilaku pengunjung.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            3. Penggunaan Data
          </h2>
          <p className="mt-3">Data yang kami kumpulkan digunakan untuk:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Mengonfirmasi dan mengelola RSVP acara.</li>
            <li>Menghubungi kamu terkait acara yang kamu daftar.</li>
            <li>Menganalisis penggunaan website untuk perbaikan.</li>
            <li>Memenuhi kewajiban hukum yang berlaku.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            4. Penyimpanan & Keamanan
          </h2>
          <p className="mt-3">
            Data RSVP disimpan di Supabase dengan Row Level Security (RLS)
            yang ketat. Hanya pihak berwenang dari {siteConfig.name} yang dapat
            mengakses data ini. Kami tidak menjual atau membagikan data kamu
            ke pihak ketiga untuk tujuan komersial.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            5. Cookie & Analytics
          </h2>
          <p className="mt-3">
            Website ini menggunakan Google Analytics untuk memahami perilaku
            pengunjung. Google Analytics menggunakan cookie untuk mengumpulkan
            data anonim. Kamu bisa menolak cookie melalui pengaturan browser
            kamu.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            6. Hak Kamu
          </h2>
          <p className="mt-3">Kamu berhak untuk:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Meminta salinan data pribadi yang kami simpan.</li>
            <li>Meminta penghapusan data RSVP kamu.</li>
            <li>Menolak penggunaan data untuk analitik.</li>
          </ul>
          <p className="mt-3">
            Untuk menggunakan hak-hak ini, hubungi kami di{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-terracotta hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            7. Perubahan Kebijakan
          </h2>
          <p className="mt-3">
            Kami dapat memperbarui kebijakan ini dari waktu ke waktu.
            Perubahan akan diumumkan di halaman ini dengan tanggal pembaruan
            terbaru.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            8. Kontak
          </h2>
          <p className="mt-3">
            Jika kamu memiliki pertanyaan tentang kebijakan privasi ini,
            hubungi kami di{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-terracotta hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}