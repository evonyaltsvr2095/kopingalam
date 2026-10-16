import { MenuItemCard } from "@/modules/menu/components/MenuItemCard";
import { getAvailableMenuItems } from "@/modules/menu/data/queries";
import type { MenuCategory } from "@/modules/menu/types";

export const instant = false;

export const metadata = {
  title: "Menu",
  description: "Daftar menu kopi, minuman, dan makanan di Kopingalam.",
};

const categories: { value: MenuCategory; label: string }[] = [
  { value: "coffee", label: "Kopi" },
  { value: "non-coffee", label: "Non-Kopi & Teh" },
  { value: "food", label: "Makanan & Camilan" },
  { value: "specials", label: "Spesial" },
];

export default async function MenuPage() {
  const menuItems = await getAvailableMenuItems();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-moss">
          Menu Kami
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brown md:text-5xl">
          Racikan untuk Ditemani Percakapan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-soft-black/70">
          Setiap cangkir diseduh dengan tangan, setiap hidangan dibuat
          dengan sabar.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {categories.map((category) => {
          const items = menuItems.filter(
            (item) => item.category === category.value
          );

          if (items.length === 0) return null;

          return (
            <section key={category.value}>
              <h2 className="mb-6 font-heading text-2xl font-semibold text-brown">
                {category.label}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}