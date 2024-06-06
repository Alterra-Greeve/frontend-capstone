import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email tidak valid! contoh johndoe123@gmail.com"
  }),
  password: z.string(),
  isChecked: z.boolean().optional(),
});
