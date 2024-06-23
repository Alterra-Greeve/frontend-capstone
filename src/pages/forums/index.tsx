import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { fetchDiscussions } from "@/lib/redux/api/forum";
import Paging from "@/components/pagination";
import ForumTable from "@/components/forum/table";
import Loading from "@/components/loading";
import AdminLayout from "@/layouts/AdminLayout";
import ForumHeader from "@/components/forum/header";
import NoData from "@/components/NoData";

export default function ForumPage() {
  const dispatch = useAppDispatch();
  const { discussions, loading } = useAppSelector(
    (state: RootState) => state.forum
  );

  const [page, setPage] = useState<{ start: number; end: number }>({
    start: 1,
    end: 10,
  });

  useEffect(() => {
    (async () => {
      await dispatch(fetchDiscussions());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <Loading />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <section className="p-6 relative">
        <ForumHeader />
        {discussions && discussions.length === 0 ? (
          <NoData />
        ) : (
          <>
            <ForumTable page={page} />
            <Paging
              dataLength={discussions.length}
              amouthDataDisplayed={10}
              className="my-4"
              setDataShow={(e) => setPage(e)}
            />
          </>
        )}
        <Toaster />
      </section>
    </AdminLayout>
  );
}
