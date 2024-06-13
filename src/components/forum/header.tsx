import SearchBar from "../SearchBar/SearchBar";

const ForumHeader = () => {
  return (
    <div className="flex justify-between items-center border-b-[0.3px] border-neutral-300 pb-4">
      <div className="flex gap-4 items-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default ForumHeader;
