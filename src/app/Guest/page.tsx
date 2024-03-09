"use client";
import style from "./Guest.module.css";
import Table from "./Table Rooms";
import Select from "react-select";
import { DatePicker } from "antd";
import { useState } from "react";

const Guest = () => {
  const options = [
    { value: "501", label: "501" },
    { value: "601", label: "601" },
  ];

  const [dateNow, setdateNow] = useState(new Date());

  return (
    <div className={style.Guest}>
      <div>
        <div className={style.roomSelectors}>
          <Select options={options} className={style.Select} />
          <DatePicker picker="month" />
          {/* <input type="text" placeholder="Search by Room Number" /> */}
        </div>
        <Table />
      </div>
      <div className={style.GuestTableSelectors}>
        <button>Previous</button>
        <div className={style.pageGuestSelectors}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Guest;
