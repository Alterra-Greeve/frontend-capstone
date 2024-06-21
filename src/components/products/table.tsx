import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import MoreIcon from "@/assets/icons/More.svg";
import DeleteIcon from '@/assets/icons/deleteProduct.svg';
import ShowProfileIcon from '@/assets/icons/detailsProduct.svg';
import EditIcon from '@/assets/icons/editProduct.svg';
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
    <div className="mt-[16px] bg-primary-100 rounded-xl border-[1px] border-neutral-300">
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
              <TableHead key={index} className="text-[12px] text-neutral-900 font-normal  whitespace-nowrap">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {displayedData.map((item, index) => (
            <TableRow className={`${index % 2 === 0 ? 'bg-neutral-50 ' : 'bg-neutral-200'} text-[12px] text-neutral-900 font-normal`} key={index}>
              <TableCell className="text-start w-[10%]">{item.product_id.split('-')[0]}</TableCell>
              <TableCell className="text-start w-[10%]">
                <img src={item.image_url[0]} className="w-[24px] h-[24px] rounded-[24px]"></img>
              </TableCell>
              <TableCell className="text-start w-[10%]">{item.name.length < 15 ? item.name : `${item.name.substring(0, 15)}...`}</TableCell>
              <TableCell className="text-start w-[10%]">{item.price}</TableCell>
              <TableCell className="text-start w-[10%]">{item.stock}</TableCell>
              <TableCell className="text-start w-[10%]">{item.coin}</TableCell>
              <TableCell className="text-start w-[10%]">{item.description.length < 14 ? item.description : `${item.description.substring(0, 14)}...`}</TableCell>
              <TableCell className="flex gap-[4px]">
                {item.category.map((category) => (
                  impacts.map((impact) => (
                    impact.id === category &&
                    <img key={impact.id} src={impact.icon_url} alt={impact.name} className="w-[24px]" />
                  ))
                ))}
              </TableCell>
              <TableCell className="text-start w-[10%]">{item.created_at}</TableCell>

              <TableCell className="flex items-center text-start gap-[12px] w-[10%]">
                <div>{item.updated_at}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:bg-primary-100 transition duration-200 rounded-[8px] p-2">
                    <MoreIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="absolute right-4 -top-9 p-0 text-neutral-900 shadow-md rounded-[8px] bg-neutral-50 min-w-[0px] flex flex-col">
                    <DropdownMenuItem
                      className="rounded-b-none flex gap-[8px] py-[8px] px-[16px] focus:bg-primary-200 cursor-pointer text-[14px] font-[700] text-neutral-900"
                      onClick={() => navigate(`/dashboard/products/edit/${item.product_id}`)}
                    >
                      <EditIcon />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="rounded-none flex gap-[8px] py-[8px] px-[16px] focus:bg-primary-200 cursor-pointer text-[14px] font-[700] text-neutral-900"
                      onClick={() => onShowDetail(item.product_id)}
                    >
                      <ShowProfileIcon />
                      Lihat
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="rounded-t-none flex gap-[8px] py-[8px] px-[16px] focus:bg-primary-200 cursor-pointer text-[14px] font-[700] text-neutral-900"
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