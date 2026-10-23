import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  
  description: siteConfig.description,
  keywords: [
    "kafe Malang",
    "kopi Malang",
    "cafe Malang",
    "Kopingalam",
    "kafe view gunung",
    "ngopi Malang",
    "WFC Malang",
    "kafe instagramable Malang",
    "kafe hits Malang",
    "kafe aesthetic Malang",
    "kafe outdoor Malang",
    "kafe indoor Malang",
    "kafe dengan live music Malang",
    "cafe view gunung Malang",
  ],

  authors: [{ name: siteConfig.name }],
 openGraph: {
  type: "website",
  locale: "id_ID",
  url: siteConfig.url,
  siteName: siteConfig.name,
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  images: ["/og-image.png"],
},


  robots: {
    index: true,
    follow: true,
  },

   verification: {
    google: "D2u4FJLFPs4dimvewesbTmmoGoX-zHoSUlqfOfu1EoM",
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-cream text-soft-black antialiased flex min-h-screen flex-col dark:bg-[#010101] dark:text-white">
        <LocalBusinessJsonLd />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}