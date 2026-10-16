import Image from "next/image";
import type { GalleryPhoto } from "../types";

export function PhotoCard({ photo }: { photo: GalleryPhoto }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-light-grey bg-white transition hover:border-terracotta hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={`/gallery/${photo.filePath}`}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-4">
        <h3 className="font-heading text-base font-semibold text-brown">
          {photo.title}
        </h3>
        {photo.description && (
          <p className="mt-1 text-xs text-soft-black/60 line-clamp-2">
            {photo.description}
          </p>
        )}
      </figcaption>
    </figure>
  );
}