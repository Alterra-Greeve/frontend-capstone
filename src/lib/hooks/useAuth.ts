import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [session, setSession] = useState<"authenticated" | "unauthenticated">("unauthenticated");

  useEffect(() => {
    const token = localStorage.getItem("greeve-token");
    setSession(token ? "authenticated" : "unauthenticated");
    setIsLoading(false);
  }, []);

  return { isLoading, session };
}
