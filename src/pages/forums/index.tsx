import ForumTable from "@/components/forum/table";
import Loading from "@/components/loading";
import { fetchDiscussions } from "@/lib/redux/api/forum";
import { useEffect, useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import ForumHeader from "@/components/forum/header";
import ForumPagination from "@/components/forum/forumPagination";
import { Toaster } from "@/components/ui/toaster";

const ForumPage = () => {
  const { loading } = useAppSelector((state: RootState) => state.forum);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchDiscussions(page.toString()));
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    );
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
  );
};

export default ForumPage;
