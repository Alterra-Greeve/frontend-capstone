import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please type your name.",
    })
    .min(3, {
      message: "Name must be at least 3 characters.",
    }),
  email: z.string({
    required_error: "Please select a gender.",
  }),
  message: z
    .string({
      required_error: "Please type your complaint.",
    })
    .min(10, {
      message: "Complaint must be at least 10 characters.",
    })
    .max(160, {
      message: "Complaint must not be longer than 30 characters.",
    }),
});

const GetInTouchSection = () => {
  const navigate = useNavigate();
  const onHandleSend = (userAppointment: unknown) => {
    console.log("Response:", JSON.stringify(userAppointment));
    navigate(0);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: unknown) {
    onHandleSend(data);
  }

  return (
    <section className="bg-[#FFFFFF] py-[60px] w-auto flex flex-col justify-center items-center gap-[40px]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-neutral-900 text-[40px] font-bold text-center">Get in touch</h3>
        <p className="text-neutral-600 text-[24px] font-medium text-center max-w-[1027px]">
          Butuh bantuan? Punya pertanyaan? Ingin berkolaborasi? Jangan ragu untuk menghubungi kami! Tim kami siap membantu Anda dengan segala kebutuhan Anda.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[32px] py-[28px] px-[40px] w-[618px] h-[467px] bg-neutral-50 shadow-lg mx-[32px]">
        <p className="text-neutral-900 text-[16px] font-semibold">Hubungi Kami</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-[32px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className=" w-full h-[40px] bg-neutral-100 rounded-[10px]" placeholder="Nama Lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="w-full h-[40px] bg-neutral-100 rounded-[10px]" type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Pesan kamu" className="resize-none w-full h-[141px] bg-neutral-100 rounded-[10px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex mb-[32px] justify-start">
              <Button className="w-[128px] h-[40px] p-[8px] bg-primary-500 hover:bg-primary-600" type="submit">
                Send
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default GetInTouchSection;
