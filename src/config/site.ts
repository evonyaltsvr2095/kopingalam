export const siteConfig = {
  name: "Kopingalam",
  tagline: "Ngopi Nang Ngalam",
  description:
    "Kafe dengan view gunung di Malang, Jawa Timur. Nikmati kopi dan makanan lezat sambil menikmati pemandangan alam yang menakjubkan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  year: 2026,

  // Data ini masih perlu dikonfirmasi pemilik kafe
    contact: {
    whatsapp: "6285961438827", // Pakai kode negara (62), tanpa tanda +
    email: "moskovpro98@gmail.com",
    instagram: "https://www.instagram.com/kopi_ngalam",
  },
  address: {
    street: "Jl. Raya Argosuko Wangkal Lor",
    city: "Malang",
    region: "Jawa Timur",
    country: "ID",
  },
} as const;
