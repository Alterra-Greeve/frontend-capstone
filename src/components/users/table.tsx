import { useState } from "react";
import { RootState, useAppSelector } from "@/lib/redux";

import MoreIcon from "@/assets/icons/More.svg";
import DeleteIcon from "@/assets/icons/Iconly/Union-1.svg";
import ShowProfileIcon from "@/assets/icons/Iconly/Show.svg";
import EditIcon from "@/assets/icons/Iconly/Union.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import DetailUserModal from "@/components/users/modal";
import DeleteUserModal from "@/components/users/modal/delete";
import EditUserModal from "@/components/users/modal/edit";

const tableHeader: string[] = [
  "User ID",
  "Name",
  "Username",
  "Gender",
  "No.Telp",
  "Email",
  "Address",
  "Create Date",
  "Membership",
  "",
];

interface TableProductsProps {
  dataUsersShow: { start: number; end: number };
}

export default function TableProducts({ dataUsersShow }: TableProductsProps) {
  const { data } = useAppSelector((state: RootState) => state.users);

  // Slice the data array to only include the items from start to end
  const displayedData = data.slice(dataUsersShow.start-1, dataUsersShow.end);

  const [userId, setUserId] = useState<string | null>(null);

  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const onOpenDetail = () => setShowDetailModal(true);
  const onCloseDetail = () => setShowDetailModal(false);

  const onOpenEdit = () => setShowEditModal(true);
  const onCloseEdit = () => setShowEditModal(false);

  const onOpenDelete = () => setShowDeleteModal(true);
  const onCloseDelete = () => setShowDeleteModal(false);

  const onShowDetail = (id: string) => {
    setUserId(id);
    onOpenDetail();
  };

  const onShowEdit = (id: string) => {
    setUserId(id);
    onOpenEdit();
  };

  const onShowDelete = (id: string) => {
    setUserId(id);
    onOpenDelete();
  };

  return (
    <>
      <DetailUserModal
        isOpen={showDetailModal}
        onClose={onCloseDetail}
        data={data.find((item) => item.id === userId)}
      />

      <DeleteUserModal
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
        userId={userId || ""}
      />

      <EditUserModal
        isOpen={showEditModal}
        onClose={onCloseEdit}
        data={data.find((item) => item.id === userId)}
      />

      <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300">
        <Table>
          <TableHeader>
            <TableRow className="text-start py-[10px]">
              {tableHeader.map((item, i) => (
                <TableHead
                  className={`text-sm leading-5 text-black font-normal px-3 py-2`}
                  key={i}
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="bg-neutral-50">
            {displayedData.map((item, index) => (
              <TableRow
                key={index}
                className={`text-start text-xs leading-6 font-normal text-neutral-900 ${
                  index % 2 !== 0 ? "bg-neutral-200 " : ""
                }`}
              >
                <TableCell className="p-3 text-start">
                  {item.id.split("-")[0]}
                </TableCell>
                <TableCell className="px-3 text-start flex items-center gap-3">
                  <div className="w-6 rounded-full bg-slate-300 border border-black">
                    <img
                      src={
                        item.avatar_url || "@/assets/images/default-user.png"
                      }
                      className="rounded-full h-6 w-6"
                    />
                  </div>
                  {item.name || "-"}
                </TableCell>

                <TableCell className="p-3 text-start">
                  {item.username || "-"}
                </TableCell>
                <TableCell className="p-3 text-start">
                  {item.gender || "-"}
                </TableCell>
                <TableCell className="p-3 text-start">
                  {item.phone || "-"}
                </TableCell>
                <TableCell className="p-3 text-start">
                  {item.email || "-"}
                </TableCell>
                <TableCell className="p-3 text-start">
                  {item.address || "-"}
                </TableCell>
                <TableCell className="p-3 text-start">-</TableCell>
                <TableCell className="p-3 text-start">-</TableCell>

                <TableCell className="p-3 text-center pe-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg p-2">
                      <MoreIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white rounded-lg absolute right-5 w-36 -top-7 p-3 text-neutral-900 flex flex-col  gap-1 shadow-md">
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => {
                          onShowEdit(item.id);
                        }}
                      >
                        <EditIcon />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => {
                          onShowDetail(item.id);
                        }}
                      >
                        <ShowProfileIcon />
                        Lihat
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => {
                          onShowDelete(item.id);
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
      </div>
    </>
  );
}
