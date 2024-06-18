import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import MoreIcon from "@/assets/icons/More.svg";
import DeleteIcon from "@/assets/icons/Iconly/Union-1.svg";
import ShowProfileIcon from "@/assets/icons/Iconly/Show.svg";
import EditIcon from "@/assets/icons/Iconly/Union.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailModalProduct from "./modal/detail";
import { RootState, useAppSelector } from "@/lib/redux";
import DeleteProductsModal from "./modal/delete";

interface TableProductsProps {
  dataShow: {
    start: number;
    end: number;
  }
}

const headers = [
  "Product ID",
  "Image",
  "Name",
  "Price",
  "Stock",
  "Coin",
  "Description",
  "Helps",
  "Create Date",
  "Update Date",
  ""
] as const;

export default function TableProducts({ dataShow }: TableProductsProps) {
  const navigate = useNavigate();

  const { data: products } = useAppSelector((state: RootState) => state.products);
  const { data: impacts } = useAppSelector((state: RootState) => state.impact);

  const displayedData = products.slice(dataShow.start - 1, dataShow.end);

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
    <div className="mt-4 bg-primary-100 rounded-xl border-[1px] border-neutral-300">
      <DetailModalProduct
        isOpen={showDetailModal}
        onClose={onCloseDetail}
        id={id as string}
      />
      <DeleteProductsModal
        isOpen={showDeleteModal}
        onClose={onCloseDelete}
        id={id as string}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="text-sm leading-5 text-black font-normal px-3 py-2 whitespace-nowrap">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {displayedData.map((item, index) => (
            <TableRow className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-200'} key={index}>
              <TableCell className="text-start">{item.product_id}</TableCell>
              <TableCell className="text-start">
                <img src={item.image_url[0]} className="w-[24px] h-[24px] rounded-[24px]"></img>
              </TableCell>
              <TableCell className="text-start">{item.name}</TableCell>
              <TableCell className="text-start">{item.price}</TableCell>
              <TableCell className="text-start">{item.stock}</TableCell>
              <TableCell className="text-start">{item.coin}</TableCell>
              <TableCell className="text-start">{item.description}</TableCell>
              <TableCell className="text-start">
                <div className="flex gap-1">
                  {item.category.map((category) => (
                    impacts.map((impact) => (
                      impact.id === category &&
                      <img key={impact.id} src={impact.icon_url} alt={impact.name} className="w-7" />
                    ))
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-start">{item.created_at}</TableCell>
              <TableCell className="text-start">{item.updated_at}</TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-neutral-300 rounded-lg p-2">
                    <MoreIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white rounded-lg absolute right-5 w-36 -top-7 p-3 text-neutral-900 flex flex-col  gap-1 shadow-md">
                    <DropdownMenuItem
                      className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                      onClick={() => navigate(`/dashboard/products/edit/${item.product_id}`)}
                    >
                      <EditIcon />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                      onClick={() => onShowDetail(item.product_id)}
                    >
                      <ShowProfileIcon />
                      Lihat
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-sm font-bold flex gap-2 p-2 hover:bg-neutral-100 hover:rounded-md outline-none cursor-pointer"
                      onClick={() => onShowDelete(item.product_id)}
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
  )
}