import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/lib/redux";
import MoreIcon from "@/assets/icons/More.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import DeleteIcon from "@/assets/icons/Iconly/Union-1.svg";
import ShowProfileIcon from "@/assets/icons/Iconly/Show.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteDialog from "./deleteDialog";
import { deleteForumById } from "@/lib/redux/api/forum";
import { useToast } from "../ui/use-toast";
import CheckCircle from "@/assets/icons/checkCircle";
import CrossCircle from "@/assets/icons/crossCircle";

const ForumTable = () => {
  const {
    discussions = [],
    error,
  } = useAppSelector((state) => state.forum);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [forumId, setForumId] = useState<string>();

  const { toast } = useToast();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  async function handleDelete() {
    if (forumId) {
      await dispatch(deleteForumById(forumId));
      toast({
        icon: error ? <CrossCircle /> : <CheckCircle />,
        variant: error ? "destructive" : "default",
        description: "Forum deleted !",
      });
      setIsOpenDelete(false);
    }
  }

  return (
    <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300 overflow-auto max-h-[65vh]">
      <Table>
        <TableHeader>
          <TableRow className="text-start py-[10px]">
            <TableHead
              className={`text-sm leading-5 text-black font-normal px-3 py-2`}
            >
              No
            </TableHead>
            <TableHead
              className={`text-sm leading-5 text-black font-normal px-3 py-2`}
            >
              Title
            </TableHead>
            <TableHead
              className={`text-sm leading-5 text-black font-normal px-3 py-2`}
            >
              Description
            </TableHead>
            <TableHead
              className={`text-sm leading-5 text-black font-normal px-3 py-2`}
            >
              Author
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-neutral-50">
          {discussions?.map((item, index) => (
            <TableRow
              key={index}
              className={`text-start text-xs leading-6 font-normal text-neutral-900 ${
                index % 2 !== 0 ? "bg-neutral-200" : ""
              }`}
            >
              <TableCell className="p-3 text-start">{index + 1}</TableCell>
              <TableCell className="p-3 text-start">{item.title}</TableCell>
              <TableCell className="p-3 text-start">
                {item.description}
              </TableCell>
              <TableCell className=" p-3 text-start">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 border border-black">
                    <img
                      src={
                        item.author.avatar_url ||
                        "@/assets/images/default-user.png"
                      }
                      className="w-full rounded-full h-6"
                    />
                  </div>
                  {item.author.name || "-"}
                </div>
              </TableCell>
              <TableCell className="w-6 text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg p-2">
                    <MoreIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white rounded-lg absolute right-5 w-36 -top-7 p-3 text-neutral-900 flex flex-col  gap-1 shadow-md">
                    <DropdownMenuItem
                      className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                      onClick={() => navigate(`./${item.id}`)}
                    >
                      <ShowProfileIcon />
                      Lihat
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                      onClick={() => {
                        setIsOpenDelete(true);
                        setForumId(item.id);
                      }}
                    >
                      <DeleteIcon />
                      Hapus
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DeleteDialog
        isOpen={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ForumTable;
