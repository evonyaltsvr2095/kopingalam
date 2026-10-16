import { BookOpen, User } from "lucide-react";
import type { Book } from "../types";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-light-grey bg-white p-5 transition hover:border-terracotta hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-heading text-lg font-semibold leading-snug text-brown">
            {book.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-soft-black/60">
            <User size={12} />
            {book.author}
          </p>
        </div>
        <BookOpen size={20} className="shrink-0 text-terracotta" />
      </div>

      {book.description && (
        <p className="line-clamp-2 text-sm text-soft-black/70">
          {book.description}
        </p>
      )}

      <div className="mt-auto pt-2">
        {book.isAvailable ? (
          <span className="inline-block rounded-full bg-moss/10 px-3 py-1 text-xs font-medium text-moss">
            Tersedia
          </span>
        ) : (
          <span className="inline-block rounded-full bg-light-grey px-3 py-1 text-xs font-medium text-soft-black/60">
            Sedang Dipinjam
          </span>
        )}
      </div>
    </article>
  );
}