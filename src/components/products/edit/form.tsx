import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { ProductSchema } from "@/lib/zod/products";
import { setNewProduct } from "@/lib/redux/api/products";
import ModalConfirmEditProduct from "./ModalConfirm";

interface FormEditProductProps {
  submitRef: React.RefObject<HTMLButtonElement>;
  file: File[] | null;
}

export default function FormEditProduct({ submitRef, file }: FormEditProductProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { singleData: product } = useAppSelector((state: RootState) => state.products);
  const { data: categories } = useAppSelector((state: RootState) => state.impact);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: product?.name,
      price: product?.price,
      stock: product?.stock,
      coin: product?.coin,
      description: product?.description,
      category: product?.category
    }
  });

  const onSubmit = (data: z.infer<typeof ProductSchema>) => {
    // @ts-expect-error types not match
    dispatch(setNewProduct({ ...data, image_url: product?.image_url }));
    onOpen();
  }

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <FormProvider {...form}>
      <ModalConfirmEditProduct isOpen={isOpen} onClose={onClose} file={file} />

      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(data => onSubmit(data))}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Product</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama Produk..."
                  className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.name?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Harga</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan jumlah Harga"
                    className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.price?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Stok</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan jumlah Stok"
                    className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.price?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coin"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Koin</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan jumlah koin"
                    className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.coin?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukkan deskripsi products..."
                  className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent min-h-44"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.description?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={() => (
            <FormItem className="w-full">
              <div className="flex items-center gap-2">
                <FormLabel>Membantu</FormLabel>
                <FormMessage>
                  {form.formState.errors.category?.message}
                </FormMessage>
              </div>
              {categories.map((item, index) => (
                <FormField key={index}
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex gap-3 items-center p-2 rounded-lg text-neutral-900">
                      <FormControl>
                        <Checkbox
                          checked={(field?.value ?? []).includes(item.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              form.setValue("category", [...(field.value ?? []), item.id]);
                            } else {
                              form.setValue("category", (field.value ?? []).filter((v) => v !== item.id));
                            }
                          }}
                          className="border-2 border-primary-500 w-5 h-5 checked:bg-white bg-white"
                        />
                      </FormControl>
                      <div className="flex items-center gap-3">
                        <img src={item.icon_url} alt={item.name} />
                        <FormLabel className="font-normal text-md">
                          {item.name}
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </FormItem>
          )}
        />
        <button ref={submitRef} type="submit" hidden />
      </form>
    </FormProvider>
  )
}