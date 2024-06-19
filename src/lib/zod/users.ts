import { z } from "zod";

export const FilterUserSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  membership: z.boolean().optional(),
  gender: z.string().optional(),
});

export const UsersSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  avatar_url: z.string().optional(),
  gender: z.string(),
  membership: z.string(),
});