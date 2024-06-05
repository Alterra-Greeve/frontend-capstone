import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";
import SearchProducts from "./SearchProducts";
import Pagination from "@/components/pagination";
import download from "@/assets/icons/Export.svg"
import plus from "@/assets/icons/plus.svg"
import Button from "@/components/Button/Button"
import { Link } from "react-router-dom";
import Modal from "./modal";
import TableProducts from "./TableProducts";

export default function ProductsPage() {
  const { loading, error, data } = useFetch("products", { method: 'get' });
  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  return (
    <>
      <AdminLayout>
        <div className="bg-[#F5F5F5] flex flex-col gap-[16px] h-[calc(100vh-90px)]
        relative overflow-auto">
          <div className="flex justify-between pt-[24px] mx-[24px] border-b-[0.5px] pb-[16px]">
            <SearchProducts/>
            <div className="flex gap-[8px]">
              <Button variant="secondary" icon={download}>Export</Button>
              <Link to={"add-products"}>
                <Button variant="primary" icon={plus}>Tambahkan Produk Baru</Button>
              </Link>
          </div>
          </div>
          {/* <hr /> */}
          <TableProducts data={data}/>
          <Pagination 
            dataLength={41}
            amouthDataDisplayed={10}
            className={"absolute bottom-0"}
            setDataShow={(event: { start: number; end: number }) => {
            console.log(`Start : ${event.start} , end : ${event.end}`);
          }}/>
        </div>
      </AdminLayout>
      {/* <Modal/> */}
    </>
  )
}
