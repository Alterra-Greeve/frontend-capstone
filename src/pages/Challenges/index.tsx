import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getChallenges } from "@/lib/redux/api/challenges";
import { useEffect } from "react";
import NoDataImages from "@/assets/images/no-data-challenges.png";
import ChallengesHeader from "@/components/challenges/header";
import TableChallenges from "@/components/challenges/table";

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
      {!data
        ? <NoData />
        : (
          <div className="p-6">
            <ChallengesHeader />
            <TableChallenges />
          </div>
        )
      }
    </AdminLayout>
  )
}
