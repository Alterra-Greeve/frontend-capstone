import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<'bar'> = {
  indexAxis: "x" as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  layout: {
    padding: { top: 50 },
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

interface BarChartProps {
  height?: number;
  width?: number;
}

export default function BarChart({ height = 80, width }: BarChartProps) {
  return (
    <Bar
      options={options}
      data={data}
      height={height}
      width={width}
    />
  )
}
