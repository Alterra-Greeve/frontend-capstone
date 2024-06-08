import { useState } from "react";
import { z } from "zod";
import { useAppDispatch } from "@/lib/redux";
import { filteredUsers } from "@/lib/redux/api/users";
import { FilterUserSchema } from "@/lib/zod/users";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import FilterIcon from "@/assets/icons/Filter.svg";

import { FilterInputField, FilterInputCheckbox } from "@/components/users/filter/input";

const gender = [
  { id: "laki-laki", label: "Laki-laki" },
  { id: "perempuan", label: "Perempuan" },
] as const;

const membership = [
  { id: 'iya', label: 'Iya' },
  { id: 'tidak', label: 'Tidak' }
] as const;

export default function UsersFilter() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof FilterUserSchema>>({
    resolver: zodResolver(FilterUserSchema),
    defaultValues: {
      name: "",
      username: "",
      gender: "",
      membership: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FilterUserSchema>) => {
    dispatch(filteredUsers(data));
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        className="hover:bg-slate-300 min-w-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterIcon />
      </PopoverTrigger>

      <PopoverContent className="w-sm absolute left-6 -top-10 text-neutral-900 p-3 rounded-xl">
        <FormProvider {...form}>
          <form
            className="grid gap-3"
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FilterInputField label="Name" placeholder="Ex: Orion" {...field} />
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FilterInputField label="Username" placeholder="Ex: Weassly..." {...field} />
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={() => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Gender
                  </FormLabel>
                  <div className="flex flex-col gap-3">
                    {gender.map((item, index) => (
                      <FormField key={index}
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FilterInputCheckbox id={item.id} label={item.label} field={field} />
                        )}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="membership"
              render={() => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Membership
                  </FormLabel>
                  <div className="flex flex-col gap-3">
                    {membership.map((item, index) => (
                      <FormField key={index}
                        control={form.control}
                        name="membership"
                        render={({ field }) => (
                          <FilterInputCheckbox id={item.id} label={item.label} field={field} />
                        )}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />

            <div className="mt-5 flex w-full">
              <Button type="submit" className="w-full" onClick={() => setIsOpen(false)}>
                Simpan
              </Button>
            </div>
          </form>
        </FormProvider>
      </PopoverContent>
    </Popover>
  );
}