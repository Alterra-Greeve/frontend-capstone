import { useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { signIn } from "@/lib/redux/api/auth";
import { LoginSchema } from "@/lib/zod/login";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import InputWithIcon from "@/components/Input/InputWithIcon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import EyeShow from "@/assets/icons/eye-show.svg";
import EyeHide from "@/assets/icons/eye-hide.svg";
import Mail from "@/assets/icons/mail.svg";
import Lock from "@/assets/icons/lock.svg";
import Danger from "@/assets/icons/danger.svg";

export default function FormLogin() {
  const dispatch = useAppDispatch();
  const { isLoading, error, isError } = useAppSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "", password: "", isChecked: false
    },
  });

  const onLogin = async (data: z.infer<typeof LoginSchema>) => {
    await dispatch(signIn({
      email: data.email, password: data.password
    }));
  }

  return (
    <Form {...form}>
      {isError && (
        <div className="flex items-center gap-2 bg-danger-100 border border-danger-500 p-2 rounded-lg mb-4">
          <Danger />
          <small className="text-neutral-900 font-medium">
            {error === "404"
              ? "Email atau password salah! Silakan cek kembali."
              : "Terjadi kesalahan saat login. Silakan coba lagi."
            }
          </small>
        </div>
      )}

      <form onSubmit={form.handleSubmit(data => onLogin(data))} className="flex flex-col gap-10">
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-500">Email</FormLabel>
                <InputWithIcon leftIcon={<Mail />} placeholder="Masukkan Email Anda"
                  className={form.formState.errors.email ? 'border-danger-500' : ''} {...field} />
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-500">Password</FormLabel>
                <InputWithIcon
                  leftIcon={<Lock />}
                  rightIcon={showPassword ? <EyeShow /> : <EyeHide />}
                  toggleShowPassword={toggleShowPassword}
                  placeholder="Masukkan Password Anda"
                  type={showPassword ? "text" : "password"}
                  className={form.formState.errors.password ? 'border-danger-500' : ''}
                  {...field}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isChecked"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-primary-500 border-2"
                  />
                </FormControl>
                <FormLabel className="text-primary-500">
                  Ingatkan Saya
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="py-6 rounded-lg" disabled={isLoading}>
          Masuk
        </Button>
      </form>
    </Form>
  )
}