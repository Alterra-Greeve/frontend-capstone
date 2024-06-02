import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { signIn } from "@/lib/redux/api/auth";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { isLoading, isError, error, token } = useAppSelector((state: RootState) => state.auth);

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(signIn(data));
  }

  if (isError) return <div>{error}</div>

  return (
    <div className="max-w-md mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" value={data.password} onChange={handleChange} />
        </div>
        <Button type="submit" disabled={isLoading}>Login</Button>
      </form>
      {token && <div>{token}</div>}
    </div>
  )
}