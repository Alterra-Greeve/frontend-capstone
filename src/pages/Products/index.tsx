import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";
import SearchProducts from "./SearchProducts";
import Pagination from "@/components/pagination";
import Download from "@/assets/icons/Export.svg"
import Plus from "@/assets/icons/plus.svg"
import Button from "@/components/Button/Button";
import TableProducts from "./TableProducts";
import NoData from '@/assets/icons/NoData.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";

export default function ProductsPage() {
  const { loading, error, data } = useFetch("products", { method: 'get' });
  const [dataShow, setDataShow] = useState({})
  const navigate = useNavigate()
  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  return (
    <>
      <AdminLayout>
        <div className="bg-primary-50 flex flex-col gap-[16px] 
        relative">
          <div className="flex justify-between pt-[24px] mx-[24px] border-b-[0.5px] pb-[16px]">
            <SearchProducts />
            <div className="flex gap-[8px]">
              <Button variant="secondary" className='p-[8px]' icon={<Download/>}>Export</Button>
              <Button variant="primary" className='p-[8px]' icon={<Plus/>} onClick={() => navigate("add-products")}>Tambahkan Produk Baru</Button>
          </div>
          </div>
          {data? 
            <>
              <TableProducts data={data} dataShow={dataShow} /> 
              <div className="mx-[24px]">
                <Pagination
                  // @ts-expect-error data is type unknown
                  dataLength={data.data.length}
                  amouthDataDisplayed={10}
                  setDataShow={(event: { start: number; end: number }) => {
                    setDataShow({ Start: event.start, end: event.end });
                  }} />
              </div>
            </>
            : 
            <div className="flex flex-col justify-center items-center mx-[24px] h-[78vh]">
              <NoData/>
              <h1 className="text-neutral-900 text-[28px] font-[700] text-center">Belum ada data yang dimasukkan</h1>
            </div>
          }
        </div>
      </AdminLayout>
      <Modal/>
    </>
  )
}
