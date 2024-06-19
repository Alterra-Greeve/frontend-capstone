import { GreeveApi } from "@/lib/axios";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import Loading from "@/components/loading";
import TableImpactChallenge from "@/components/DataImpact/challenges/table";
import Paging from "@/components/pagination";
import { DataImpactProps } from "@/components/DataImpact/type";
import { DataImpactChallengeHeaders } from "@/components/DataImpact/headers";
import FilterItemsImpactChallenge from "@/components/DataImpact/challenges/filter/items";
import NoData from "@/components/NoData";

interface DataProps {
  data: DataImpactProps[];
  originalData: DataImpactProps[];
  filtered?: {
    username?: string | undefined;
    tantangan?: string | undefined;
  }
}

interface DataShowProps {
  start: number;
  end: number;
}

export default function DataImpactChallenge() {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<DataProps>({
    data: [],
    originalData: [],
    filtered: {
      username: undefined,
      tantangan: undefined
    }
  });
  const [dataShow, setDataShow] = useState<DataShowProps>({
    start: 1,
    end: 10
  });

  const onFilter = (data: { username?: string | undefined; tantangan?: string | undefined; }) => {
    const { username, tantangan } = data;

    const filteredData = datas.originalData.filter((item) => {
      const itemUsername = item.username.toLowerCase();
      const itemChallengeName = item.challenge_name.toLowerCase();

      if (username && tantangan) {
        return itemUsername.includes(username.toLowerCase()) &&
          itemChallengeName.includes(tantangan.toLowerCase());
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

  const onDeleteFilter = (key: keyof { username: string | undefined; tantangan: string | undefined; }) => {
    // @ts-expect-error property does not exist
    const { username, tantangan } = datas.filtered;

    if (key === "username") {
      onFilter({ username: undefined, tantangan });
    }
    if (key === "tantangan") {
      onFilter({ username, tantangan: undefined });
    }
  }

  const onSearch = (value: string) => {
    const filteredData = datas.originalData.filter((item) => {
      const itemChallengeName = item.challenge_name.toLowerCase();

      return itemChallengeName.includes(value.toLowerCase());
    });

    setDatas({
      ...datas,
      data: filteredData,
      filtered: {
        ...datas.filtered,
        tantangan: value
      }
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

    fetchData();
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
        <DataImpactChallengeHeaders onFilter={onFilter} onSearch={onSearch} />
        <FilterItemsImpactChallenge filter={datas.filtered} onDeleteFilter={onDeleteFilter} />

        {datas.data && datas.data.length === 0
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
  )
}
