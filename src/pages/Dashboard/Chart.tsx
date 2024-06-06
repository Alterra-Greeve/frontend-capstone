import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import ArrowDown from "../../assets/icons/Arrow-Right.svg";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        weight: "bold"
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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "#8E8B3F",
      backgroundColor: "#8E8B3F",
    },
    {
      label: "Mengurangi Limbah",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "#F1ED87",
      backgroundColor: "#F1ED87",
    },
    {
      label: "Mengurangi Limbah",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "#0B2923",
      backgroundColor: "#0B2923",
    },
    {
      label: "Mengurangi Limbah",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
      borderColor: "#498579",
      backgroundColor: "#498579",
    },
  ],
};

const Chart = () => {
  return (
    <section className="bg-neutral-50 h-[462px] w-full mt-[16px] p-[20px] relative">
      <div>
        <Bar options={options} data={data} height={80} />
      </div>
      <Button variant="outline" className="border-neutral-900 gap-[12px] text-neutral-900 absolute top-12 right-5">
        Option
        <div className="rotate-90">
          <ArrowDown />
        </div>
      </Button>
    </section>
  );
};

export default Chart;
