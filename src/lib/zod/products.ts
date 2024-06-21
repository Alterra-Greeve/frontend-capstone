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
    required_error: "Masukkan nama produk"
  }).min(1, {
    message: "Masukkan nama produk"
  }),
  price: z.coerce.number({
    required_error: "Masukkan jumlah harga"
  }).min(1, {
    message: "Masukkan jumlah harga"
  }),
  stock: z.coerce.number({
    required_error: "Masukkan jumlah stok"
  }).min(1, {
    message: "Masukkan jumlah stok"
  }),
  coin: z.coerce.number({
    required_error: "Masukkan jumlah koin"
  }).min(1, {
    message: "Masukkan jumlah koin"
  }),
  description: z.string({
    required_error: "Masukkan isi deskripsi"
  }).min(1, {
    message: "Masukkan isi deskripsi"
  }),
  category: z.array(z.string({
    required_error: "Kategori produk wajib diisi"
  }))
});