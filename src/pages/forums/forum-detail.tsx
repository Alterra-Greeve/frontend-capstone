import AdminLayout from "@/layouts/AdminLayout";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { useEffect } from "react";
import { fetchDiscussionById } from "@/lib/redux/api/forum";
import Loading from "@/components/loading";

const ForumDetail = () => {
  const { forum_id } = useParams();
  const navigate = useNavigate();
  const { discussionsDetail, loading } = useAppSelector((state) => state.forum);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (forum_id) {
      dispatch(fetchDiscussionById(forum_id));
    }
  }, [forum_id]);

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : (
        <section className="p-6">
          <div className="pb-6 border-b-[0.3px] border-neutral-300">
            <button className="flex gap-3 justify-center items-center text-neutral-900" onClick={()=>navigate("/dashboard/forum-discussion")}>
              <ArrowLeft />
              Forum Discussion
            </button>
          </div>
          <div className="py-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-medium text-neutral-900">
                {discussionsDetail?.title}
              </h1>
              <p className="mx-[0.5px] text-xs font-normal text-neutral-600">
                Create by {discussionsDetail?.author?.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* <h1 className="text-xl">Message</h1> */}
            {discussionsDetail.forum_messages.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 rounded-[7px] border-[0.3px] border-neutral-300 bg-neutral-50"
              >
                <p className="text-xl leading-5 font-normal text-neutral-900">
                  {item.message}
                </p>
                <p className="text-xs leading-5 font-semibold text-neutral-500">
                  Created by {item.user_id}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </AdminLayout>
  );
};

export default ForumDetail;
