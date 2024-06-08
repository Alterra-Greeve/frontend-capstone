import AdminLayout from "@/layouts/AdminLayout";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getUsers } from "@/lib/redux/api/users";
import { useEffect } from "react";

import TableProducts from "@/components/users/table";
import Header from "@/components/users/header";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state: RootState) => state.users);

  useEffect(() => {
    (async () => {
      await dispatch(getUsers());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <AdminLayout>loading</AdminLayout>
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <Header />
        <TableProducts />
      </div>

      {/* <Paging
          dataLength={data?.data.length}
          amouthDataDisplayed={10}
          className={"my-4"}
          setDataShow={(event: { start: number; end: number }) => {
            console.log(`Start : ${event.start} , end : ${event.end}`);
          }}
        /> */}
    </AdminLayout>
  );
}
