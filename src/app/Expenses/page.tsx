"use client";
import Table from "./Table Rooms";
import style from "./page.module.css";
import Select from "react-select";
import { DatePicker } from "antd";

const Expenses = () => {
  const options = [
    { value: 501, label: "501" },
    { value: 601, label: "601" },
  ];

  return (
    <div className={style.Expenses}>
      <div className={style.roomSelectors}>
        <Select
          options={options}
          className={style.Select}
          defaultValue={options[0]}
          onChange={() => {}}
        />
        <DatePicker picker="month" onChange={() => {}} />
      </div>
      <Table />
    </div>
  );
};

export default Expenses;
