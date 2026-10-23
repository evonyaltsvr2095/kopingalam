"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "../actions/auth";
import { Lock, Loader2 } from "lucide-react";
import Link from "next/link";

const initialState = { error: null as string | null };

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-6 dark:bg-[#010101]">
      <div className="w-full max-w-md rounded-2xl border border-light-grey bg-white p-8 shadow-lg dark:bg-[#b6895b] dark:border-[#b6895b]">
        <div className="mb-8 text-center">
          <Lock className="mx-auto text-terracotta dark:text-[#010101]" size={40} />
          <h1 className="mt-4 font-heading text-2xl font-bold text-brown dark:text-[#010101]">
            Admin Kopingalam
          </h1>
          <p className="mt-2 text-sm text-soft-black/60 dark:text-[#010101]/80">
            Silakan login untuk mengelola website.
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-soft-black dark:text-[#010101]">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-4 py-2 text-sm text-soft-black outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 dark:bg-[#010101] dark:text-white dark:border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-soft-black dark:text-[#010101]">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full rounded-lg border border-light-grey bg-cream px-4 py-2 text-sm text-soft-black outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 dark:bg-[#010101] dark:text-white dark:border-gray-700"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-red-600 dark:text-red-300">{state.error}</p>
          )}

          <SubmitButton />
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-terracotta hover:underline dark:text-[#010101]">
            &larr; Kembali ke Website
          </Link>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center rounded-lg bg-terracotta px-4 py-2.5 text-sm font-semibold text-cream transition hover:opacity-90 disabled:opacity-50 dark:bg-[#010101] dark:text-[#b6895b]"
    >
      {pending ? <Loader2 size={16} className="animate-spin" /> : "Masuk"}
    </button>
  );
}