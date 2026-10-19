"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Bisa log error ke console atau layanan monitoring seperti Sentry
    console.error("Terjadi error:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <AlertCircle size={64} className="text-red-500 mb-6" />
      <h2 className="font-heading text-3xl font-bold text-brown">
        Ups, ada yang salah
      </h2>
      <p className="mt-4 text-soft-black/70">
        Maaf, sepertinya sedang ada gangguan teknis. Silakan coba beberapa saat
        lagi.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:opacity-90"
      >
        Coba Lagi
      </button>
    </main>
  );
}