import SearchBar from "../SearchBar/SearchBar";
import Download from "@/assets/icons/Export.svg"
import { Button } from "../ui/button";
import DataImpactChallengeFilter from "./challenges/filter";
import DataImpactOrderFilter from "./order/filter";

interface DataImpactChallengeHeadersProps {
  onFilter: (data: {
    username?: string | undefined;
    tantangan?: string | undefined;
  }) => void;
  onSearch: (value: string) => void;
}
export const DataImpactChallengeHeaders = ({ onFilter, onSearch }: DataImpactChallengeHeadersProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    onSearch(value);
  }

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar onChange={handleSearch} placeholder="Cari nama tantangan..." />
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

interface DataImpactOrderHeaderProps {
  onFilter: (data: {
    username?: string | undefined;
    productName?: string | undefined;
  }) => void;
  onSearch: (value: string) => void;
}

export const DataImpactOrderHeaders = ({ onSearch, onFilter }: DataImpactOrderHeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearch(value);
  }
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar onChange={handleSearch} placeholder="Cari Product Name..." />
        <DataImpactOrderFilter onFilter={onFilter} />
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