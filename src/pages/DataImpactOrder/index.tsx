import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import NoDataImage from '@/assets/images/no-data-challenges.png'
import { DataImpactOrderProps } from "@/components/DataImpact/type";
import Loading from "@/components/loading";
import TableImpactProduct from "@/components/DataImpact/order/table";
import Paging from "@/components/pagination";

const NoData = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full min-h-[80dvh]">
    <img src={NoDataImage} alt="No Data Challenges" />
    <h1 className="font-bold text-2xl">
      Belum ada data yang dimasukkan
    </h1>
  </div>
)


interface DatasProps {
  data: DataImpactOrderProps[];
  originalData: DataImpactOrderProps[];
  filtered?: {
    username?: string;
    productName?: string;
  }
}

interface DataShowProps {
  start: number;
  end: number;
}

const DataImpactOrder = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [datas, setDatas] = useState<DatasProps>({
    data: [],
    originalData: [],
    filtered: {
      username: undefined,
      productName: undefined
    }
  });
  const [dataShow, setDataShow] = useState<DataShowProps>({
    start: 0,
    end: 10
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await GreeveApi.get(`/order/product`)
        setDatas({
          data: response.data.data,
          originalData: response.data.data,
        })
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
  }
  return (
    <AdminLayout>
      <section className="p-6">

        {!datas.data
          ? <NoData />
          : (
            <>
              <TableImpactProduct data={datas.data} dataShow={dataShow} />
              <Paging
                dataLength={datas.data.length}
                amouthDataDisplayed={10}
                className="my-4"
                setDataShow={(event: { start: number; end: number }) => {
                  setDataShow({ start: event.start, end: event.end });
                }}
              />
            </>
          )
        }
      </section>
    </AdminLayout>
  )
};

export default DataImpactOrder;
