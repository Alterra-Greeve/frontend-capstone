import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import Filter from "@/assets/icons/Filter.svg";
import FilterOutline from '@/assets/icons/FilterOutline.svg'
import { FormProvider, useForm } from "react-hook-form";
import { FilterDataImpactChallengeSchema } from "@/lib/zod/data-impact";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DataImpactChallengeFilterProps {
  onFilter: (data: z.infer<typeof FilterDataImpactChallengeSchema>) => void;
}

export default function DataImpactChallengeFilter({ onFilter }: DataImpactChallengeFilterProps) {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);

  const onToggle = () => setToggleOpen(!toggleOpen);
  const onClose = () => setToggleOpen(false);

  const form = useForm<z.infer<typeof FilterDataImpactChallengeSchema>>({
    resolver: zodResolver(FilterDataImpactChallengeSchema)
  });

  const onSubmit = (data: z.infer<typeof FilterDataImpactChallengeSchema>) => {
    onFilter(data);
    onClose();
  }

  return (
    <Popover open={toggleOpen}>
      <PopoverTrigger
        className="hover:bg-neutral-300 min-w-6 rounded-md transitiona-all duration-300"
        onClick={onToggle}
      >
        {toggleOpen ? <Filter /> : <FilterOutline />}
      </PopoverTrigger>
      <PopoverContent className="w-sm absolute left-6 -top-10 text-neutral-900 p-3 rounded-xl">
        <FormProvider {...form}>
          <form
            className="grid gap-3"
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tantangan"
              render={({ field }) => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Tantangan
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="mt-5 flex w-full">
              <Button type="submit" className="w-full">
                Simpan
              </Button>
            </div>
          </form>
        </FormProvider>
      </PopoverContent>
    </Popover>
  )
}