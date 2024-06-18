import SearchBar from "@/components/SearchBar/SearchBar";
import { useAppDispatch } from "@/lib/redux";
import { searchForums } from "@/lib/redux/api/forum";

export default function ForumHeader() {
  const dispatch = useAppDispatch();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(searchForums(value));
  };

  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar placeholder="Cari Forum..." onChange={onSearch} />
      </div>
    </div>
  )
}