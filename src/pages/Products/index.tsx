import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";

export default function ProductsPage() {
  const { loading, error } = useFetch("products", { method: 'get' });

  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;

  return (
    <AdminLayout>
      products
    </AdminLayout>
  )
}
