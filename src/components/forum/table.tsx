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

const ForumTable = () => {
  const { discussions = [] } = useAppSelector((state) => state.forum);

  return (
    <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300">
      <Table>
        <TableHeader>
          <TableRow className="text-start py-[10px]">
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
              <TableCell className="p-3 text-start">{item.title}</TableCell>
              <TableCell className="p-3 text-start">
                {item.description}
              </TableCell>
              <TableCell className="p-3 text-start">
                {item.author.name}
              </TableCell>
              <TableCell className="flex gap-2 p-3 text-start">
                <div className="w-6 rounded-full bg-slate-300 border border-black">
                  <img
                    src={
                      item.author.avatar_url ||
                      "@/assets/images/default-user.png"
                    }
                    className="w-full rounded-full h-6"
                  />
                </div>
                {item.author.name || "-"}
              </TableCell>
              <TableCell className="max-w-6  p-3">
                <MoreIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ForumTable;
