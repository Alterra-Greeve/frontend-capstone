import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { fetchDiscussions } from "@/lib/redux/api/forum";

import ForumTable from "@/components/forum/table";
import Loading from "@/components/loading";
import AdminLayout from "@/layouts/AdminLayout";
import ForumHeader from "@/components/forum/header";
import ForumPagination from "@/components/forum/forumPagination";

export default function ForumPage() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state: RootState) => state.forum);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      await dispatch(fetchDiscussions(page));
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <section className="p-6">
        <ForumHeader />
        <ForumTable />
        <ForumPagination setPage={(e) => setPage(e)} className="my-4" />
      </section>
      <Toaster />
    </AdminLayout>
  )
}