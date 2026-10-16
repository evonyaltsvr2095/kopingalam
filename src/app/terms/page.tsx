import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan website Kopingalam.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown">
        Syarat & Ketentuan
      </h1>
      <p className="mt-6 text-soft-black/80">Terakhir diperbarui: TO CONFIRM</p>
      <div className="mt-8 space-y-4 text-soft-black/80">
        <p>
          Dengan mengakses website ini, kamu setuju dengan syarat dan ketentuan
          yang berlaku.
        </p>
        <p>
          <strong>Penggunaan website:</strong> Website ini disediakan untuk
          informasi menu, acara, dan kunjungan ke Kopingalam.
        </p>
        <p>
          <strong>RSVP:</strong> Data RSVP yang kamu kirim harus valid. Kami
          berhak membatalkan RSVP yang tidak sesuai.
        </p>
        <p>
          <strong>Konten:</strong> Semua konten di website ini milik Kopingalam
          kecuali dinyatakan lain.
        </p>
        <p>
          <strong>Kontak:</strong> Untuk pertanyaan, hubungi{" "}
          {siteConfig.contact.email}.
        </p>
      </div>
    </main>
  );
}