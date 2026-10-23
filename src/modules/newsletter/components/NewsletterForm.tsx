"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { subscribeAction } from "../actions";

const initialState = { ok: false, error: undefined as string | undefined };

export function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeAction, initialState);

  if (state.ok && !state.error) {
    return (
      <div className="flex items-center gap-2 text-sm text-moss">
        <CheckCircle2 size={18} />
        <span>Terima kasih! Kamu sudah berlangganan.</span>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          placeholder="Masukkan email kamu"
          required
          className="w-full rounded-lg border border-light-grey bg-white px-4 py-2 text-sm text-soft-black outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 dark:bg-[#111111] dark:text-white dark:border-gray-700"
        />
        <SubmitButton />
      </div>
      {state.error && (
        <p className="text-xs text-red-500 mt-1">{state.error}</p>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-cream hover:opacity-90 disabled:opacity-50"
    >
      {pending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
    </button>
  );
}