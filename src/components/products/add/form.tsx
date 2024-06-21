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
import ModalConfirmAddProduct from "@/components/products/add/ModalConfirm";

interface FormAddProductProps {
  submitRef: React.RefObject<HTMLButtonElement>;
  file: File[] | null;
}

export default function FormAddProduct({ submitRef, file }: FormAddProductProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { data: categories } = useAppSelector((state: RootState) => state.impact);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema)
  });

  const onSubmit = (data: z.infer<typeof ProductSchema>) => {
    // @ts-expect-error types not match
    dispatch(setNewProduct(data));
    onOpen();
  }

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <FormProvider {...form}>
      <ModalConfirmAddProduct isOpen={isOpen} onClose={onClose} file={file} />

      <form
        className="flex flex-col gap-[8px] w-full"
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

        <div className="flex items-center gap-[10px] text-[12px] font-[600] text-neutral-800">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Harga</FormLabel>
                <FormControl>
                  <Input
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
                  className="text-[12px] font-[600] text-neutral-800 rounded-[7px] p-[8px] resize-none border-[0.5px] border-solid  min-h-[101px] border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
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
                    <FormItem className="flex gap-[16px] items-center py-[4px] px-[8px] rounded-lg text-neutral-900">
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
                          className="border-2 border-primary-500 w-5 h-5 checked:bg-white bg-white ml-[4px]"
                        />
                      </FormControl>
                      <div className="flex items-center gap-3">
                        <img src={item.icon_url} alt={item.name} className="w-[36px] h-[36px]"/>
                        <FormLabel className="text-neutral-900 text-[16px] font-[500]">
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