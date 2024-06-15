import { useState } from "react";
import { RootState, useAppSelector } from "@/lib/redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import MoreIcon from "@/assets/icons/More.svg";
import DeleteIcon from "@/assets/icons/Iconly/Union-1.svg";
import ShowProfileIcon from "@/assets/icons/Iconly/Show.svg";
import EditIcon from "@/assets/icons/Iconly/Union.svg";
import DeleteChallengeModal from "@/components/challenges/modal/delete";
import { useNavigate } from "react-router-dom";
import DetailChallengeModal from "./modal/detail";

const tableHeader: string[] = [
  "ID Tantangan",
  "Gambar",
  "Judul",
  "Deskripsi",
  "EXP",
  "Koin",
  "Tingkat Kesulitan",
  "Membantu",
  "Tanggal Mulai",
  "Tanggal Berakhir",
  ""
]
interface TableChallengesProps {
  dataChallengeShow: {
    start: number;
    end: number;
  }
}

export default function TableChallenges({ dataChallengeShow }: TableChallengesProps) {
  const navigate = useNavigate();

  const { data } = useAppSelector((state: RootState) => state.challenges);
  console.log(data);
  const displayedData = data.slice(dataChallengeShow.start - 1, dataChallengeShow.end);

  const [id, setId] = useState<string | null>(null);

  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const onOpenDetail = () => setShowDetailModal(true);
  const onCloseDetail = () => setShowDetailModal(false);

  const onOpenDelete = () => setShowDeleteModal(true);
  const onCloseDelete = () => setShowDeleteModal(false);

  const onShowDelete = (id: string) => {
    setId(id);
    onOpenDelete();
  }

  const onShowDetail = (id: string) => {
    setId(id);
    onOpenDetail();
  }

  return (
    <>
      <DetailChallengeModal
        id={id || ""}
        isOpen={showDetailModal}
        onClose={onCloseDetail}
      />

      <DeleteChallengeModal
        id={id || ""}
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
      />

      <div className="mt-4 bg-primary-100 rounded-t-[8px] border-[1px] border-neutral-300">
        <Table>
          <TableHeader>
            <TableRow className="text-start py-[10px]">
              {tableHeader.map((item, index) => (
                <TableHead key={index}
                  className={`text-sm leading-5 text-black font-normal px-3 py-2 whitespace-nowrap`}
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-neutral-50">
            {displayedData.map((item, index) => (
              <TableRow key={index}
                className={`text-start text-xs leading-6 font-normal text-neutral-900 ${index % 2 != 0 ? "bg-neutral-200 " : ""}`}
              >
                <TableCell className="text-start">{item.id}</TableCell>
                <TableCell className="text-start">
                  <div className="w-6 bg-slate-300 border border-black">
                    <img
                      src={item.image_url || "@/assets/images/default-user.png"}
                      className="w-full "
                    />
                  </div>
                </TableCell>
                <TableCell className="text-start">{item.title}</TableCell>
                <TableCell className="text-start">{item.description}</TableCell>
                <TableCell className="text-start">{item.exp}</TableCell>
                <TableCell className="text-start">{item.coin}</TableCell>
                <TableCell className="text-start">{item.difficulty}</TableCell>
                <TableCell className="text-start">
                  <div className="flex gap-2 items-center">
                    {item.categories.map((category, index) => (
                      <img key={index}
                        src={category.impact_category.icon_url}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-start">{item.date_start}</TableCell>
                <TableCell className="text-start">{item.date_end}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg p-2">
                      <MoreIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white rounded-lg absolute right-5 w-36 -top-7 p-3 text-neutral-900 flex flex-col  gap-1 shadow-md">
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => navigate(`/dashboard/challenges/edit/${item.id}`)}
                      >
                        <EditIcon />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => { onShowDetail(item.id) }}
                      >
                        <ShowProfileIcon />
                        Lihat
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                        onClick={() => { onShowDelete(item.id) }}
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
  )
}