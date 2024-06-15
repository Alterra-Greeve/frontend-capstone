import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getChallenges } from "@/lib/redux/api/challenges";
import { useEffect, useState } from "react";
import NoDataImages from "@/assets/images/no-data-challenges.png";
import { ChallengesHeader } from "@/components/challenges/header";
import TableChallenges from "@/components/challenges/table";
import Paging from "@/components/pagination";
import FilterItemsChallenge from "@/components/challenges/filter/items";
import { Toaster } from "@/components/ui/toaster";

interface DataChallengeShowProps {
  start: number;
  end: number;
}

const NoData = () => (
  <div className="flex flex-col gap-3 items-center justify-center w-full min-h-[80dvh]">
    <img src={NoDataImages} alt="No Data Challenges" />
    <h1 className="font-bold text-2xl">
      Belum ada data yang dimasukkan
    </h1>
  </div>
)

export default function ChallengesPage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state: RootState) => state.challenges);

  const [dataChallengeShow, setDataChallengeShow] = useState<DataChallengeShowProps>({
    start: 0,
    end: 10,
  });

  useEffect(() => {
    (async () => {
      await dispatch(getChallenges());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <AdminLayout>loading</AdminLayout>
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <ChallengesHeader />
        <FilterItemsChallenge />

        {data && data.length === 0
          ? <NoData />
          : (
            <>
              <TableChallenges dataChallengeShow={dataChallengeShow} />

              {data.length >= 10 && (
                <Paging
                  dataLength={data?.length}
                  amouthDataDisplayed={10}
                  className="my-4"
                  setDataShow={(event) => setDataChallengeShow(event)}
                />
              )}
            </>
          )}

        <Toaster />
      </div>
    </AdminLayout>
  )
}
