"use client";
import style from "./style.module.css";
import { Bar, Line } from "react-chartjs-2";
import URI from "@/Data/API";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Filler,
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
  Filler,
  Title,
  Tooltip,
  Legend,
});

interface OccDataType {
  Date: string;
  OccupantRate: number;
  RoomID: number;
}
interface LineDataType {
  roomID: number;
  amount: number;
  day: number;
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
  const daysInMonth = moment().daysInMonth();
  const daysArray: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }
  const [OccdataValues, setOccdataValues] = useState({
    labels: Monthlabels,
    datasets: [
      {
        data: [],
      },
    ],
  });
  const [lineDataState, setlineDataState] = useState<{
    labels: number[];
    datasets: any;
  }>({
    labels: daysArray,
    datasets: [
      {
        label: "501",
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

  function prepLineData(data: any, roomID: number) {
    data = data.filter((item: any) => item["roomID"] == roomID);
    const amountsByDay: any = [];
    for (let day = 1; day <= 31; day++) {
      amountsByDay[day] = null;
    }
    data.forEach((element: any) => {
      amountsByDay[element["day"]] = element["amount"];
    });

    return amountsByDay;
  }
  async function getMonthlyFlow() {
    try {
      const uri = `${URI}/api/getMonthlyFlow`;

      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: LineDataType[] = await response.json();
      const dataValues = {
        labels: daysArray,
        datasets: [
          {
            label: "501",
            borderColor: "#b6e9d1",
            cubicInterpolationMode: "monotone",
            spanGaps: true,
            backgroundColor: "#b6e9d149",
            fill: true,
            data: prepLineData(data, 0),
          },
          {
            label: "601",
            borderColor: "#5f9bed",
            cubicInterpolationMode: "monotone",
            spanGaps: true,
            backgroundColor: "#5f9aed38",
            fill: true,
            data: prepLineData(data, 1),
          },
        ],
      };

      setlineDataState(dataValues);
    } catch (e) {
      console.error("Error fetching occupancy data:", e);
    }
  }
  useEffect(() => {
    getOccRate();
    getMonthlyFlow();
  }, []);

  return (
    <div className={style.GraphArea}>
      <div className={style.BarGraph}>
        <p>Occupancy Statistics</p>
        {OccdataValues ? (
          <Bar data={OccdataValues} options={BarOptions} />
        ) : null}
      </div>
      <div className={style.testing}>
        <Line data={lineDataState} options={LineOptions} />
      </div>
    </div>
  );
};

export default ChartComponent;
