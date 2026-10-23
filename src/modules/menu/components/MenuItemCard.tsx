import type { MenuItem } from "../types";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-2 rounded-2xl border border-light-grey bg-white p-5 transition hover:border-terracotta hover:shadow-md dark:bg-[#b6895b] dark:border-[#b6895b]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-lg font-semibold text-brown dark:text-[#010101]">
          {item.name}
        </h3>
        <span className="whitespace-nowrap font-medium text-terracotta dark:text-[#010101]">
          Rp {item.priceIdr.toLocaleString("id-ID")}
        </span>
      </div>
      <p className="text-sm text-soft-black/70 dark:text-[#010101]/80">
        {item.description}
      </p>
    </article>
  );
}