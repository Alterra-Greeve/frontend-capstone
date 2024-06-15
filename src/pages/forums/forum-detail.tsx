import AdminLayout from "@/layouts/AdminLayout";
import ArrowLeft from "@/assets/icons/Arrow - Left.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import { useEffect } from "react";
import { fetchDiscussionById } from "@/lib/redux/api/forum";
import Loading from "@/components/loading";

import MoreIcon from "@/assets/icons/More.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import DeleteIcon from "@/assets/icons/Iconly/Union-1.svg";

const ForumDetail = () => {
  const { forum_id } = useParams();
  const navigate = useNavigate();
  const { discussionsDetail, loading } = useAppSelector((state) => state.forum);
  console.log(discussionsDetail);

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
        <section className="p-6  max-h-[85vh] overflow-auto">
          <div className="pb-6 border-b-[0.3px] border-neutral-300">
            <button
              className="flex gap-3 justify-center items-center text-neutral-900"
              onClick={() => navigate("/dashboard/forum-discussion")}
            >
              <ArrowLeft />
              Forum Discussion
            </button>
          </div>
          <div className="py-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-medium text-neutral-900">
                {discussionsDetail?.title}
              </h1>
              <p>{discussionsDetail.description}</p>
              <p className="mx-[0.5px] text-xs font-normal text-neutral-600">
                Create by {discussionsDetail?.author?.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* <h1 className="text-xl">Message</h1> */}
            {discussionsDetail?.forum_messages?.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-[8px] p-6 relative"
              >
                <div className="flex gap-3 items-center">
                  <div className="rounded-full border-[0.5px] w-[40px] h-[40px] ">
                    <img
                      src={item.user.avatar_url}
                      className="rounded-full w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="text-lg font-semibold leading-5">
                      {item.user.username !== " "
                        ? item.user.username
                        : item.user.name !== " "
                        ? item.user.name
                        : "Undefined"}
                    </h5>
                    <p className="text-neutral-500 text-sm font-medium">
                      {item.user.email}
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-2xl font-light">{item.message}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg p-2 absolute top-6 right-4">
                    <MoreIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white rounded-lg absolute right-5 w-36 -top-10 p-3 text-neutral-900 flex flex-col  gap-1 shadow-md">
                    <DropdownMenuItem className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer">
                      <DeleteIcon />
                      Hapus
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </section>
      )}
    </AdminLayout>
  );
};

export default ForumDetail;
