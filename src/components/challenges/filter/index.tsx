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

const difficulty = [
  { id: "mudah", label: "Mudah" },
  { id: "sedang", label: "Sedang" },
  { id: "sulit", label: "Sulit" },
] as const;

const helper = [
  { id: "earth", icon: <CatEarth /> },
  { id: "money", icon: <CatMoney /> },
  { id: "brain", icon: <CatBrain /> },
  { id: "recycle", icon: <CatRecycle /> },
] as const;

export default function ChallengesFilter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ChallengesFilterSchema>>({
    resolver: zodResolver(ChallengesFilterSchema),
    defaultValues: {
      difficulty: [],
      exp_min: undefined,
      exp_max: undefined,
      coin_min: undefined,
      coin_max: undefined,
      helper: [],
    },
  });

  const onSubmit = (data: z.infer<typeof ChallengesFilterSchema>) => {
    console.log(data);
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
            <FormField
              control={form.control}
              name="difficulty"
              render={() => (
                <FormItem className="border border-neutral-200 p-3 rounded-lg">
                  <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                    Tingkat Kesulitan
                  </FormLabel>
                  {difficulty.map((item, index) => (
                    <FormField key={index}
                      control={form.control}
                      name="difficulty"
                      render={({ field }) => (
                        <FormItem className="flex gap-3 items-end p-2 rounded-lg text-neutral-900">
                          <FormControl>
                            <Checkbox
                              checked={(field?.value ?? []).includes(item.id)}
                              onCheckedChange={(checked) => {
                                const currentValue = field?.value ?? [];
                                if (checked) {
                                  form.setValue("difficulty", [...currentValue, item.id]);
                                } else {
                                  form.setValue("difficulty", currentValue.filter((v) => v !== item.id));
                                }
                              }}
                              className="border-2 border-primary-500"
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{item.label}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormItem className="border border-neutral-200 p-3 rounded-lg">
              <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
                Exp
              </FormLabel>
              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="exp_min"
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
                  name="exp_max"
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
                                  const currentValue = field?.value ?? [];
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
              <Button type="submit" className="w-full" onClick={() => setIsOpen(false)}>
                Simpan
              </Button>
            </div>
          </form>
        </FormProvider>
      </PopoverContent>
    </Popover>
  )
}