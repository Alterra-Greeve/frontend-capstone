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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { editUser, getUsers, UsersProps } from "@/lib/redux/api/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import IllustrationDelete from "@/assets/icons/modal-delete.svg";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: UsersProps | undefined;
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name cannot be empty",
  }),
  username: z.string().min(1, {
    message: "Username cannot be empty",
  }),
  gender: z.string().min(1, {
    message: "Gender cannot be empty",
  }),
  email: z
    .string()
    .email({
      message: "Email must be a valid email address",
    })
    .min(1, {
      message: "Email cannot be empty",
    }),
  phone: z.string().min(1, {
    message: "Phone cannot be empty",
  }),
  address: z.string().min(1, {
    message: "Address cannot be empty",
  }),
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
      form.reset(data);
    }
  }, [data, form]);

  const dispatch = useAppDispatch();
  const { metadata } = useAppSelector((state) => state.users);

  const handleFormSubmit = useCallback(
    (formData: z.infer<typeof formSchema>) => {
      if (!formData.name || !formData.email) {
        // Example condition: ensure name and email are not empty
        console.error("Form data is invalid");
        return; // Prevent form submission if data is invalid
      }
      setUserEdited(formData);
      setAction("simpan");
    },
    []
  );

  const handleEditUsers = useCallback(async () => {
    if (data?.id && userEdited) {
      try {
        await dispatch(editUser({ userId: data.id.toString(), data: userEdited }));
        await dispatch(getUsers(metadata.current_page.toString()));
        onClose(); // Close the modal on successful edit
      } catch (error) {
        console.error("Failed to edit user:", error);
        // Optionally, handle the error state in the UI, e.g., show a notification
      }
    }
  }, [dispatch, data, userEdited, onClose]);

  const ConfirmAction = useCallback(
    ({
      dialogHead,
      dialogBody,
      trueChildren,
      falseChildren,
      trueAction,
      falseAction,
    }: {
      dialogHead: string;
      dialogBody: string;
      trueChildren: React.ReactNode;
      falseChildren: React.ReactNode;
      trueAction: () => void;
      falseAction: () => void;
    }) => (
      <DialogContent className="bg-neutral-50 flex flex-col items-center gap-8 md:rounded-2xl p-8">
        <DialogHeader className="flex flex-col gap-8 items-center">
          <IllustrationDelete />
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold leading-8 text-neutral-900">
              {dialogHead}
            </h1>
            <p className="text-neutral-900 text-base leading-5 mt-2 text-center">
              {dialogBody}
            </p>
          </div>
        </DialogHeader>
        <div className="w-full grid grid-cols-2 gap-x-6">
          <Button
            className="py-6 text-sm leading-6 font-medium rounded-lg col-span-1 "
            variant="outline_primary"
            onClick={trueAction}
          >
            {trueChildren}
          </Button>
          <Button
            className="py-6 text-sm leading-6 font-medium rounded-lg col-span-1 border border-primary-600"
            variant="primary"
            onClick={falseAction}
          >
            {falseChildren}
          </Button>
        </div>
      </DialogContent>
    ),
    []
  );

  return (
    <Dialog open={isOpen}>
      {action === "close" ? (
        <ConfirmAction
          dialogHead="Perubahan belum disimpan!"
          dialogBody="Anda telah mengubah beberapa informasi. Pastikan untuk menyimpan agar tidak kehilangan perubahan ini"
          trueAction={() => {
            onClose();
            setTimeout(() => setAction(""), 200);
          }}
          trueChildren="Keluar"
          falseAction={() => setAction("")}
          falseChildren="Tetap Mengedit"
        />
      ) : action === "simpan" ? (
        <ConfirmAction
          dialogHead="Ingin menyimpan data ini?"
          dialogBody="Perubahan dari data sebelumnya akan tersimpan"
          falseAction={() => {
            handleEditUsers();
            setTimeout(() => setAction(""), 200);
          }}
          falseChildren="Iya, Simpan"
          trueAction={() => {
            onClose();
            setAction("");
          }}
          trueChildren="Tidak"
        />
      ) : (
        <UserForm
          form={form}
          data={data}
          setAction={setAction}
          handleFormSubmit={form.handleSubmit(handleFormSubmit)}
        />
      )}
    </Dialog>
  );
}

interface UserFormData {
  avatar_url?: string;
  name?: string;
  email?: string; // Ensure this property is included
}

interface UserFormProps {
  form: any; // Ideally, specify a more detailed type
  data: UserFormData | undefined; // Allow data to be undefined
  setAction: (action: string) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function UserForm({ form, data, setAction, handleFormSubmit }: UserFormProps) {
  return (
    <DialogContent className="max-w-2xl bg-neutral-50 p-8 md:rounded-2xl">
      <DialogHeader>
        <img
          src={data?.avatar_url}
          alt="profile-image"
          className="rounded-full w-20 h-20"
        />
        <div className="flex flex-col gap-2 pt-4">
          <h5 className="font-bold text-lg leading-5">{data?.name}</h5>
          <p className="text-base leading-5 font-normal">{data?.email}</p>
        </div>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-4"
          tabIndex={0}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-800">Name</FormLabel>
                <FormControl className="flex items-center gap-3 w-full">
                  <Input
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                    className={`${
                      fieldState.error
                        ? "border-danger-500"
                        : "border-neutral-500"
                    } focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-800">Username</FormLabel>
                <Input
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  className={`${
                    fieldState.error
                      ? "border-danger-500"
                      : "border-neutral-500"
                  } focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg`}
                />
                <FormMessage />
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
                          className="radio-inner-circle"
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Laki-Laki</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          className="radio-inner-circle"
                          value="Perempuan"
                          checked={
                            field.value?.toLocaleLowerCase() == "perempuan"
                              ? true
                              : false
                          }
                        />
                      </FormControl>
                      <FormLabel className="font-semibold">Perempuan</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-800">Email</FormLabel>
                <Input
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  className={`${
                    fieldState.error
                      ? "border-danger-500"
                      : "border-neutral-500"
                  } focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg`}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-800">No.Telp</FormLabel>
                <Input
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  className={`${
                    fieldState.error
                      ? "border-danger-500"
                      : "border-neutral-500"
                  } focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg`}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="address"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-neutral-800">Alamat</FormLabel>
                <Input
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  className={`${
                    fieldState.error
                      ? "border-danger-500"
                      : "border-neutral-500"
                  } focus-visible:ring-transparent focus-visible:border-neutral-800 rounded-lg`}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="pt-4 space-x-2">
            <Button
              onClick={() => setAction("close")}
              variant="outline_primary"
              className="py-2 rounded-[8px] w-[120px]"
              type="button"
            >
              Batal
            </Button>
            <Button type="submit" className="py-2 rounded-[8px] w-[120px]">
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
