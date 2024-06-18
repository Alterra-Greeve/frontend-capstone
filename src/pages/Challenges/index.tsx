import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getChallenges } from "@/lib/redux/api/challenges";
import { useEffect, useState } from "react";
import { ChallengesHeader } from "@/components/challenges/header";
import TableChallenges from "@/components/challenges/table";
import Paging from "@/components/pagination";
import FilterItemsChallenge from "@/components/challenges/filter/items";
import { Toaster } from "@/components/ui/toaster";
import Loading from "@/components/loading";
import NoData from "@/components/NoData";

interface DataChallengeShowProps {
  start: number;
  end: number;
}

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
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
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
