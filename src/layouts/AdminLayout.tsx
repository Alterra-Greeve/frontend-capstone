import useAuth from "@/lib/hooks/useAuth"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();

  if (session === "unauthenticated") return <h1>Unauthorized</h1>

  return (
    <div>
      {children}
    </div>
  )
}