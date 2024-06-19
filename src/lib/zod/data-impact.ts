import { z } from "zod";

export const FilterDataImpactChallengeSchema = z.object({
  username: z.string().optional(),
  tantangan: z.string().optional(),
});

export const FilterDataImpactOrderSchema = z.object({
  username: z.string().optional(),
  productName: z.string().optional(),
});