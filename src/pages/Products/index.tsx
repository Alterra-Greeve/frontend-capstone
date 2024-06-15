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
import CatMoneyMed from '@/assets/icons/catMoneyMed.svg'
import CatEarthMed from '@/assets/icons/catEarthMed.svg'
import CatBrainMed from '@/assets/icons/catBrainsMed.svg'
import CatRecycleMed from '@/assets/icons/catRecycleMid.svg'
import Filtered from '@/components/Filter/Filter'
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
  const [toggleOpen, setToggleOpen] = useState(false)
  const [searchName, setSearchName] = useState("")  
  const [isFiltered, setIsFiltered] = useState(false)
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
  // category bisa diakalin jadi arrCategory/uncontrolled component.
  // karena kalo dibikin filterValue {category: [],} isFilterednya ngedetect si 
  // filterValue.category terus terusan jadi kaya ada bug white space gitu
  function handleSaveFilter(){
    setToggleOpen(!toggleOpen)
    if(filterValue){
      setIsFiltered(true)
    }else{
      setIsFiltered(false)
    }
  }

  // console.log(filterValue)
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
                <div onClick={() => setToggleOpen(!toggleOpen)} className='cursor-pointer'>
                  {toggleOpen ? <Filter /> : <FilterOutline />}
                </div>
                {toggleOpen ?
                  <div className='absolute p-[12px] rounded-[8px] bg-neutral-50 shadow-custom'>
                    <div className='flex flex-col gap-[4px] mb-[20px] text-[16px] font-[800] text-neutral-900'>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Harga</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minPrice" name="minPrice" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Min' value={filterValue?.minPrice}/>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxPrice" name="maxPrice" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Max' value={filterValue?.maxPrice}/>
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Stok</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minStock" name="minStock" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Min' value={filterValue?.minStock}/>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxStock" name="maxStock" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Max' value={filterValue?.maxStock}/>
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Koin</label>
                        <div className='flex gap-[4px]'>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="minCoin" name="minCoin" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Min' value={filterValue?.minCoin}/>
                          <Input type='number' style='w-[100px] text-[12px] font-[500]' id="maxCoin" name="maxCoin" 
                          onChange={(e) => handleFilterInput(e)} placeholder='Max' value={filterValue?.maxCoin}/>
                        </div>
                      </div>
                      <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                        <label>Membantu</label>
                        <div className='flex flex-col gap-[12px]'>
                          <div className='flex gap-[20px]'>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="83808762-e2b8-4b34-a1eb-0ed8d4fda3dd" checked={filterValue?.category.includes("83808762-e2b8-4b34-a1eb-0ed8d4fda3dd")}
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatMoneyMed />
                            </div>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="b5d07366-3b31-4011-95e3-34735b0b61f8" checked={filterValue?.category.includes("b5d07366-3b31-4011-95e3-34735b0b61f8")} 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatEarthMed />
                            </div>
                          </div>
                          <div className='flex gap-[20px]'>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="e8e714bd-c34e-4278-980c-39bd1f55b5fb" checked={filterValue?.category.includes("e8e714bd-c34e-4278-980c-39bd1f55b5fb")} 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatBrainMed />
                            </div>
                            <div className='flex gap-[12px] items-center justify-center py-[4px] px-[12px]'>
                              <input type="checkbox" value="7d34a5fa-e2cf-466d-9f01-d731f6967082" checked={filterValue?.category.includes("7d34a5fa-e2cf-466d-9f01-d731f6967082")} 
                              onChange={(e) => handleFilterCheck(e)}/>
                              <CatRecycleMed />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant='primary' children='Simpan' className='w-[228px] py-[8px]' onClick={() => handleSaveFilter()}/>
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
            {isFiltered &&
              <div className="flex gap-[12px] mx-[24px]">
                {filterValue?.minPrice || filterValue?.maxPrice ?
                <Filtered type='input' children={`${filterValue.minPrice} - ${filterValue.maxPrice}`}
                filter='Harga'/> : null}
                {filterValue?.minStock || filterValue?.maxStock ?
                <Filtered type='input' children={`${filterValue.minStock} - ${filterValue.maxStock}`}
                filter='Stok'/> : null}
                {filterValue?.minCoin || filterValue?.maxCoin ?
                <Filtered type='input' children={`${filterValue.minCoin} - ${filterValue.maxCoin}`}
                filter='Koin'/> : null}
                {filterValue?.category.includes("b5d07366-3b31-4011-95e3-34735b0b61f8") ?
                <Filtered type='checkbox' children={<CatEarth />}
                filter='Membantu'/> : null}
                {filterValue?.category.includes("83808762-e2b8-4b34-a1eb-0ed8d4fda3dd") ?
                <Filtered type='checkbox' children={<CatMoney />}
                filter='Membantu'/> : null}
                {filterValue?.category.includes("e8e714bd-c34e-4278-980c-39bd1f55b5fb") ?
                <Filtered type='checkbox' children={<CatBrain />}
                filter='Membantu'/> : null}
                {filterValue?.category.includes("7d34a5fa-e2cf-466d-9f01-d731f6967082") ?
                <Filtered type='checkbox' children={<CatRecycle />}
                filter='Membantu'/> : null}
              </div>}
          {/* filter on */}
          {data ?
            <>
              <TableProducts data={data} dataShow={dataShow} filterValue={filterValue} isFiltered={isFiltered}/>
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
