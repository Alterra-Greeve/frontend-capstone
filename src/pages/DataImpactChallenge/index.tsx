import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import NoDataImage from '@/assets/images/no-data-challenges.png'
import Loading from "@/components/loading";
import TableImpactChallenge from "@/components/DataImpact/challenges/table";
import Paging from "@/components/pagination";
import { DataImpactProps } from "@/components/DataImpact/type";
import { DataImpactChallengeHeaders } from "@/components/DataImpact/headers";

const NoData = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full min-h-[80dvh]">
    <img src={NoDataImage} alt="No Data Challenges" />
    <h1 className="font-bold text-2xl">
      Belum ada data yang dimasukkan
    </h1>
  </div>
)

interface DataProps {
  data: DataImpactProps[];
  originalData: DataImpactProps[];
  filtered?: {
    username: string | undefined;
    tantangan: string | undefined;
  }
}

const DataImpactChallenge = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<DataProps>({
    data: [],
    originalData: [],
    filtered: {
      username: undefined,
      tantangan: undefined
    }
  });
  const [dataShow, setDataShow] = useState({
    start: 1,
    end: 10
  });

  const onFilter = (data: { username?: string | undefined; tantangan?: string | undefined; }) => {
    const { username, tantangan } = data;

    const filteredData = datas.originalData.filter((item) => {
      const itemUsername = item.username.toLowerCase();
      const itemChallengeName = item.challenge_name.toLowerCase();

      if (username && tantangan) {
        return itemUsername.includes(username.toLowerCase()) && itemChallengeName.includes(tantangan.toLowerCase());
      }
      if (username) {
        return itemUsername.includes(username.toLowerCase());
      }
      if (tantangan) {
        return itemChallengeName.includes(tantangan.toLowerCase());
      }
      return true;
    });

    setDatas({
      ...datas,
      data: filteredData,
      filtered: { username, tantangan }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await GreeveApi.get(`/order/challenge`);
        setDatas({
          data: response.data.data,
          originalData: response.data.data
        });
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
        <DataImpactChallengeHeaders onFilter={onFilter} />
        {!datas.data
          ? <NoData />
          : (
            <>
              <TableImpactChallenge data={datas.data} dataShow={dataShow} />
              <Paging
                dataLength={datas.data.length}
                amouthDataDisplayed={10}
                className="my-4"
                setDataShow={(event: { start: number; end: number }) => {
                  setDataShow({ start: event.start, end: event.end });
                }}
              />
            </>
          )}
      </section>
    </AdminLayout>
  );
};

export default DataImpactChallenge;
