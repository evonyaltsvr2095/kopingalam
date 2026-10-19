import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan website Kopingalam.",
};

export default function TermsPage() {
  const lastUpdated = "Oktober 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown">
        Syarat & Ketentuan
      </h1>
      <p className="mt-3 text-sm text-soft-black/60">
        Terakhir diperbarui: {lastUpdated}
      </p>

      <div className="mt-10 space-y-8 text-soft-black/80 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            1. Penerimaan Syarat
          </h2>
          <p className="mt-3">
            Dengan mengakses dan menggunakan website {siteConfig.name}, kamu
            setuju untuk terikat dengan syarat dan ketentuan yang tercantum di
            halaman ini. Jika kamu tidak setuju, mohon tidak menggunakan
            website ini.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            2. Penggunaan Website
          </h2>
          <p className="mt-3">
            Website ini disediakan untuk memberikan informasi tentang menu,
            acara, dan layanan {siteConfig.name}. Kamu setuju untuk:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Tidak menggunakan website untuk tujuan ilegal.</li>
            <li>Tidak mencoba merusak atau mengganggu operasional website.</li>
            <li>Tidak mengumpulkan data pengguna lain tanpa izin.</li>
            <li>Tidak menggunakan website untuk menyebarkan konten berbahaya.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            3. RSVP Acara
          </h2>
          <p className="mt-3">
            Saat kamu mendaftar acara melalui form RSVP, kamu setuju bahwa:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Data yang kamu isi adalah benar dan dapat dipertanggungjawabkan.</li>
            <li>
              Kami berhak membatalkan RSVP jika ditemukan data yang tidak valid
              atau mencurigakan.
            </li>
            <li>
              Kapasitas acara terbatas. RSVP yang sudah dikonfirmasi berlaku
              selama masih ada slot.
            </li>
            <li>
              Jika kamu tidak dapat hadir, mohon hubungi kami sebelumnya agar
              slot bisa dialokasikan ke orang lain.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            4. Hak Kekayaan Intelektual
          </h2>
          <p className="mt-3">
            Semua konten di website ini — termasuk logo, teks, foto, dan
            desain — adalah milik {siteConfig.name} atau pemegang hak yang sah,
            dan dilindungi oleh hukum hak cipta. Kamu tidak diperbolehkan
            menggunakan konten ini tanpa izin tertulis.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            5. Batasan Tanggung Jawab
          </h2>
          <p className="mt-3">
            Website ini disediakan "sebagaimana adanya". Kami tidak menjamin
            bahwa website akan selalu tersedia tanpa gangguan, bebas dari
            error, atau bebas dari virus. Kami tidak bertanggung jawab atas
            kerugian yang timbul dari penggunaan website ini.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            6. Tautan ke Pihak Ketiga
          </h2>
          <p className="mt-3">
            Website ini mungkin berisi tautan ke website pihak ketiga (seperti
            Instagram atau WhatsApp). Kami tidak bertanggung jawab atas konten
            atau kebijakan privasi dari website pihak ketiga tersebut.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            7. Perubahan Syarat
          </h2>
          <p className="mt-3">
            Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan
            akan berlaku sejak dipublikasikan di halaman ini. Penggunaan
            berkelanjutan atas website setelah perubahan berarti kamu setuju
            dengan syarat yang diperbarui.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            8. Hukum yang Berlaku
          </h2>
          <p className="mt-3">
            Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia.
            Setiap perselisihan akan diselesaikan secara musyawarah terlebih
            dahulu.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-brown">
            9. Kontak
          </h2>
          <p className="mt-3">
            Untuk pertanyaan tentang syarat dan ketentuan ini, hubungi kami di{" "}
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