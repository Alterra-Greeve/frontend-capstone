import { z } from "zod";

export const ChallengesFilterSchema = z.object({
  difficulty: z.array(z.string()).optional(),
  exp_min: z.coerce.number().optional(),
  exp_max: z.coerce.number().optional(),
  coin_min: z.coerce.number().optional(),
  coin_max: z.coerce.number().optional(),
  helper: z.array(z.string()).optional(),
});

export const EditChallengeSchema = z.object({
  title: z.string({ required_error: "Judul Harus Diisi" })
    .min(1, { message: "Judul tidak boleh kosong" }),
  description: z.string()
    .min(1, { message: "Deskripsi tidak boleh kosong" }),
  exp: z.coerce
    .number({ required_error: "Exp Harus Diisi" })
    .min(0, { message: "Exp tidak boleh negatif" }),
  coin: z.coerce
    .number({ required_error: "Koin Harus Diisi" })
    .min(0, { message: "Koin tidak boleh negatif" }),
  difficulty: z.string({ required_error: "Kesulitan Harus Diisi" })
    .min(1, { message: "Kesulitan tidak boleh kosong" }),
  date_start: z.string({ required_error: "Tanggal Mulai Harus Diisi" })
    .min(1, { message: "Tanggal Mulai tidak boleh kosong" }),
  date_end: z.string({ required_error: "Tanggal Berakhir Harus Diisi" })
    .min(1, { message: "Tanggal Berakhir tidak boleh kosong" }),
  categories: z.array(z.string({
    required_error: "Harus Diisi",
    message: "Tidak boleh kosong",
  })).min(1, { message: "Harus Diisi" }),
});