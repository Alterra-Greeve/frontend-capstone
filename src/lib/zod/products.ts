import { z } from "zod";

export const FilterProductSchema = z.object({
  harga_min: z.coerce.number().optional(),
  harga_max: z.coerce.number().optional(),
  stok_min: z.coerce.number().optional(),
  stok_max: z.coerce.number().optional(),
  koin_min: z.coerce.number().optional(),
  koin_max: z.coerce.number().optional(),
  category: z.array(z.string()).optional(),
});