import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";
import MainProducts from "./MainProducts";
import SearchProducts from "./SearchProducts";
import AddProducts from "./AddProducts";
import PaginationProducts from "./PaginationProducts";

export default function ProductsPage() {
  const { loading, error, data } = useFetch("products", { method: 'get' });

  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  // console.log(data.data[0])
  return (
    <AdminLayout>
      <div className="bg-[#F5F5F5] p-[24px] flex flex-col gap-[16px]">
        <div className="flex justify-between">
          <SearchProducts/>
          <AddProducts/>
        </div>
        <hr />
        <MainProducts/>
        <PaginationProducts/>
      </div>
    </AdminLayout>
  )
}
