import CloseIcon from "@/assets/icons/Iconly/Close Square.svg";
import { RootState, useAppDispatch, useAppSelector } from "@/lib/redux";
import { filterChallenges } from "@/lib/redux/api/challenges";

import CatEarth from '@/assets/icons/catEarth.svg';
import CatMoney from '@/assets/icons/catMoney.svg';
import CatBrain from '@/assets/icons/catBrains.svg';
import CatRecycle from '@/assets/icons/catRecycle.svg';

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
  difficulty?: string[];
  exp_min?: string;
  exp_max?: string;
  coin_min?: string;
  coin_max?: string;
  helper?: string[];
  [key: string]: string | string[] | number | undefined;
}

interface FilterItemsChallenge {
  key: keyof FilterState;
  label: string;
  value: string | string[] | number | JSX.Element | JSX.Element[] | undefined;
}

const parsingHelper = (helper: string) => {
  switch (helper.toLowerCase()) {
    case "mengurangi pemanasan global":
      return <CatEarth />;
    case "hemat uang":
      return <CatMoney />;
    case "perluas wawasan":
      return <CatBrain />;
    case "mengurangi limbah":
      return <CatRecycle />;
    default:
      return null;
  }
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

export default function FilterItemsChallenge() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state: RootState) => state.challenges);

  const deleteSelectedFilter = (key: keyof FilterState) => {
    if (key === "exp") {
      dispatch(filterChallenges({ ...filter, exp_min: undefined, exp_max: undefined }));
    } else if (key === "coin") {
      dispatch(filterChallenges({ ...filter, coin_min: undefined, coin_max: undefined }));
    } else {
      dispatch(filterChallenges({ ...filter, [key]: undefined }));
    }
  };

  const filters: FilterItemsChallenge[] = [
    {
      key: 'difficulty',
      label: 'Level',
      value: filter.difficulty
    },
    {
      key: 'exp',
      label: 'Exp',
      value: formatRange(filter.exp_min, filter.exp_max)
    },
    {
      key: 'coin',
      label: 'Koin',
      value: formatRange(filter.coin_min, filter.coin_max)
    },
    {
      key: 'helper',
      label: 'Membantu',
      value: filter.helper ? filter.helper.map(parsingHelper) as JSX.Element[] : undefined,
    },
    {
      key: 'title',
      label: 'Judul Tantangan',
      value: filter.title
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
