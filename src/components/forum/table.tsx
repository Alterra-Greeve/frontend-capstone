import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/redux";
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

const ForumTable = () => {
  const { discussions = [] } = useAppSelector((state) => state.forum);
  
  const navigate = useNavigate();

  return (
    <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300">
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
            <TableHead
              className={`text-sm leading-5 text-black font-normal px-3 py-2`}
            >
              Avatar
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
              <TableCell className="p-3 text-start">
                {item.author.name}
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
              <TableCell className="max-w-6 p-3 text-center pe-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none hover:bg-neutral-300 py-2 rounded-lg flex justify-center items-center">
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
                    <DropdownMenuItem className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer">
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
    </div>
  );
};

export default ForumTable;
