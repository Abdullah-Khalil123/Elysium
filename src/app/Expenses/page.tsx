"use client";
import Table from "./Table Rooms";
import style from "./page.module.css";
import Select from "antd/es/select";
import DatePicker from "antd/es/date-picker";
import { useEffect, useState } from "react";
import Loading from "../Loader";
import URI from "@/Data/API";
import moment from "moment";
interface ExpenseDataType {
  Date: string;
  RoomID: number;
  ExpenseItem: string;
  ExpenseAmount: number;
}
const RoomOptions = [
  { value: 0, label: "501" },
  { value: 1, label: "601" },
];
const Expenses = () => {
  const [today, settoday] = useState(moment());
  const [ExpenseData, setExpenseData] = useState<ExpenseDataType[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const [roomSelected, setroomSelected] = useState<number>(
    RoomOptions[0].value
  );

  async function getExpenses(room: any, today: moment.Moment) {
    try {
      const uri = `${URI}/api/Expenses?room=${room}&month=${
        today.month() + 1
      }&year=${today.year()}`;
      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setExpenseData(data);
    } catch (error) {
      console.error("Error Getting Expenses", error);
    } finally {
      setisLoading(false);
    }
  }

  function handleRoomChange(room: any) {
    if (room != null) {
      setisLoading(true);
      setroomSelected(room);
      getExpenses(room, today);
    }
  }
  function handleMonthChange(month: any) {
    if (month != null) {
      setisLoading(true);
      settoday(month);
      getExpenses(roomSelected, month);
    }
  }
  useEffect(() => {
    getExpenses(RoomOptions[0].value, today);
  }, [1]);
  return (
    <div className={style.Expenses}>
      <div className={style.roomSelectors}>
        <Select
          options={RoomOptions}
          className={style.Select}
          defaultValue={RoomOptions[0]}
          onChange={handleRoomChange}
        />
        <DatePicker
          picker="month"
          defaultValue={today}
          onChange={handleMonthChange}
        />
      </div>
      {isLoading ? <Loading /> : <Table expenseData={ExpenseData} />}
    </div>
  );
};

export default Expenses;
