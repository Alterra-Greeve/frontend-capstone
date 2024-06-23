import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { filteredProducts } from "@/lib/redux/api/products";
import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";

interface FilterOptionProps {
  label: string;
  onAction: () => void;
  value: string | string[] | number | JSX.Element | JSX.Element[];
}

const FilterOption: React.FC<FilterOptionProps> = ({ label, onAction, value }) => (
  <div className="flex gap-[4px] bg-neutral-50 rounded-[8px] items-center">
    <div className="flex items-center py-[5px] px-[10px] text-neutral-900 text-[16px] font-[400] rounded-[8px] bg-secondary-500 h-full">
      {label}
    </div>
    <div className="flex gap-[4px] items-center py-[3px] px-[4px]">
      {Array.isArray(value) ? (
        value.map((item, index) => (
          <div key={index} className="flex items-center gap-1 text-xs text-neutral-500 leading-5">
            {item}
          </div>
        ))
      ) : (
        <div className="text-neutral-500 font-[400] text-[12px]">
          {value}
        </div>
      )}
      <button onClick={onAction}>
        <CloseIcon />
      </button>
    </div>
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
        <img src={impacts.find((impact) => impact.id === category)?.icon_url} className="w-[24px]" />
      ))
    },
    {
      key: "name",
      label: "Product Name",
      value: filteredData.name
    }
  ];

  return (
    <section className="mt-[16px] flex gap-[12px]">
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