"use client";

import AdminLayout from "@/layouts/AdminLayout";

import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { getUsers } from "@/lib/redux/api/users";
import { useEffect, useState } from "react";

import Header from "@/components/users/header";
import Paging from "@/components/pagination";
import FilterItem from "@/components/users/filter/filterItems";
import Loading from "@/components/loading";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import CheckCircle from "@/assets/icons/checkCircle";
import CrossCircle from "@/assets/icons/crossCircle";
import TableUsers from "@/components/users/table";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const { isLoading, data, message, isError } = useAppSelector(
    (state: RootState) => state.users
  );
  const [dataUsersShow, setDataUsersShow] = useState({
    start: 0,
    end: 10,
  });
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      await dispatch(getUsers());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <TableUsers dataUsersShow={dataUsersShow} />
        <Paging
          dataLength={data?.length}
          amouthDataDisplayed={10}
          className={"my-4"}
          setDataShow={(event: { start: number; end: number }) => {
            setDataUsersShow(event);
          }}
        />
        <Toaster />
      </div>
    </AdminLayout>
  );
}
