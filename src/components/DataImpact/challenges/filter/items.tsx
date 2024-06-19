import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";

interface FilterOptionProps {
  label: string;
  onAction: () => void;
  value: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({ label, onAction, value }) => (
  <div className="flex items-center gap-1 bg-white p-0 pe-2 rounded-xl">
    <div className="flex items-center px-[20px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900 h-full">
      {label}
    </div>
    <div className="flex gap-2 py-2 px-2">
      <div className="flex items-center gap-1 text-xs text-neutral-500 leading-5">
        {value}
      </div>
    </div>
    <button onClick={onAction}>
      <CloseIcon />
    </button>
  </div>
);

interface FilterState {
  username?: string | undefined;
  tantangan?: string | undefined;
}

interface FilterItemsImpactChallenge {
  filter: FilterState | undefined;
  onDeleteFilter: (key: keyof FilterState) => void;
}

export default function FilterItemsImpactChallenge({ filter, onDeleteFilter }: FilterItemsImpactChallenge) {
  return (
    <section className="mt-4 flex gap-3">
      {filter !== undefined && filter.username && (
        <FilterOption
          label="Username"
          onAction={() => onDeleteFilter("username")}
          value={filter.username}
        />
      )}

      {filter !== undefined && filter.tantangan && (
        <FilterOption
          label="Tantangan"
          onAction={() => onDeleteFilter("tantangan")}
          value={filter.tantangan}
        />
      )}
    </section>
  )
}
