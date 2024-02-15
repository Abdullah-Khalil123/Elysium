import React from "react";
import Overview from "./Overview";
import RoomsD from "./Rooms";
import style from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <Overview />
      <RoomsD />
    </div>
  );
};

export default Dashboard;
