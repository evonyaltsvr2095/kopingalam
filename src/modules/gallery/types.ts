export type GalleryCategory = "menu" | "suasana" | "panorama" | "acara";

export type GalleryPhoto = {
  id: string;
  title: string;
  description: string;
  category: GalleryCategory;
  filePath: string;
};