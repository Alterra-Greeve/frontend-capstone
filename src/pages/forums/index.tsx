import ForumTable from "@/components/forum/table";
import Loading from "@/components/loading";
import { fetchDiscussions } from "@/lib/redux/api/forum";
import { useEffect } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import ForumHeader from "@/components/forum/header";

const ForumPage = () => {
  const { loading } = useAppSelector((state: RootState) => state.forum);
  const dispatch = useAppDispatch();

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
      <section className="p-6">
        <ForumHeader/>
        <ForumTable />
      </section>
    </AdminLayout>
  );
};

export default ForumPage;
