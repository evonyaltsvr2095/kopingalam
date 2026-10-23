"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  // Mencegah scroll di body saat menu mobile terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-light-grey bg-cream/95 backdrop-blur dark:bg-[#010101] dark:border-gray-800">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-heading text-xl font-bold text-brown dark:text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-soft-black hover:text-terracotta transition-colors dark:text-gray-300 dark:hover:text-[#b6895b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions (Dark Mode + Mobile Menu Button) */}
          <div className="flex items-center gap-2 z-50">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-brown dark:text-white"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay (Background Gelap) */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Drawer (Slide dari Kiri) */}
      <nav
        className={`fixed top-0 left-0 bottom-0 w-64 bg-cream z-40 transform transition-transform duration-300 ease-in-out md:hidden dark:bg-[#010101] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-24">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-soft-black hover:text-terracotta dark:text-gray-300 dark:hover:text-[#b6895b]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}