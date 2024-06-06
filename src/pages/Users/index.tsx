import AdminLayout from "@/layouts/AdminLayout";
// import plusIcon from "@/assets/icons/plus.svg";
import exportIcon from "@/assets/icons/Export.svg";
import filterIcon from "@/assets/icons/Filter.svg";
import moreIcon from "@/assets/icons/More.svg";
import deleteIcon from "@/assets/icons/Iconly/Union-1.svg";
import showProfileIcon from "@/assets/icons/Iconly/Show.svg";
import editIcon from "@/assets/icons/Iconly/Union.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Modal from "./modal";
import Paging from "@/components/pagination";
import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";
import useFetch from "@/lib/hooks/useFetch";
import UsersFilter from "./filter";

interface dataProduct {
  length: number;
  map(
    arg0: (
      item: dataProduct,
      i: number
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  address: string;
  gender: string;
  phone: string;
  coin: string;
  exp: string;
  avatar_url: string;
}

export default function index() {
  const tableHeader = [
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

  const navigate = useNavigate();

  const { data, loading } = useFetch<{ data: dataProduct }>(
    "admin/users",
    {
      method: "get",
    }
  );
  var dataProduct = data?.data as dataProduct;

  return (
    <AdminLayout>
      {loading ? (
        <section>Loading</section>
      ) : (
        <section className="[calc(100vh-90px)] grid">
          <div className="bg-white p-6 relative rounded-[7px]">
            <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
              <div className="flex gap-4 items-center">
                <SearchBar />
                <UsersFilter/>
                {/* <Button
                  icon={filterIcon}
                  variant="secondary"
                  children={undefined}
                /> */}
              </div>
              <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
                <Button
                  children="Export"
                  icon={exportIcon}
                  variant="secondary"
                />
              </div>
            </div>
            <div className="mt-4 bg-primary-100 rounded-t-[8px] grid border-[1px] border-neutral-300">
              <Table>
                <TableHeader>
                  <TableRow className="text-start py-[10px]">
                    {tableHeader.map((item, i) => (
                      <TableHead
                        className={`text-xs leading-6 text-black font-normal px-3 py-2`}
                        key={i}
                      >
                        {item}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-neutral-50">
                  {dataProduct.map((item: dataProduct, i: number) => (
                    <TableRow
                      className={`text-start cursor-pointer text-xs leading-6 font-normal text-neutral-900 ${
                        i % 2 != 0 ? "bg-neutral-200 " : ""
                      }`}
                      key={i}
                    >
                      <TableCell className="p-3 text-start">
                        {item.id}
                      </TableCell>
                      <TableCell
                        className="p-3 text-start flex items-center gap-3"
                        key={i}
                      >
                        <div className="w-6 rounded-full bg-slate-300 border border-black">
                          <img
                            src={item.avatar_url}
                            className="w-full rounded-full"
                          />
                        </div>
                        {item.name || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">
                        {item.username || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">
                        {item.gender || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">
                        {item.phone || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">
                        {item.email || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">
                        {item.address || "-"}
                      </TableCell>
                      <TableCell className="p-3 text-start ">-</TableCell>
                      <TableCell className={`p-3 text-start`}>
                        -
                      </TableCell>
                      <TableCell className="p-3 text-center pe-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="hover:bg-slate-300 min-w-6">
                            <img src={moreIcon} alt="more-icon" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="absolute right-5 -top-7 w-[106px] text-neutral-900">
                            <DropdownMenuItem
                              className="text-sm font-bold flex gap-2 px-4 py-[10px]"
                              onClick={() =>
                                navigate(`?user_id=${item.id}&action=edit`)
                              }
                            >
                              <img src={editIcon} className="w-5 h-5" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-sm font-bold flex gap-2 px-4 py-[10px]"
                              onClick={() => {
                                navigate(`?user_id=${item.id}`);
                              }}
                            >
                              <img src={showProfileIcon} className="w-5 h-5" />
                              Lihat
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-sm font-bold flex gap-2 px-4 py-[10px]"
                              onClick={() =>
                                navigate(`?user_id=${item.id}&action=delete`)
                              }
                            >
                              <img src={deleteIcon} className="w-5 h-5" />
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
            <Paging
              dataLength={data?.data.length}
              amouthDataDisplayed={10}
              className={"my-4"}
              setDataShow={(event: { start: number; end: number }) => {
                console.log(`Start : ${event.start} , end : ${event.end}`);
              }}
            />
          </div>
        </section>
      )}
      <Modal />
    </AdminLayout>
  );
}
