import type { MenuItem } from "../types";

export const sampleMenuItems: MenuItem[] = [
  // Coffee
  {
    id: "kopi-susu",
    name: "Kopi Susu Kopingalam",
    description: "Espresso dengan susu segar dan gula aren.",
    category: "coffee",
    priceIdr: 25000,
    isAvailable: true,
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso dengan air panas, disajikan hitam.",
    category: "coffee",
    priceIdr: 22000,
    isAvailable: true,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso dengan steamed milk dan foam lembut.",
    category: "coffee",
    priceIdr: 28000,
    isAvailable: true,
  },

  // Non-Coffee
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Matcha premium dengan susu segar.",
    category: "non-coffee",
    priceIdr: 30000,
    isAvailable: true,
  },
  {
    id: "teh-tarik",
    name: "Teh Tarik",
    description: "Teh hitam dengan susu kental manis.",
    category: "non-coffee",
    priceIdr: 20000,
    isAvailable: true,
  },

  // Food
  {
    id: "pisang-goreng",
    name: "Pisang Goreng Madu",
    description: "Pisang goreng hangat dengan madu dan keju.",
    category: "food",
    priceIdr: 18000,
    isAvailable: true,
  },
  {
    id: "kentang-goreng",
    name: "Kentang Goreng",
    description: "Kentang goreng dengan saus mayo dan sambal.",
    category: "food",
    priceIdr: 20000,
    isAvailable: true,
  },

  // Specials
  {
    id: "kopi-sunrise",
    name: "Kopi Sunrise",
    description: "Racikan spesial dengan sentuhan jeruk dan madu.",
    category: "specials",
    priceIdr: 35000,
    isAvailable: true,
  },
];