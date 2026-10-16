export type BookCategory =
  | "fiction"
  | "non-fiction"
  | "poetry"
  | "history"
  | "philosophy"
  | "religion"
  | "psychology"
  | "children";

export type Book = {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  description: string;
  isAvailable: boolean;
};