import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";

const FilterItem = ({ filter, setFilter }: { filter: any; setFilter: any }) => {
  return (
    <section className="mt-4 flex gap-3">
      {filter?.name ? (
        <div className="flex items-center gap-1">
          <div className="px-[10px] py-[5px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900">
            Name
          </div>
          <p className="text-xs text-neutral-500 leading-5">{filter.name}</p>
          <button
            onClick={() => {
              setFilter({ ...filter, name: "" });
            }}
          >
            <CloseIcon />
          </button>
        </div>
      ) : (
        ""
      )}
      {filter?.username ? (
        <div className="flex items-center gap-1">
          <div className="px-[10px] py-[5px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900">
            Username
          </div>
          <p className="text-xs text-neutral-500 leading-5">
            {filter.username}
          </p>
          <button
            onClick={() => {
              setFilter({ ...filter, username: "" });
            }}
          >
            <CloseIcon />
          </button>
        </div>
      ) : (
        ""
      )}
      {filter?.gender.length >= 1
        ? filter.gender.map((item: any, i: number) => (
            <div className="flex items-center gap-1" key={i}>
              <div className="px-[10px] py-[5px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900">
                Gender
              </div>
              <p className="text-xs text-neutral-500 leading-5">{item}</p>
              <button
                onClick={() => {
                  item == "laki-laki" && filter.gender.length !== 1
                    ? setFilter({ ...filter, gender: ["perempuan"] })
                    : filter.gender.length == 1
                    ? setFilter({ ...filter, gender: [] })
                    : setFilter({ ...filter, gender: ["laki-laki"] });
                }}
              >
                <CloseIcon />
              </button>
            </div>
          ))
        : ""}
      {filter?.membership.length >= 1
        ? filter.membership.map((item: any, i: number) => (
            <div className="flex items-center gap-1" key={i}>
              <div className="px-[10px] py-[5px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900">
                Membership
              </div>
              <p className="text-xs text-neutral-500 leading-5">{item}</p>
              <button
                onClick={() => {
                  item == "ya" && filter.membership.length !== 1
                    ? setFilter({ ...filter, membership: ["tidak"] })
                    : filter.membership.length == 1
                    ? setFilter({ ...filter, membership: [] })
                    : setFilter({ ...filter, membership: ["ya"] });
                }}
              >
                <CloseIcon />
              </button>
            </div>
          ))
        : ""}
      
    </section>
  );
};

export default FilterItem;
