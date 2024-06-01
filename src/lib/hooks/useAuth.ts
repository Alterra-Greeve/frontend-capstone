import { useAppSelector } from "@/lib/redux";

export default function useAuth() {
  const session = useAppSelector((state) => state.auth.session);
  return { session };
}