import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import NoDataImage from '@/assets/images/no-data-challenges.png'
import { DataImpactOrderProps } from "@/components/DataImpact/type";
import Loading from "@/components/loading";
import TableImpactProduct from "@/components/DataImpact/order/table";
import Paging from "@/components/pagination";
import { DataImpactOrderHeaders } from "@/components/DataImpact/headers";
import FilterItemsImpactOrder from "@/components/DataImpact/order/filter/items";

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

  const onFilter = (data: { username?: string | undefined; productName?: string | undefined; }) => {
    const { username, productName } = data;

    const filteredData = datas.originalData.filter((item) => {
      const itemUsername = item.username.toLowerCase();
      const itemProductName = item.product_name.toLowerCase();

      if (username && productName) {
        return itemUsername.includes(username.toLowerCase()) &&
          itemProductName.includes(productName.toLowerCase());
      }
      if (username) {
        return itemUsername.includes(username.toLowerCase());
      }
      if (productName) {
        return itemProductName.includes(productName.toLowerCase());
      }
      return true;
    });

    setDatas({
      ...datas,
      data: filteredData,
      filtered: { username, productName }
    })
  }

  const onDeleteFilter = (key: keyof { username: string | undefined; productName: string | undefined; }) => {
    // @ts-expect-error property does not exist
    const { username, productName } = datas.filtered;

    if (key === "username") {
      onFilter({ username: undefined, productName });
    }
    if (key === "productName") {
      onFilter({ username, productName: undefined });
    }
  }

  const onSearch = (value: string) => {
    /**
     * Searchnya berdasarkan product name saja
     * karena lebih enak nyarinya
     */
    const filteredData = datas.originalData.filter((item) => {
      const itemProductName = item.product_name.toLowerCase();
      return itemProductName.includes(value.toLowerCase());
    });

    setDatas({
      ...datas,
      data: filteredData,
      filtered: {
        ...datas.filtered,
        productName: value
      }
    })
  }

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
        <DataImpactOrderHeaders onFilter={onFilter} onSearch={onSearch} />
        <FilterItemsImpactOrder filter={datas.filtered} onDeleteFilter={onDeleteFilter} />

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
