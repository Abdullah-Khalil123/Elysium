"use client";
import style from "./style.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chartjs.register({
  CategoryScale,
  LinearScale,
  BarElement,
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
const options = {
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

const ChartComponent = () => {
  return (
    <div className={style.GraphArea}>
      <div className={style.BarGraph}>
        <p>Occupancy Statistics</p>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
