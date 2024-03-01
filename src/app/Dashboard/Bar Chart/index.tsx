"use client";
import style from "./style.module.css";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
Chartjs.register({
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
});

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ],
  datasets: [
    {
      label: "501",
      data: [65, 59, 80, 81, 56, 55, 40, 56, 23, 87, 23, 67, 23],
      backgroundColor: "#5f9bed",
      borderRadius: 5,
    },
    {
      label: "601",
      data: [65, 59, 80, 81, 56, 55, 40, 56, 23, 87, 23, 67, 23].reverse(),
      backgroundColor: "#b6e9d1",
      borderRadius: 5,
    },
  ],
};
const BarOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};
const LineData = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "data",
      data: [500, 500, 500, 500, 500],
    },
  ],
};
const LineOptions = {
  responsive: true,
  maintainAspectRatio: true,
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
  plugins: {
    title: {
      display: true,
      text: "Daily Rent",
    },
  },
};
const ChartComponent = () => {
  return (
    <div className={style.GraphArea}>
      <div className={style.BarGraph}>
        <p>Occupancy Statistics</p>
        <Bar data={data} options={BarOptions} />
      </div>
      <div className={style.testing}>
        <Line data={LineData} options={LineOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
