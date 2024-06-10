import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, useNavigate } from "react-router-dom";

const tableHeader = ["Gambar", "Nama", "Harga", "Helps", "Tanggal Dibuat"];

const user_dummy = [
  {
    gambar: 422344,
    nama: "Pucuk Merah",
    harga: "Rp120.000",
    helps: "3",
    createdAt: "09/05/24",
  },
  {
    gambar: 564576,
    nama: "Pupuk",
    harga: "Rp20.000",
    helps: "4",
    createdAt: "09/05/24",
  },
  {
    gambar: 564576,
    nama: "Stainless",
    harga: "Rp60.000",
    helps: "4",
    createdAt: "09/05/24",
  },
];

const NewProductTable = () => {
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
            {user_dummy.map((item, i) => (
              <TableRow
                className={`text-start cursor-pointer ${
                  i % 2 == 0 ? "bg-neutral-50" : "bg-neutral-200"
                }`}
                key={i}
              >
                <TableCell
                  className="px-1 py-3 flex items-center h-[40px] justify-center text-start"
                  onClick={() => {
                    navigate(`/users?user_id=${item.nama}`);
                  }}
                  key={i}
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-50 border border-black"></div>
                </TableCell>
                <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                  {item.nama}
                </TableCell>
                <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                  {item.harga}
                </TableCell>
                <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                  {item.helps}
                </TableCell>
                <TableCell className="px-1 py-3 text-start h-[40px] text-neutral-900 font-medium text-[12px]">
                  {item.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewProductTable;
