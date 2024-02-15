import React from "react";
import style from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={style.overview}>
      <h2>Overview</h2>
      <div className={style.overviewItems}>
        <OverviewItem />
        <OverviewItem />
        <OverviewItem />
        <OverviewItem />
      </div>
    </div>
  );
};

const OverviewItem = () => {
  return (
    <div className={style.overviewItem}>
      <div>
        <p>Todays</p>
        <h4>Cheak-In</h4>
      </div>
      <h3>23</h3>
    </div>
  );
};

export default Overview;
