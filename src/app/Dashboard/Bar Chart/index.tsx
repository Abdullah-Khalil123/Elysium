"use client";
import style from "./style.module.css";
import { Bar, Line } from "react-chartjs-2";
import URI from "@/Data/API";
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
import { useEffect, useState } from "react";
import moment from "moment";
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

interface OccDataType {
  Date: string;
  OccupantRate: number;
  RoomID: number;
}
const Monthlabels = [
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
];

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

const daysInMonth = moment().daysInMonth();
const daysArray = [];
for (let i = 1; i <= daysInMonth; i++) {
  daysArray.push(i);
}
const LineData = {
  labels: daysArray,
  datasets: [
    {
      label: "data",
      data: [500, 600, null, 500, 500],
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
  let dataValues = {
    labels: Monthlabels,
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "",
        borderRadius: 5,
      },
    ],
  };
  const [OccdataValues, setOccdataValues] = useState({
    labels: Monthlabels,
    datasets: [
      {
        data: [],
      },
    ],
  });

  async function getOccRate() {
    try {
      const uri = `${URI}/api/getOccupentRate`;
      const response = await fetch(uri);
      const data = await response.json();
      const newData = {
        labels: Monthlabels,
        datasets: [
          {
            data: data
              .map((e: OccDataType) => {
                if (e["RoomID"].toString() === "0") {
                  return e["OccupantRate"];
                }
                return null;
              })
              .filter((rate: any) => rate !== null),
            backgroundColor: "#b6e9d1",
            borderRadius: 5,
            label: 501,
          },
          {
            data: data
              .map((e: OccDataType) => {
                if (e["RoomID"].toString() === "1") {
                  return e["OccupantRate"];
                }
                return null;
              })
              .filter((rate: any) => rate !== null),
            backgroundColor: "#5f9bed",
            borderRadius: 5,
            label: 601,
          },
        ],
      };
      setOccdataValues(newData);
    } catch (error) {
      console.error("Error fetching occupancy data:", error);
    }
  }

  useEffect(() => {
    getOccRate();
  }, []);

  return (
    <div className={style.GraphArea}>
      <div className={style.BarGraph}>
        <p>Occupancy Statistics</p>
        {dataValues ? <Bar data={OccdataValues} options={BarOptions} /> : null}
      </div>
      <div className={style.testing}>
        <Line data={LineData} options={LineOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
