import SearchBar from "@/components/SearchBar/SearchBar";

import ExportIcon from "@/assets/icons/Export.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChallengesProducts from "./filter";
import { searchProducts } from "@/lib/redux/api/products";
import { useAppDispatch } from "@/lib/redux";

export const HeaderProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    dispatch(searchProducts(value));
  }

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar placeholder="Cari Nama Product..." onChange={onSearch} />
        <ChallengesProducts />
      </div>
      <div className="flex gap-[10px] items-center ps-[18px] py-1 ">
        <Button variant="outline_primary" className="gap-2 w-fit rounded-lg px-2 text-primary-500">
          <ExportIcon />
          Export
        </Button>
        <Button className="gap-2 w-fit rounded-lg px-2" onClick={() => navigate("add")}>
          <PlusIcon />
          Tambah Produk Baru
        </Button>
      </div>
    </div>
  )
}