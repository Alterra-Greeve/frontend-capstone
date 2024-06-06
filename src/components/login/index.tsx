import FormLogin from "./form";
import Logo from "@/assets/logo/landscape-white.png";

export default function AdminLogin() {
  return (
    <div className="flex flex-col gap-10 items-center w-full md:w-[402px]">
      <img src={Logo} alt="logo greeve" className="w-40 md:w-auto" />

      <div className="bg-white rounded-xl p-[28px] w-full">
        <FormLogin />
      </div>
    </div>
  )
}