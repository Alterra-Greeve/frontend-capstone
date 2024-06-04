import AdminLayout from "@/layouts/AdminLayout";
import plusIcon from "@/assets/icons/plus.svg";
import exportIcon from "@/assets/icons/Export.svg"
import searchIcon from "@/assets/icons/Search.svg"
import moreIcon from "@/assets/icons/More.svg"

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

  const user_dummy = [
    {
      id: 422344,
      name: "Kaze User",
      username: "Kaze",
      no_telp: "087000000000",
      email: "users@kzquandary.my.id",
      address: "Cimahi",
      gender: "Laki-laki",
      membership: "Yes",
      create_at: "01/06/2024",
    },
    {
      id: 564576,
      name: "Budi Utomo",
      username: "Utomo",
      no_telp: "087000000000",
      email: "budi@utomo.my.id",
      address: "Kediri",
      gender: "Laki-laki",
      membership: "No",
      create_at: "01/06/2024",
    },
  ];

  const navigate = useNavigate();

  // const { data , error ,loading } = useFetch("admin/users/5f2f3a2f-dcb4-42ff-9d5e-c636a3aa25f0" , {method: "get"})

  // console.log(data);
  // console.log(error);
  

  return (
    <AdminLayout>
      <section className=" bg-[#EDEDED] px-5 py-7 h-[calc(100vh-90px)] grid">
        <div className="bg-white py-6 relative rounded-[7px]">
          <div className="flex justify-between items-center px-8">
            <div className="flex gap-4 items-center">
              <SearchBar/>
              <Button children="Filter" icon={searchIcon} variant="secondary" />
              {/* <input
                type="text"
                placeholder="Search"
                className="border-[1px] border-black rounded-3xl px-6 py-3 min-w-72"
              /> */}
              {/* <button className="p-[10px] rounded-[7px] border-[1px] border-black">
                Filter
              </button> */}
            </div>
            <div className="flex gap-[10px] items-center border-s-[1px] border-[#00000038] ps-[18px] py-1 ">
             <Button children="Export" icon={exportIcon} variant="secondary" />
              <Button children="Add New User" icon={plusIcon} variant="primary" />
            </div>
          </div>
          <div className="mt-[22px] mx-5 bg-primary-100 rounded-t-[7px] grid border-[1px] border-neutral-300">
            <Table>
              <TableHeader>
                <TableRow className="text-start py-[10px]">
                  {tableHeader.map((item, i) => (
                    <TableHead
                      className={`text-black font-bold p-1 ${
                        i == 0 ? "ps-10" : ""
                      }`}
                      key={i}
                    >
                      {item}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody className="bg-neutral-50">
                {user_dummy.map((item, i) => (
                  <TableRow
                    className={`text-start cursor-pointer ${
                      i % 2 != 0 ? "bg-neutral-200 " : ""
                    }`}
                    key={i}
                  >
                    <TableCell className="px-1 py-3 text-start ps-10 ">
                      {item.id}
                    </TableCell>
                    <TableCell
                      className="px-1 py-3 text-start flex items-center gap-[10px]"
                      onClick={() => {
                        navigate(`?user_id=${item.id}`);
                      }}
                      key={i}
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-300 border border-black"></div>
                      {item.name}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.username}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.gender}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.no_telp}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.email}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.address}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-start ">
                      {item.create_at}
                    </TableCell>
                    <TableCell
                      className={`px-1 py-3 text-start  ${
                        item.membership.toLocaleLowerCase() == "no"
                          ? "text-[#C33030]"
                          : "text-[#2FB31D]"
                      }`}
                    >
                      {item.membership}
                    </TableCell>
                    <TableCell className="px-1 py-3 text-center pe-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="hover:bg-slate-300 min-w-6">
                          <img src={moreIcon} alt="more-icon" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -right-3 ">
                          <DropdownMenuItem
                            className="text-xs font-semibold"
                            onClick={() =>
                              navigate(
                                `?user_id=${item.id}&action=delete`
                              )
                            }
                          >
                            Hapus
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-xs font-semibold"
                            onClick={() =>
                              navigate(`?user_id=${item.id}&action=edit`)
                            }
                          >
                            Edit
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
            dataLength={19}
            amouthDataDisplayed={10}
            className={"absolute bottom-0"}
            setDataShow={(event: { start: number; end: number }) => {
              console.log(`Start : ${event.start} , end : ${event.end}`);
            }}
          />
        </div>

        <Modal />
      </section>
    </AdminLayout>
  );
}
