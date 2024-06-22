/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button } from "@/components/ui/button";
import ArrowDown from "../../assets/icons/Arrow-Right.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      align: "center",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: true,
      text: "Grafik Dampak",
      align: "start",
      font: {
        size: 24,
        weight: "bold",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels,
  datasets: [
    {
      label: "Hemat Uang",
      data: [] as number[],
      borderColor: "#8E8B3F",
      backgroundColor: "#8E8B3F",
    },
    {
      label: "Mengurangi Limbah",
      data: [] as number[],
      borderColor: "#F1ED87",
      backgroundColor: "#F1ED87",
    },
    {
      label: "Perluas Wawasan",
      data: [] as number[],
      borderColor: "#0B2923",
      backgroundColor: "#0B2923",
    },
    {
      label: "Mengurangi Pemanasan Global",
      data: [] as number[],
      borderColor: "#498579",
      backgroundColor: "#498579",
    },
  ],
};

interface yearItemProps {
  label: number;
}

const yearItem: yearItemProps[] = [{ label: 2024 }];

const Chart = ({ dataMonthlyImpact }: any) => {
  const [chartData, setChartData] = useState(data);
  useEffect(() => {
    const MPG: number[] = [];
    const HU: number[] = [];
    const ML: number[] = [];
    const PW: number[] = [];
    dataMonthlyImpact.forEach((element: { point: any[] }) => {
      MPG.push(element.point[0].point);
    });
    dataMonthlyImpact.forEach((element: { point: any[] }) => {
      HU.push(element.point[1].point);
    });
    dataMonthlyImpact.forEach((element: { point: any[] }) => {
      ML.push(element.point[2].point);
    });
    dataMonthlyImpact.forEach((element: { point: any[] }) => {
      PW.push(element.point[3].point);
    });
    setChartData({
      labels: labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: HU, // Data dari API
        },
        {
          ...chartData.datasets[1],
          data: ML, // Data dari API
        },
        {
          ...chartData.datasets[2],
          data: PW, // Data dari API
        },
        {
          ...chartData.datasets[3],
          data: MPG, // Data dari API
        },
      ],
    });
  }, []);

  const [year, yearSet] = useState(2024);

  const handleYearStatiticClick = (year: number) => {
    yearSet(year);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log(dataMonthlyImpact);

  return (
    <section className="bg-neutral-50 w-full h-auto mt-[16px] p-[20px] relative">
      <div>
        <Bar options={options} data={chartData} height={80} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-neutral-50 absolute top-12 right-5">
          <Button
            onClick={toggleDropdown}
            variant="outline"
            className="border-neutral-900 w-[140px] h-[56px] gap-[12px] flex justify-between text-neutral-900 "
          >
            {year}
            <div className={`${isOpen === false ? "rotate-90" : "-rotate-90"}`}>
              <ArrowDown />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-neutral-50 w-[140px]">
          {yearItem.map((item, index) => (
            <div key={index}>
              <DropdownMenuItem
                onClick={() => handleYearStatiticClick(item.label)}
              >
                {item.label}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default Chart;
