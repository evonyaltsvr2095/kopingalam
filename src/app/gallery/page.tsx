import { PhotoCard } from "@/modules/gallery/components/PhotoCard";
import { getGalleryPhotos } from "@/modules/gallery/data/queries";
import type { GalleryCategory } from "@/modules/gallery/types";

export const instant = false;

export const metadata = {
  title: "Galeri",
  description:
    "Galeri foto Kopingalam: suasana kafe, panorama gunung, menu, dan acara komunitas.",
};

const categories: { value: GalleryCategory; label: string }[] = [
  { value: "menu", label: "Menu" },
  { value: "suasana", label: "Suasana Kafe" },
  { value: "panorama", label: "Panorama" },
  { value: "acara", label: "Acara" },
];

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Galeri
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Momen di Kopingalam
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Kumpulan foto suasana kafe, panorama gunung, menu, dan acara
          komunitas.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          const items = photos.filter(
            (photo) => photo.category === category.value
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
                {items.map((photo) => (
                  <PhotoCard key={photo.id} photo={photo} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {photos.length === 0 && (
        <p className="text-center text-soft-black/60">
          Belum ada foto di galeri.
        </p>
      )}
    </main>
  );
}