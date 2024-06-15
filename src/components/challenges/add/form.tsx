import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { EditChallengeSchema } from "@/lib/zod/challenges";
import { setNewSingleData } from "@/lib/redux/api/challenges";
import { Checkbox } from "@/components/ui/checkbox";
import ModalConfirmAdd from "./ModalConfirm";

const difficulties = [
  { id: "mudah", label: "Mudah" },
  { id: "sedang", label: "Sedang" },
  { id: "sulit", label: "Sulit" },
] as const;

interface FormEditChallengeProps {
  submitRef: React.RefObject<HTMLButtonElement>;
  file: File | null;
}

export default function FormAddChallenge({ submitRef, file }: FormEditChallengeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { data: categories } = useAppSelector((state: RootState) => state.impact);

  const form = useForm<z.infer<typeof EditChallengeSchema>>({
    resolver: zodResolver(EditChallengeSchema)
  });

  const onSubmit = (data: z.infer<typeof EditChallengeSchema>) => {
    dispatch(setNewSingleData(data));
    onOpen();
  }

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <FormProvider {...form}>
      <ModalConfirmAdd isOpen={isOpen} onClose={onClose} file={file} />

      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(data => onSubmit(data))}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Judul</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan judul challenge"
                  className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.title?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukkan deskripsi challenge"
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

        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="exp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>EXP</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan jumlah EXP"
                    className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.exp?.message}
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

          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tingkat Kesulitan</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value?.toLowerCase()}>
                    <FormControl>
                      <SelectTrigger className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent">
                        <SelectValue placeholder="Pilih Tingkat Kesulitan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {difficulties.map((item, index) => (
                        <SelectItem key={index} value={item.id}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>
                  {form.formState.errors.difficulty?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="date_start"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tanggal Mulai</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.date_start?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date_end"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tanggal Selesai</FormLabel>
                <FormControl>
                  <Input className="border border-neutral-400 focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent"
                    type="date"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.date_end?.message}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem className="w-full">
              <FormLabel>Membantu</FormLabel>
              {categories.map((item, index) => (
                <FormField key={index}
                  control={form.control}
                  name="categories"
                  render={({ field }) => (
                    <FormItem className="flex gap-3 items-center p-2 rounded-lg text-neutral-900">
                      <FormControl>
                        <Checkbox
                          checked={(field?.value ?? []).includes(item.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              form.setValue("categories", [...(field.value ?? []), item.id]);
                            } else {
                              form.setValue("categories", (field.value ?? []).filter((v) => v !== item.id));
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