"use client";
import Table from "./Table Rooms";
import style from "./page.module.css";
import Select from "antd/es/select";
import DatePicker from "antd/es/date-picker";
import { useEffect, useState } from "react";
import moment from "moment";
interface ExpenseDataType {
  Date: string;
  RoomID: number;
  ExpenseItem: string;
  ExpenseAmount: number;
}
const Expenses = () => {
  const [today, settoday] = useState(moment());
  const [roomSelected, setroomSelected] = useState<number>();
  const [ExpenseData, setExpenseData] = useState<ExpenseDataType[]>([]);
  const RoomOptions = [
    { value: 1, label: "501" },
    { value: 2, label: "601" },
  ];

  async function getExpenses(room: any, today: moment.Moment) {
    const uri = `https://muddy-jewelry-yak.cyclic.app/api/Expenses?room=${room}&month=${
      today.month() + 1
    }&year=${today.year()}`;
    console.log(uri);
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setExpenseData(data);
    console.log(ExpenseData);
  }

  function handleRoomChange(room: any) {
    if (room != null) {
      setroomSelected(room);
      getExpenses(room, today);
    }
  }
  function handleMonthChange(month: any) {
    if (month != null) {
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
      <Table expenseData={ExpenseData} />
    </div>
  );
};

export default Expenses;
