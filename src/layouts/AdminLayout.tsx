import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}