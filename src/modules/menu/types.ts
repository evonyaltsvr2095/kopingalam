export type MenuCategory =
  | "coffee"
  | "non-coffee"
  | "food"
  | "specials";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  priceIdr: number;
  isAvailable: boolean;
};