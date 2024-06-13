/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CatEarth from "@/assets/icons/catEarth.svg";
import CatMoney from "@/assets/icons/catMoney.svg";
import CatBrain from "@/assets/icons/catBrains.svg";
import CatRecycle from "@/assets/icons/catRecycle.svg";
import { Link, useNavigate } from "react-router-dom";

const tableHeader = ["Gambar", "Nama", "Harga", "Helps", "Tanggal Dibuat"];

// const user_dummy = [
//   {
//     images: { image_url: "422344" },
//     name: "Pucuk Merah",
//     price: "Rp120.000",
//     helps: "3",
//     created_at: "09/05/24",
//   },
//   {
//     images: { image_url: "422344" },
//     name: "Pupuk",
//     price: "Rp20.000",
//     helps: "4",
//     created_at: "09/05/24",
//   },
//   {
//     images: { image_url: "422344" },
//     name: "Stainless",
//     price: "Rp60.000",
//     helps: "4",
//     created_at: "09/05/24",
//   },
// ];

const NewProductTable = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-50 w-full p-[16px] rounded-md">
      <div className="flex flex-row justify-between mb-[12px]">
        <div className="flex flex-col">
          <h3 className="font-bold text-[24px] text-neutral-900">
            Produk Terbaru
          </h3>
          <p className="font-normal text-[16px] mb-[12px] text-neutral-600">
            List troduk terbaru bulan ini
          </p>
        </div>
        <Link to={"/dashboard/products"}>
          <Button
            variant="outline"
            className="border-primary-500 text-primary-500"
          >
            Selengkapnya
          </Button>
        </Link>
      </div>
      <div className="mt-[22px] mx-5 bg-primary-100 rounded-t-[7px] grid">
        <Table>
          <TableHeader>
            <TableRow className="text-start py-[10px]">
              {tableHeader.map((item, i) => (
                <TableHead
                  className={`text-neutral-900 h-[40px] font-medium text-[12px] p-1 ${
                    i == 0 ? "text-center" : ""
                  }`}
                  key={i}
                >
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-[#F4F4F4]">
            {data.map(
              (
                item: {
                  name: string;
                  images: any;
                  price: number;
                  category: any;
                  created_at: string;
                },
                i: number
              ) => (
                <TableRow
                  className={`text-start cursor-pointer ${
                    i % 2 == 0 ? "bg-neutral-50" : "bg-neutral-200"
                  }`}
                  key={i}
                >
                  <TableCell
                    className="px-1 py-3 flex items-center h-[40px] justify-center text-start"
                    onClick={() => {
                      navigate(`/users?user_id=${item.name}`);
                    }}
                    key={i}
                  >
                    <div className="flex justify-center items-center ">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={item.images[0].image_url}
                        alt={`${item.name}`}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                    {item.name}
                  </TableCell>
                  <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                    {item.price}
                  </TableCell>
                  <TableCell className="flex justify-start items-start gap-1 px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                    {item.category.map((item: any, i: number) =>
                      item.impact_category.name == "Mengurangi Limbah" ? (
                        <CatRecycle key={i} />
                      ) : item.impact_category.name == "Hemat Uang" ? (
                        <CatMoney key={i} />
                      ) : item.impact_category.name ==
                        "Mengurangi Pemanasan Global" ? (
                        <CatEarth key={i} />
                      ) : (
                        <CatBrain key={i} />
                      )
                    )}
                  </TableCell>
                  <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                    {item.created_at.split(" ")[0]}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewProductTable;
