import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { filteredProducts } from "@/lib/redux/api/products";
import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";

interface FilterOptionProps {
  label: string;
  onAction: () => void;
  value: string | string[] | number | JSX.Element | JSX.Element[];
}

const FilterOption: React.FC<FilterOptionProps> = ({ label, onAction, value }) => (
  <div className="flex items-center gap-1 bg-white p-0 pe-2 rounded-xl">
    <div className="flex items-center px-[20px] text-base leading-5 bg-secondary-500 rounded-[8px] font-normal text-neutral-900 h-full">
      {label}
    </div>
    <div className="flex gap-2 py-2 px-2">
      {Array.isArray(value) ? (
        value.map((item, index) => (
          <div key={index} className="flex items-center gap-1 text-xs text-neutral-500 leading-5">
            {item}
          </div>
        ))
      ) : (
        <div className="flex items-center gap-1 text-xs text-neutral-500 leading-5">
          {value}
        </div>
      )}
    </div>
    <button onClick={onAction}>
      <CloseIcon />
    </button>
  </div>
);

interface FilterState {
  harga_min: number;
  harga_max: number;
  stok_min: number;
  stok_max: number;
  koin_min: number;
  koin_max: number;
  category: string[];
  [key: string]: string | string[] | number | undefined;
}

interface FilterItemsChallenge {
  key: keyof FilterState;
  label: string;
  value: string | string[] | number | JSX.Element | JSX.Element[] | undefined;
}

const formatRange = (min?: number, max?: number) => {
  switch (true) {
    case min !== undefined && max !== undefined:
      return `${min} - ${max}`;
    case min !== undefined:
      return `>= ${min}`;
    case max !== undefined:
      return `<= ${max}`;
    default:
      return "";
  }
};

export default function FilterItemsProduct() {
  const dispatch = useAppDispatch();

  const { filteredData } = useAppSelector((state: RootState) => state.products);
  const { data: impacts } = useAppSelector((state: RootState) => state.impact);

  const deleteSelectedFilter = (key: keyof FilterState) => {
    if (key === "harga") {
      dispatch(filteredProducts({ ...filteredData, harga_min: undefined, harga_max: undefined }));
    } else if (key === "koin") {
      dispatch(filteredProducts({ ...filteredData, koin_min: undefined, koin_max: undefined }));
    } else if (key === "stok") {
      dispatch(filteredProducts({ ...filteredData, stok_min: undefined, stok_max: undefined }));
    } else {
      dispatch(filteredProducts({ ...filteredData, [key]: undefined }));
    }
  };

  const filters: FilterItemsChallenge[] = [
    {
      key: "harga",
      label: "Harga",
      value: formatRange(filteredData.harga_min, filteredData.harga_max)
    },
    {
      key: "stok",
      label: "Stok",
      value: formatRange(filteredData.stok_min, filteredData.stok_max)
    },
    {
      key: "koin",
      label: "Koin",
      value: formatRange(filteredData.koin_min, filteredData.koin_max)
    },
    {
      key: "category",
      label: "Kategori",
      value: filteredData.category?.map((category) => (
        <img src={impacts.find((impact) => impact.id === category)?.icon_url} className="w-8" />
      ))
    },
    {
      key: "name",
      label: "Nama",
      value: filteredData.name
    }
  ];

  return (
    <section className="mt-4 flex gap-3">
      {filters.map(({ key, label, value }) => (
        value !== undefined && value !== "" && (
          <FilterOption
            key={key}
            label={label}
            value={value}
            onAction={() => deleteSelectedFilter(key)}
          />
        )
      ))}
    </section>
  )
}