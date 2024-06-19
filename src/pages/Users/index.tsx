import AdminLayout from "@/layouts/AdminLayout";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getUsers } from "@/lib/redux/api/users";
import { useEffect, useState } from "react";
import TableProducts from "@/components/users/table";
import Header from "@/components/users/header";
import FilterItem from "@/components/users/filter/filterItems";
import Loading from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import CheckCircle from "@/assets/icons/checkCircle";
import CrossCircle from "@/assets/icons/crossCircle";
import UsersPagination from "@/components/users/usersPagination";
import NoData from "@/components/NoData";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { data, isLoading, message, isError } = useAppSelector(
    (state: RootState) => state.users
  );
  const [page, setPage] = useState<number>(1);
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      await dispatch(getUsers(JSON.stringify(page)));
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (message !== "") {
      toast({
        icon: isError ? <CrossCircle /> : <CheckCircle />,
        variant: isError ? "destructive" : "default",
        description: message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, message]);

  if (isLoading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <Header />
        <FilterItem />

        {data && data.length === 0
          ? <NoData />
          : (
            <>
              <TableProducts />
              <UsersPagination
                className={"my-4"}
                setPage={(e: number) => setPage(e)}
              />
            </>
          )
        }

        <Toaster />
      </div>
    </AdminLayout>
  )
}
