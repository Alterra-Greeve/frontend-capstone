import { Button } from "@/components/ui/button";

import ExportIcon from "@/assets/icons/Export.svg";
import PlusIcon from "@/assets/icons/plus.svg";

import SearchBar from "@/components/SearchBar/SearchBar";
import ChallengesFilter from "@/components/challenges/filter";

export default function ChallengesHeader() {
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar />
        <ChallengesFilter />
      </div>
      <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <ExportIcon />
          Export
        </Button>
        <Button className="gap-2 w-fit rounded-lg px-2">
          <PlusIcon />
          Tambah Tantangan Baru
        </Button>
      </div>
    </div>
  )
}
