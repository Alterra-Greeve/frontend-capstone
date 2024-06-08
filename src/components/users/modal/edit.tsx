import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UsersProps } from "@/lib/redux/api/users";
import { UsersSchema } from "@/lib/zod/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: UsersProps | undefined;
}

export default function EditUserModal({ isOpen, onClose, data }: EditUserModalProps) {
  const form = useForm<z.infer<typeof UsersSchema>>({
    resolver: zodResolver(UsersSchema),
    defaultValues: data || {},
  });

  const handleFormSubmit = (formData: z.infer<typeof UsersSchema>) => {
    console.log(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-neutral-50 p-10 py-8 md:rounded-2xl">
        <DialogHeader>
          <img
            src={data?.avatar_url}
            alt="profile-image"
            className="rounded-full w-20 h-20"
          />
          <div className="flex flex-col pt-4">
            <h5 className="font-bold text-lg">{data?.name}</h5>
            <p>{data?.email}</p>
          </div>
        </DialogHeader>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">Nama</FormLabel>
                  <div className="flex items-center gap-3 w-full">
                    <Input
                      {...field}
                      defaultValue={data?.name}
                      className="border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                    />
                    <Input
                      className="border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                    />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">Username</FormLabel>
                  <Input
                    {...field}
                    defaultValue={data?.username}
                    className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                  />
                </FormItem>
              )}
            />
            <FormField
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center gap-5"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="laki-laki"
                            className="border-2 border-primary-500 checked:bg-primary-500 checked:border-primary-500"
                          />
                        </FormControl>
                        <FormLabel className="font-semibold">
                          Laki-Laki
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Perempuan" />
                        </FormControl>
                        <FormLabel className="font-semibold">
                          Perempuan
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">Email</FormLabel>
                  <Input
                    {...field}
                    defaultValue={data?.email}
                    className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                  />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">No.Telp</FormLabel>
                  <Input
                    {...field}
                    defaultValue={data?.phone}
                    className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                  />
                </FormItem>
              )}
            />
            <FormField
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-800">Alamat</FormLabel>
                  <Input
                    {...field}
                    defaultValue={data?.address}
                    className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800"
                  />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <Button onClick={onClose} variant={"outline_primary"} className="px-12 rounded-lg">
                Batal
              </Button>
              <Button type="submit" className="px-12 rounded-lg">
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
