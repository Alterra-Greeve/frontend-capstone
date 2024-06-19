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

export const ProductSchema = z.object({
  name: z.string({
    required_error: "Nama produk wajib diisi"
  }).min(1, {
    message: "Nama produk wajib diisi"
  }),
  price: z.coerce.number({
    required_error: "Harga produk wajib diisi"
  }).min(1, {
    message: "Harga produk wajib diisi"
  }),
  stock: z.coerce.number({
    required_error: "Stok produk wajib diisi"
  }).min(1, {
    message: "Stok produk wajib diisi"
  }),
  coin: z.coerce.number({
    required_error: "Koin produk wajib diisi"
  }).min(1, {
    message: "Koin produk wajib diisi"
  }),
  description: z.string({
    required_error: "Deskripsi produk wajib diisi"
  }).min(1, {
    message: "Deskripsi produk wajib diisi"
  }),
  category: z.array(z.string({
    required_error: "Kategori produk wajib diisi"
  }))
});