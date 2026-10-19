export const metadata = {
  title: "Aksesibilitas",
  description: "Komitmen Kopingalam terhadap aksesibilitas web.",
};

export default function AccessibilityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown">
        Aksesibilitas
      </h1>
      <p className="mt-6 text-soft-black/80">
        Kopingalam berkomitmen untuk memastikan website ini dapat diakses oleh
        semua orang, termasuk pengguna dengan disabilitas.
      </p>
      <div className="mt-8 space-y-4 text-soft-black/80">
        <p>
          Kami berusaha mengikuti pedoman Web Content Accessibility Guidelines
          (WCAG) 2.2 Level AA. Beberapa upaya yang kami lakukan:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Struktur HTML semantik untuk pembaca layar (screen reader).</li>
          <li>Kontras warna yang cukup antara teks dan latar belakang.</li>
          <li>Dukungan navigasi keyboard untuk semua fitur interaktif.</li>
          <li>Label ARIA pada form dan tombol penting.</li>
        </ul>
        <p>
          Jika kamu menemukan bagian website yang sulit diakses, silakan hubungi
          kami. Masukanmu sangat berarti untuk perbaikan kami.
        </p>
      </div>
    </main>
  );
}