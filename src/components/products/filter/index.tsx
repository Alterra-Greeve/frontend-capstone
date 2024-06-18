import { useState } from "react";

import FilterIcon from "@/assets/icons/Filter.svg";
import { FormProvider, useForm } from "react-hook-form";
import { ChallengesFilterSchema } from "@/lib/zod/challenges";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CatEarth from '@/assets/icons/catEarth.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatBrain from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'

const helper = [
  { id: "mengurangi pemanasan global", icon: <CatEarth /> },
  { id: "hemat uang", icon: <CatMoney /> },
  { id: "perluas wawasan", icon: <CatBrain /> },
  { id: "mengurangi limbah", icon: <CatRecycle /> },
] as const;

export default function ChallengesProducts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ChallengesFilterSchema>>({
    resolver: zodResolver(ChallengesFilterSchema)
  });

  const onSubmit = (data: z.infer<typeof ChallengesFilterSchema>) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        className="hover:bg-neutral-300 min-w-6 rounded-md transitiona-all duration-300"
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
            <FormItem className="border border-neutral-200 p-3 rounded-lg">
              <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                Harga
              </FormLabel>
              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="exp_min"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        type="number"
                        className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                        placeholder={"Min"}
                        {...field}
                      />
                    </FormControl>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exp_max"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        type="number" inputMode="numeric"
                        pattern="[0-9]*"
                        className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                        placeholder={"Max"}
                        {...field}
                      />
                    </FormControl>
                  )}
                />
              </div>
            </FormItem>

            <FormItem className="border border-neutral-200 p-3 rounded-lg">
              <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                Stok
              </FormLabel>
              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="exp_min"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        type="number"
                        className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                        placeholder={"Min"}
                        {...field}
                      />
                    </FormControl>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exp_max"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        type="number" inputMode="numeric"
                        pattern="[0-9]*"
                        className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                        placeholder={"Max"}
                        {...field}
                      />
                    </FormControl>
                  )}
                />
              </div>
            </FormItem>

            <FormItem className="border border-neutral-200 p-3 rounded-lg">
              <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                Koin
              </FormLabel>
              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="coin_min"
                  render={({ field }) => (
                    <Input
                      type="number"
                      className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                      placeholder={"Min"}
                      {...field}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="coin_max"
                  render={({ field }) => (
                    <Input
                      type="number"
                      className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
                      placeholder={"Max"}
                      {...field}
                    />
                  )}
                />
              </div>
            </FormItem>

            <FormField
              control={form.control}
              name="helper"
              render={() => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Membantu
                  </FormLabel>
                  <div className="grid grid-cols-2">
                    {helper.map((item, index) => (
                      <FormField key={index}
                        control={form.control}
                        name="helper"
                        render={({ field }) => (
                          <FormItem className="flex gap-3 items-center p-2 rounded-lg text-neutral-900">
                            <FormControl>
                              <Checkbox
                                checked={(field?.value ?? []).includes(item.id)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field?.value ?? undefined;
                                  if (currentValue === undefined) return form.setValue("helper", [item.id]);
                                  if (checked) {
                                    form.setValue("helper", [...currentValue, item.id]);
                                  } else {
                                    form.setValue("helper", currentValue.filter((v) => v !== item.id));
                                  }
                                }}
                                className="border-2 border-primary-500"
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.icon}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
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