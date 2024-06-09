import { z } from "zod";

export const ChallengesFilterSchema = z.object({
  difficulty: z.array(z.string()).optional(),
  exp_min: z.number().optional(),
  exp_max: z.number().optional(),
  coin_min: z.number().optional(),
  coin_max: z.number().optional(),
  helper: z.array(z.string()).optional(),
});