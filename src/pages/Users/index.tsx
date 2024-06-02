import AdminLayout from "@/layouts/AdminLayout";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocation, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Modal from "./modal";

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
  
   return (
    <AdminLayout>
      <section className=" bg-[#EDEDED] px-5 py-7 h-[calc(100vh-90px)] grid">
      <div className="bg-white py-6 relative rounded-[7px]">
        <div className="flex justify-between items-center px-8">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search"
              className="border-[1px] border-black rounded-3xl px-6 py-3 min-w-72"
            />
            <button className="p-[10px] rounded-[7px] border-[1px] border-black">
              Filter
            </button>
          </div>
          <div className="flex gap-[10px] items-center border-s-[1px] border-[#00000038] ps-[18px] py-1">
            <button className="p-[10px] rounded-[7px] border-[1px] border-black">
              Export
            </button>
            <button className="p-[10px] rounded-[7px] border-[1px] border-black bg-primary-300 text-white">
              Add New User
            </button>
          </div>
        </div>
        <div className="mt-[22px] mx-5 bg-[#C9C9C9] rounded-t-[7px] grid">
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
            <TableBody className="bg-[#F4F4F4]">
              {user_dummy.map((item, i) => (
                <TableRow className="text-start cursor-pointer" key={i}>
                  <TableCell className="px-1 py-3 text-start ps-10 ">
                    {item.id}
                  </TableCell>
                  <TableCell
                    className="px-1 py-3 text-start flex items-center gap-[10px]"
                    onClick={() => {
                      navigate(`/users?user_id=${item.id}`);
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
                        :
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="absolute -right-3 ">
                        <DropdownMenuItem
                          className="text-xs font-semibold"
                          onClick={() => navigate(`/users?user_id=${item.id}&action=delete`)}
                        >
                          Hapus
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-semibold" onClick={() => navigate(`/users?user_id=${item.id}&action=edit`)}>
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
        <div className="px-5 absolute bottom-3 flex justify-between items-center w-full">
          <p className="text-[12px] font-normal text-[#00000069]">
            Showing 1 to 10 of 50 entries
          </p>
          <div className="flex gap-4 items-center">
            <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white">
              Previous
            </div>
            <div className="flex gap-1 items-center">
              <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white min-w-6">
                1
              </div>
              <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white min-w-6">
                2
              </div>
              <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white min-w-6">
                3
              </div>
              <div className="p-2 text-[12px] rounded-sm bg-white text-[#00000069] min-w-6">
                ...
              </div>
              <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white min-w-6">
                9
              </div>
              <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white min-w-6">
                10
              </div>
            </div>
            <div className="p-2 text-[12px] rounded-sm bg-[#7E7E7E] text-white">
              Next
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </section>
    </AdminLayout>
  )


}
