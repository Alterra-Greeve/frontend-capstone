import useAuth from "../lib/hooks/useAuth"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, session } = useAuth();

  if (isLoading) return <h1>Loading...</h1>

  if (session === "unauthenticated") return <h1>Unauthorized</h1>

  return (
    <div>
      {children}
    </div>
  )
}