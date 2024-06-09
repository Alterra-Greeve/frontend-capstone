import AdminLayout from "@/layouts/AdminLayout";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getUsers } from "@/lib/redux/api/users";
import { useEffect, useState } from "react";

import TableProducts from "@/components/users/table";
import Header from "@/components/users/header";
import Paging from "@/components/pagination";
import FilterItem from "@/components/users/filter/filterItems";
import Loading from "@/components/loading";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { isLoading, data } = useAppSelector((state: RootState) => state.users);
  const [dataUsersShow, setDataUsersShow] = useState({
    start: 0,
    end: 10
  })

  useEffect(() => {
    (async () => {
      await dispatch(getUsers());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <AdminLayout><Loading/></AdminLayout>;
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <Header />
        <FilterItem />
        <TableProducts dataUsersShow={dataUsersShow} />
        <Paging
          dataLength={data?.length}
          amouthDataDisplayed={10}
          className={"my-4"}
          setDataShow={(event: { start: number; end: number }) => {
            setDataUsersShow(event);
          }}
        />
      </div>
    </AdminLayout>
  );
}
