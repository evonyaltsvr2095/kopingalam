export const mainNav = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Acara" },
  { href: "/visit", label: "Kunjungi" },
  { href: "/library", label: "Pustaka" },
  { href: "/gallery", label: "Galeri" },
] as const;

export const footerNav = {
  legal: [
    { href: "/privacy", label: "Kebijakan Privasi" },
    { href: "/terms", label: "Syarat & Ketentuan" },
    { href: "/accessibility", label: "Aksesibilitas" },
  ],
} as const;