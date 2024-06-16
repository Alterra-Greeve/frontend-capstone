import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import TableProductsMeasurement from "./Table";
import Filter from "@/assets/icons/Filter.svg";
import Download from "@/assets/icons/Export.svg"
import FilterOutline from '@/assets/icons/FilterOutline.svg'
import NoData from '@/assets/icons/NoData.svg'
import SearchBar from "@/components/SearchBar/SearchBar";
import Pagination from "@/components/pagination";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

const DataImpactOrder = () => {
  const [data, setData] = useState<any>()
  const [dataShow, setDataShow] = useState({})
  const [searchName, setSearchName] = useState("")
  const [toggleOpen, setToggleOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)
  const [filterValue, setFilterValue] = useState<any>({});
  async function fetchDataImpactOrder() {
    setIsLoading(true)
    try{
      const response = await GreeveApi.get(`/order/product`)
      setData(response.data.data)
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }
  function handleSearch(e: any) {
    setSearchName(e.target.value)
  }
  function handleFilterInput(e: any) {
    const { value, name } = e.target;
    setFilterValue({ ...filterValue, [name]: value })
  }
  function handleSaveFilter() {
    setToggleOpen(!toggleOpen)
    if (filterValue) {
      setIsFiltered(true)
    } else {
      setIsFiltered(false)
    }
  }
  useEffect(() => {
    fetchDataImpactOrder()
  }, [])

  if (isLoading) return <AdminLayout>Loading...</AdminLayout>;
  // console.log(data)
  return (
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
                  <div className='flex flex-col gap-[12px] text-[16px] font-[800] text-neutral-900'>
                    <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                      <label>Username</label>
                      <Input type='text' style='w-full text-[12px] font-[500]' id="username" name="username"
                        onChange={(e) => handleFilterInput(e)} placeholder='Ex: Orion' value={filterValue?.username} />
                    </div>
                    <div className='flex flex-col gap-[12px] p-[12px] rounded-[8px] border-[0.5px] border-solid border-neutral-200'>
                      <label>Product Name</label>
                      <Input type='text' style='w-full text-[12px] font-[500]' id="productName" name="productName"
                        onChange={(e) => handleFilterInput(e)} placeholder='Ex: Sedotan Besi' value={filterValue?.productName} />
                    </div>
                  </div>
                  <Button variant='primary' children='Simpan' className='w-[228px] py-[8px] mt-[20px]' onClick={() => handleSaveFilter()} />
                </div>
                : null
              }
            </div>
          </div>
          <div className="flex gap-[8px]">
            <Button variant="secondary" className='p-[8px]' icon={<Download />}>Export</Button>
          </div>
        </div>
        {/* {isFiltered &&
          <div className="flex gap-[12px] mx-[24px]">
            {filterValue?. ?
              <Filtered type='input' children={`${filterValue.}`}
                filter='Username' /> : null}
            {filterValue?. ?
              <Filtered type='input' children={`${filterValue.}`}
                filter='Product Name' /> : null}
          </div>} */}
        {data ?
          <>
            <TableProductsMeasurement data={data} dataShow={dataShow} filterValue={filterValue} isFiltered={isFiltered} />
            <div className="mx-[24px]">
              {/* <Pagination
                // @ts-expect-error data is type unknown
                dataLength={data.data.length}
                amouthDataDisplayed={10}
                setDataShow={(event: { start: number; end: number }) => {
                  setDataShow({ Start: event.start, end: event.end });
                }} /> */}
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
  )
};

export default DataImpactOrder;
