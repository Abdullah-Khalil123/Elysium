import React from "react";
import Overview from "./Overview";
import RoomsD from "./Rooms";
import style from "./dashboard.module.css";
import Chart from "./Bar Chart";
const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <Overview />
      <RoomsD />
      <Chart />
    </div>
  );
};

export default Dashboard;
