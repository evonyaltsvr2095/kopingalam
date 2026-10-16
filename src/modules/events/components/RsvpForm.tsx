"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { rsvpSchema, type RsvpInput } from "../schemas";
import { createRsvpAction } from "../actions";

export function RsvpForm({
  eventId,
  eventTitle,
}: {
  eventId: string;
  eventTitle: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      contact: "",
      guestCount: 1,
      notes: "",
    },
  });

  async function onSubmit(data: RsvpInput) {
    setStatus("loading");
    setServerError("");

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("name", data.name);
    formData.append("contact", data.contact);
    formData.append("guestCount", String(data.guestCount));
    if (data.notes) formData.append("notes", data.notes);

    const result = await createRsvpAction({ ok: false }, formData);

    if (result.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("idle");
      setServerError(result.error ?? "RSVP gagal disimpan.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-moss/30 bg-white p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-moss" />
        <h2 className="mt-4 font-heading text-xl font-semibold text-brown">
          RSVP Berhasil
        </h2>
        <p className="mt-2 text-sm text-soft-black/70">
          Terima kasih! Kehadiranmu untuk <strong>{eventTitle}</strong> sudah
          kami catat. Sampai jumpa di sana.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-light-grey bg-white p-6 md:p-8"
      noValidate
    >
      <h2 className="font-heading text-xl font-semibold text-brown">
        Daftar Hadir
      </h2>
      <p className="mt-2 text-sm text-soft-black/70">
        Isi data di bawah ini untuk mengonfirmasi kehadiranmu.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        {/* Nama */}
        <div>
          <label
            htmlFor="rsvp-name"
            className="block text-sm font-medium text-soft-black"
          >
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            id="rsvp-name"
            type="text"
            autoComplete="name"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            className="mt-2 w-full rounded-lg border border-light-grey bg-cream px-4 py-2.5 text-sm text-soft-black outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
            placeholder="Contoh: Budi Santoso"
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={12} />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Kontak */}
        <div>
          <label
            htmlFor="rsvp-contact"
            className="block text-sm font-medium text-soft-black"
          >
            WhatsApp atau Email <span className="text-red-500">*</span>
          </label>
          <input
            id="rsvp-contact"
            type="text"
            autoComplete="tel"
            {...register("contact")}
            aria-invalid={errors.contact ? "true" : "false"}
            className="mt-2 w-full rounded-lg border border-light-grey bg-cream px-4 py-2.5 text-sm text-soft-black outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
            placeholder="08xxxxxxxxxx atau nama@email.com"
          />
          {errors.contact && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={12} />
              {errors.contact.message}
            </p>
          )}
        </div>

        {/* Jumlah tamu */}
        <div>
          <label
            htmlFor="rsvp-guests"
            className="block text-sm font-medium text-soft-black"
          >
            Jumlah Tamu <span className="text-red-500">*</span>
          </label>
          <input
            id="rsvp-guests"
            type="number"
            min={1}
            max={10}
            {...register("guestCount", { valueAsNumber: true })}
            aria-invalid={errors.guestCount ? "true" : "false"}
            className="mt-2 w-full rounded-lg border border-light-grey bg-cream px-4 py-2.5 text-sm text-soft-black outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
          />
          {errors.guestCount && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={12} />
              {errors.guestCount.message}
            </p>
          )}
        </div>

        {/* Catatan */}
        <div>
          <label
            htmlFor="rsvp-notes"
            className="block text-sm font-medium text-soft-black"
          >
            Catatan <span className="text-soft-black/50">(opsional)</span>
          </label>
          <textarea
            id="rsvp-notes"
            rows={3}
            {...register("notes")}
            className="mt-2 w-full resize-none rounded-lg border border-light-grey bg-cream px-4 py-2.5 text-sm text-soft-black outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
            placeholder="Contoh: bawa buku untuk didiskusikan"
          />
          {errors.notes && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle size={12} />
              {errors.notes.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          "Kirim RSVP"
        )}
      </button>

      <p className="mt-3 text-center text-xs text-soft-black/50">
        Data kamu hanya dipakai untuk keperluan acara ini.
      </p>
    </form>
  );
}