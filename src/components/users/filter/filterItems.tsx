import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";
import { RootState } from "@/lib/redux";
import { filteredUsers } from "@/lib/redux/api/users";
import { useDispatch, useSelector } from "react-redux";

function FilterOption({
  children,
  onAction,
  value,
}: {
  children: string;
  onAction: any;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="px-[10px] py-[5px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900">
        {children}
      </div>
      <p className="text-xs text-neutral-500 leading-5">{value}</p>
      <button onClick={() => onAction()}>
        <CloseIcon />
      </button>
    </div>
  );
}

const FilterItem = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.users);

  function deleteSelectedFilter({ ...props }) {
    dispatch(filteredUsers(props));
  }

  return (
    <section className="mt-4 flex gap-3">
      {filter.name ? (
        <FilterOption
          children="Name"
          value={filter.name}
          onAction={() => {
            deleteSelectedFilter({
              name: "",
              username: filter.username,
              gender: filter.gender,
            });
          }}
        />
      ) : (
        ""
      )}
      {filter.username ? (
        <FilterOption
          children="Username"
          value={filter.username}
          onAction={() => {
            deleteSelectedFilter({
              name: filter.name,
              username: "",
              gender: filter.gender,
            });
          }}
        />
      ) : (
        ""
      )}
      {filter.gender ? (
        <FilterOption
          children="Gender"
          value={filter.gender}
          onAction={() => {
            deleteSelectedFilter({
              name: filter.name,
              username: filter.username,
              gender: "",
            });
          }}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default FilterItem;
