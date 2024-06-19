import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { filteredUsers } from "@/lib/redux/api/users";

interface FilterOptionProps {
  label: string;
  value: string | undefined;
  onRemove: () => void;
}

const FilterOption = ({ label, value, onRemove }: FilterOptionProps) => (
  <div className="flex items-center gap-1">
    <div className="px-2.5 py-1.5 text-base leading-5 bg-secondary-500 rounded-lg font-normal text-neutral-900">
      {label}
    </div>
    <p className="text-xs text-neutral-500 leading-5">{value}</p>
    <button onClick={onRemove}>
      <CloseIcon />
    </button>
  </div>
);

const FilterItem = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state: RootState) => state.users);

  const deleteSelectedFilter = (updatedFilter: Partial<typeof filter>) => {
    dispatch(filteredUsers(updatedFilter));
  };

  const filters = [
    { label: "Name", value: filter.name, key: "name" },
    { label: "Username", value: filter.username, key: "username" },
    { label: "Gender", value: filter.gender, key: "gender" },
    { label: "Membership", value: filter.membership !== undefined ? (filter.membership ? "Yes" : "No") : "", key: "membership" },
    { label: "Hasil Pencarian", value: filter.search, key: "search" },
  ].filter(f => f.value);

  return (
    <section className="mt-4 flex gap-3">
      {filters.map(({ label, value, key }) => (
        <FilterOption
          key={key}
          label={label}
          value={value}
          onRemove={() => deleteSelectedFilter({
            ...filter,
            [key]: undefined
          })}
        />
      ))}
    </section>
  );
};

export default FilterItem;
