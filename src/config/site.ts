export const siteConfig = {
  name: "Kopingalam",
  tagline: "Ngopi Nang Ngalam",
  description:
    "Kafe dengan view gunung di Malang, Jawa Timur. Nikmati kopi dan makanan lezat sambil menikmati pemandangan alam yang menakjubkan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  year: 2026,

  // Data ini masih perlu dikonfirmasi pemilik kafe
  contact: {
    whatsapp: "085961438827",
    email: "moskovpro98@gmail.com",
    instagram: "https://www.instagram.com/kopi_ngalam?stkn=cG9qbnI3Zjc4OXJs",
  },

  address: {
    street: "Bromo Tengger Semeru",
    city: "Malang",
    region: "Jawa Timur",
    country: "ID",
  },
} as const;
