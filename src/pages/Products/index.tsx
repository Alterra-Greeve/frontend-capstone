import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Download from "@/assets/icons/Export.svg"
import Plus from "@/assets/icons/plus.svg"
import NoData from '@/assets/icons/NoData.svg'
import Filter from '@/assets/icons/Filter.svg'
import FilterOutline from '@/assets/icons/FilterOutline.svg'
import CatMoney from '@/assets/icons/catMoney.svg'
import CatEarth from '@/assets/icons/catEarth.svg'
import CatBrain from '@/assets/icons/catBrains.svg'
import CatRecycle from '@/assets/icons/catRecycle.svg'
import CloseSquare from '@/assets/icons/CloseSquare.svg'
import AdminLayout from "@/layouts/AdminLayout";
import SearchBar from '@/components/SearchBar/SearchBar'
import Input from '@/components/Input/Input'
import Button from "@/components/Button/Button";
import useFetch from "@/lib/hooks/useFetch";
import TableProducts from "./TableProducts";
import Pagination from "@/components/pagination";
import Modal from "./modal-products/modal";

export default function ProductsPage() {
  const navigate = useNavigate()
  const { loading, error, data } = useFetch("products", { method: 'get' });
  const [dataShow, setDataShow] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [searchName, setSearchName] = useState("")
  const [filterValue, setFilterValue] = useState<any>({
    category: []
  });
  function handleSearch(e: any) {
    setSearchName(e.target.value)
  }
  function handleFilterInput(e: any) {
    const { value, name } = e.target;
    setFilterValue({...filterValue, [name]: value})
  }
  function handleFilterCheck(e: any) {
    const { checked, value } = e.target;
    if (checked) {
        setFilterValue({ ...filterValue, category: [...filterValue.category, value] })
    } else {
      setFilterValue({ ...filterValue, category: filterValue.category.filter((item: any) => item !== value) })
    }
  }
  console.log(filterValue)
  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>{error.message}</AdminLayout>;
  return (
    <>
      <AdminLayout>
        <div className="bg-primary-50 flex flex-col gap-[16px] 
        relative">
          <div className="flex justify-between pt-[24px] mx-[24px] border-b-[0.5px] pb-[16px]">
            <div className='flex gap-[4px]'>
              <SearchBar onChange={(e) => handleSearch(e)} value={searchName} />
              <div className='w-[40px] h-[40px] relative z-10'>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
                  {isOpen ? <Filter /> : <FilterOutline />}
                </div>
                {isOpen ?
                  <div className='absolute p-[12px] rounded-[8px] bg-neutral-50 shadow-custom'>
                    <div className='flex flex-col gap-[4px] mb-[20px] text-[16px] font-[800] text-neutral-900'>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Harga</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minPrice" name="minPrice" onChange={(e) => handleFilterInput(e)} placeholder='Min' />
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxPrice" name="maxPrice" onChange={(e) => handleFilterInput(e)} placeholder='Max' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Stok</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minStock" name="minStock" onChange={(e) => handleFilterInput(e)} placeholder='Min' />
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxStock" name="maxStock" onChange={(e) => handleFilterInput(e)} placeholder='Max' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Koin</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minCoin" name="minCoin" onChange={(e) => handleFilterInput(e)} placeholder='Min' />
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxCoin" name="maxCoin" onChange={(e) => handleFilterInput(e)} placeholder='Max' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Membantu</label>
                        <div className='flex flex-col gap-[12px]'>
                          <div className='flex gap-[20px]'>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="83808762-e2b8-4b34-a1eb-0ed8d4fda3dd" 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatMoney />
                            </div>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="b5d07366-3b31-4011-95e3-34735b0b61f8" 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatEarth />
                            </div>
                          </div>
                          <div className='flex gap-[20px]'>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="e8e714bd-c34e-4278-980c-39bd1f55b5fb" 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatBrain />
                            </div>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="7d34a5fa-e2cf-466d-9f01-d731f6967082" 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatRecycle />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant='primary' children='Simpan' className='w-[228px] py-[8px]' />
                  </div>
                  : null
                }
              </div>
            </div>
            <div className="flex gap-[8px]">
              <Button variant="secondary" className='p-[8px]' icon={<Download />}>Export</Button>
              <Button variant="primary" className='p-[8px]' icon={<Plus />} onClick={() => navigate("add-products")}>Tambahkan Produk Baru</Button>
            </div>
          </div>
          {/* filter on */}
          <div className="flex gap-[12px] mx-[24px]">
            <div className="flex gap-[4px] bg-neutral-50 rounded-[8px] items-center">
              <div className="py-[5px] px-[10px] text-neutral-900 text-[16px] font-[400]
              rounded-[8px] bg-secondary-500">Harga</div>
              <div className="flex gap-[4px] items-center py-[3px] px-[4px]">
                <span className="text-neutral-500 font-[400] text-[12px]">20000 - 25000</span>
                <CloseSquare/>
              </div>
            </div>
          </div>
          {/* filter on */}
          {data ?
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
              <NoData />
              <h1 className="text-neutral-900 text-[28px] font-[700] text-center">Belum ada data yang dimasukkan</h1>
            </div>
          }
        </div>
      </AdminLayout>
      <Modal />
    </>
  )
}
