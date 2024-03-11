"use client";
import style from "./Guest.module.css";
import Table from "./Table Rooms";
import Select from "react-select";
import { DatePicker } from "antd";
import { useState } from "react";
import moment from "moment";
interface ExpenseDataType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}
const Guest = () => {
  const [ExpenseData, setExpenseData] = useState<ExpenseDataType[]>([]);
  async function getExpenses(room: any, today: moment.Moment) {
    const uri = `http://localhost:3001/api/Rents?room=${room}&month=${
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

  const Roomoptions = [
    { value: 1, label: "501" },
    { value: 2, label: "601" },
  ];
  const [today, settoday] = useState(moment());
  const [roomSelected, setroomSelected] = useState<number>();
  function handleRoomChange(room: any) {
    if (room != null) {
      setroomSelected(room.value);
      getExpenses(room.value, today);
    }
  }
  function handleMonthChange(month: any) {
    if (month != null) {
      settoday(month);
      getExpenses(roomSelected, month);
    }
  }

  return (
    <div className={style.Guest}>
      <div>
        <div className={style.roomSelectors}>
          <Select
            options={Roomoptions}
            className={style.Select}
            defaultValue={Roomoptions[0]}
            onChange={handleRoomChange}
          />
          <DatePicker
            picker="month"
            defaultValue={today}
            onChange={handleMonthChange}
          />
        </div>
        <Table ExpanseData={ExpenseData} />
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
