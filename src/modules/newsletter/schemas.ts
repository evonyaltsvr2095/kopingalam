import { z } from "zod";

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;