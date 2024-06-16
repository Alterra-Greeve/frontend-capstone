import SearchBar from "../SearchBar/SearchBar";
import Download from "@/assets/icons/Export.svg"
import { Button } from "../ui/button";
import DataImpactChallengeFilter from "./challenges/filter";

interface DataImpactChallengeHeadersProps {
  onFilter: (data: {
    username?: string | undefined;
    tantangan?: string | undefined;
  }) => void;
}
export const DataImpactChallengeHeaders = ({ onFilter }: DataImpactChallengeHeadersProps) => {
  const handleSearch = (value: string) => {
    console.log(value)
  }
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar onChange={handleSearch} />
        <DataImpactChallengeFilter onFilter={onFilter} />
      </div>

      <div className="flex">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <Download />
          Export
        </Button>
      </div>
    </div>
  )
}