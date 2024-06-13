import { Button } from "@/components/ui/button";

import ExportIcon from "@/assets/icons/Export.svg";
import SearchBar from "@/components/SearchBar/SearchBar";

import UsersFilter from "@/components/users/filter";

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar />
        <UsersFilter />
      </div>
      <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <ExportIcon />
          Export
        </Button>
      </div>
    </div>
  )
}
