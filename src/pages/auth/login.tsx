import { RootState, useAppSelector } from "@/lib/redux";
import { Navigate } from "react-router-dom";
import AdminLogin from "@/components/login";

export default function LoginPage() {
  const { token } = useAppSelector((state: RootState) => state.auth);

  if (token) return <Navigate to="/dashboard" />

  return (
    <div className="flex w-full min-h-screen md:justify-center md:items-center p-5 md:p-0 bg-[url(@/assets/bg-auth.png)] bg-no-repeat bg-center bg-cover">
      <AdminLogin />
    </div>
  )
}