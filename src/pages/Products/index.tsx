import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";
import MainProducts from "./MainProducts";
import SearchProducts from "./SearchProducts";
import Pagination from "@/components/pagination";
import download from "@/assets/icons/Export.svg"
import plus from "@/assets/icons/plus.svg"
import Button from "@/components/Button/Button"
import { Link } from "react-router-dom";
import Modal from "./modal";

export default function ProductsPage() {
  const { loading, error, data } = useFetch("products", { method: 'get' });
  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  return (
    <>
      <AdminLayout>
        <div className="bg-[#F5F5F5] p-[24px] flex flex-col gap-[16px] h-[calc(100vh-90px)]
        relative">
          <div className="flex justify-between">
            <SearchProducts/>
            <div className="flex gap-[8px]">
              <Button variant="secondary" icon={download}>Export</Button>
              <Link to={"add-products"}>
                <Button variant="primary" icon={plus}>Tambahkan Produk Baru</Button>
              </Link>
          </div>
          </div>
          <hr />
          <MainProducts data={data}/>
          {/* <Pagination 
            dataLength={41}
            amouthDataDisplayed={10}
            className={"absolute bottom-0"}
            setDataShow={(event: { start: number; end: number }) => {
            console.log(`Start : ${event.start} , end : ${event.end}`);
          }}/> */}
        </div>
      </AdminLayout>
      <Modal/>
    </>
  )
}
