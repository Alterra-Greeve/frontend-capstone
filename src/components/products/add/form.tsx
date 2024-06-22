import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { ProductSchema } from "@/lib/zod/products";
import { setNewProduct } from "@/lib/redux/api/products";
import ModalConfirmAddProduct from "@/components/products/add/ModalConfirm";
import { InputWithError, TextAreaWithError } from "@/components/Input/Input";

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
              <InputWithError
                namespace="name"
                errors={form.formState.errors}
                {...field}
              />
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
                <InputWithError
                  type="number"
                  min={0}
                  namespace="price"
                  errors={form.formState.errors}
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Stok</FormLabel>
                <InputWithError
                  namespace="stock"
                  min={0}
                  errors={form.formState.errors}
                  type="number"
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="coin"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Koin</FormLabel>
                <InputWithError
                  namespace="coin"
                  min={0}
                  errors={form.formState.errors}
                  type="number"
                  {...field}
                />
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
              <TextAreaWithError
                namespace="description"
                errors={form.formState.errors}
                {...field}
              />
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
                          className="border-2 border-primary-500 w-[16px] h-[16px] checked:bg-white bg-white ml-[4px]"
                        />
                      </FormControl>
                      <div className="flex items-center gap-3">
                        <img src={item.icon_url} alt={item.name} className="w-[36px] h-[36px]" />
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