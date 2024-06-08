"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch } from "@/lib/redux";
import { editUser, getUsers, UsersProps } from "@/lib/redux/api/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: UsersProps | undefined;
}
const formSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  gender: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export default function EditUserModal({
  isOpen,
  onClose,
  data,
}: EditUserModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
    },
  });
  const [action, setAction] = useState("");
  const [userEdited, setUserEdited] = useState<any>();

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        username: data.username,
        gender: data.gender,
        email: data.email,
        phone: data.phone,
        address: data.address,
      });
    }
  }, [data, form]);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (formData: z.infer<typeof formSchema>) => {
    setUserEdited({
      name: formData.name,
      address: formData.address,
      gender: formData.gender,
      phone: formData.phone,
    });
  };

  const handleEditUsers = async () => {
    await dispatch(
      editUser({
        userId: data?.id,
        data: {
          name: userEdited.name,
          address: userEdited.address,
          gender: userEdited.gender,
          phone: userEdited.phone,
        },
      })
    );
    await dispatch(getUsers());
  };

  function ConfirmAction({
    dialogHead,
    dialogBody,
    trueChildern,
    falseChildern,
    trueAction,
    falseAction,
  }: {
    dialogHead: string;
    dialogBody: string;
    trueAction?: any;
    falseAction?: any;
    trueChildern: string;
    falseChildern: string;
  }) {
    return (
      <DialogContent className="bg-neutral-50 flex flex-col items-center md:rounded-2xl">
        <IllustrationDelete />
        <DialogHeader className="items-center pt-6">
          <h1 className="text-2xl font-bold text-neutral-900">{dialogHead}</h1>
          <p className="text-neutral-900 text-lg mt-2 text-center">
            {dialogBody}
          </p>
        </DialogHeader>
        <DialogFooter className="px-5 pt-5">
          <div className="w-full flex justify-center items-center gap-5">
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"outline_primary"}
              onClick={trueAction}
            >
              {trueChildern}
            </Button>
            <Button
              className="min-w-full py-6 rounded-lg"
              variant={"primary"}
              onClick={falseAction}
            >
              {falseChildern}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    );
  }

  return (
    <Dialog open={isOpen}>
      {action == "close" ? (
        <ConfirmAction
          dialogHead="Perubahan belum disimpan!"
          dialogBody="Anda telah mengubah beberapa informasi. Pastikan untuk menyimpan agar tidak kehilangan perubahan ini"
          trueAction={() => {
            onClose();
            setTimeout(() => {
              setAction("");
            }, 200);
          }}
          trueChildern="Keluar"
          falseAction={() => setAction("")}
          falseChildern="Tetap Mengedit"
        />
      ) : action == "simpan" ? (
        <ConfirmAction
          dialogHead="Ingin menyimpan data ini?"
          dialogBody="Perubahan dari data sebelumnya akan tersimpan"
          falseAction={() => {
            onClose();
            handleEditUsers();
            setTimeout(() => {
              setAction("");
            }, 200);
          }}
          falseChildern="Iya"
          trueAction={() => {
            onClose();
            setAction("");
          }}
          trueChildern="Tidak"
        />
      ) : (
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4"
              tabIndex={0}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-800">Name</FormLabel>
                    <FormControl className="flex items-center gap-3 w-full">
                      <Input
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        className="border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                      />
                    </FormControl>
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
                      value={field.value}
                      onChange={field.onChange}
                      className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg"
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-800">Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex items-center gap-5"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              checked={
                                field.value?.toLocaleLowerCase() == "laki-laki"
                                  ? true
                                  : false
                              }
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
                            <RadioGroupItem
                              className="border-2 border-primary-500 checked:bg-primary-500 checked:border-primary-500"
                              value="Perempuan"
                              checked={
                                field.value?.toLocaleLowerCase() == "perempuan"
                                  ? true
                                  : false
                              }
                            />
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
                      value={field.value}
                      onChange={field.onChange}
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
                      value={field.value}
                      onChange={field.onChange}
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
                      value={field.value}
                      onChange={field.onChange}
                      className="min-w-full border-neutral-500 focus-visible:ring-transparent focus-visible:border-neutral-800"
                    />
                  </FormItem>
                )}
              />
              <DialogFooter className="pt-4">
                <Button
                  onClick={() => setAction("close")}
                  variant={"outline_primary"}
                  className="px-12 rounded-lg"
                  type="button"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="px-12 rounded-lg"
                  onClick={() => {
                    setTimeout(() => {
                      setAction("simpan");
                    }, 200);
                  }}
                >
                  Simpan
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      )}
    </Dialog>
  );
}
