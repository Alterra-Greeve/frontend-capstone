import AdminLayout from "@/layouts/AdminLayout";
import useFetch from "@/lib/hooks/useFetch";
import Pagination from "@/components/pagination";
import Download from "@/assets/icons/Export.svg"
import Plus from "@/assets/icons/plus.svg"
import Button from "@/components/Button/Button";
import TableProducts from "./TableProducts";
import NoData from '@/assets/icons/NoData.svg'
import Filter from '@/assets/icons/Filter.svg'
import FilterOutline from '@/assets/icons/FilterOutline.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatEarth from '@/assets/icons/catEarth.svg'
import CatBrains from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import Input from '@/components/Input/Input'
import SearchBar from '@/components/SearchBar/SearchBar'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./modal-products/modal";

export default function ProductsPage() {
  const navigate = useNavigate()
  const { loading, error, data } = useFetch("products", { method: 'get' });
  const [dataShow, setDataShow] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [searchName, setSearchName] = useState("")
  function handleSearch(e:any){
    setSearchName(e.target.value)
  }
  function handleInput(){

  }

  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  return (
    <>
      <AdminLayout>
        <div className="bg-primary-50 flex flex-col gap-[16px] 
        relative">
          <div className="flex justify-between pt-[24px] mx-[24px] border-b-[0.5px] pb-[16px]">
          <div className='flex gap-[4px]'>
      <SearchBar onChange={(e)=>handleSearch(e)} value={searchName}/>
      <div className='w-[40px] h-[40px] relative z-10'>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
          {isOpen? <Filter/> : <FilterOutline />}
        </div>
        {isOpen?
        <div className='absolute p-[12px] rounded-[8px] bg-neutral-50 shadow-custom'>
          <div className='flex flex-col gap-[4px] mb-[20px] text-[16px] font-[800] text-neutral-900'>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Harga</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="harga" name="harga" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="harga" name="harga" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Stok</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Stok" name="Stok" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Stok" name="Stok" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Koin</label>
              <div className='flex gap-[4px]'>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Koin" name="Koin" onChange={handleInput} placeholder='Min'/>
                <Input type='number' style='w-[100px] text-[12px] font-[500]' id="Koin" name="Koin" onChange={handleInput} placeholder='Max'/>
              </div>
            </div>
            <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
              <label>Membantu</label>
              <div className='flex flex-col gap-[12px]'>
                <div className='flex gap-[20px]'>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatMoney/>
                    </div>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatEarth/>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatBrains/>
                    </div>
                    <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                      <input type="checkbox"/>
                      <CatRecycle/>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant='primary' children='Simpan' className='w-[228px] py-[8px]'/>
        </div>
        : null
        }
      </div>
    </div>
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
