import type { MenuItem } from "../types";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-light-grey bg-white p-5 transition hover:border-terracotta hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-lg font-semibold text-brown">
          {item.name}
        </h3>
        <span className="whitespace-nowrap font-medium text-terracotta">
          Rp {item.priceIdr.toLocaleString("id-ID")}
        </span>
      </div>
      <p className="text-sm text-soft-black/70">{item.description}</p>
      {!item.isAvailable && (
        <span className="mt-1 inline-block rounded-full bg-light-grey px-3 py-1 text-xs text-soft-black/60">
          Tidak tersedia
        </span>
      )}
    </article>
  );
}