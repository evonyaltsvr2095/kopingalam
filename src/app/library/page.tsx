import { BookCard } from "@/modules/library/components/BookCard";
import { getBooks } from "@/modules/library/data/queries";
import type { BookCategory } from "@/modules/library/types";

export const instant = false;

export const metadata = {
  title: "Pustaka",
  description:
    "Koleksi buku yang bisa dibaca di Kopingalam. Fiksi, non-fiksi, filsafat, sejarah, agama, dan psikologi.",
};

const categories: { value: BookCategory; label: string }[] = [
  { value: "fiction", label: "Fiksi" },
  { value: "non-fiction", label: "Non-Fiksi" },
  { value: "philosophy", label: "Filsafat" },
  { value: "history", label: "Sejarah" },
  { value: "religion", label: "Agama & Spiritual" },
  { value: "psychology", label: "Psikologi" },
  { value: "poetry", label: "Puisi" },
  { value: "children", label: "Anak-anak" },
];

export default async function LibraryPage() {
  const books = await getBooks();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Pustaka
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Buku untuk Ditemani Kopi
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Koleksi buku pilihan yang bisa kamu baca gratis di Kopingalam.
          Tinggal ambil, duduk, dan nikmati.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          const items = books.filter(
            (book) => book.category === category.value
          );

          if (items.length === 0) return null;

          return (
            <section key={category.value}>
              <h2 className="mb-6 font-heading text-2xl font-semibold text-brown">
                {category.label}{" "}
                <span className="text-base font-normal text-soft-black/50">
                  ({items.length})
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-16 rounded-2xl border border-light-grey bg-cream p-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-brown">
          Punya buku untuk disumbang?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-soft-black/70">
          Kami terbuka untuk donasi buku. Hubungi kami lewat WhatsApp untuk
          informasi lebih lanjut.
        </p>
      </section>
    </main>
  );
}