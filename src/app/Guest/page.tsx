"use client";
import style from "./Guest.module.css";
import Table from "./Table Rooms";
import Select from "react-select";
import { DatePicker } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";
interface RentDataTypeType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}
const Guest = () => {
  const [roomSelected, setroomSelected] = useState<number>();
  const [RentDataType, setRentDataType] = useState<RentDataTypeType[]>([]);
  const [today, settoday] = useState(moment());
  async function getRents(room: any, today: moment.Moment) {
    const uri = `https://fantastic-cyan-loincloth.cyclic.app/api/Rents?room=${room}&month=${
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
    setRentDataType(data);
    console.log(RentDataType);
  }

  const Roomoptions = [
    { value: 0, label: "501" },
    { value: 1, label: "601" },
  ];
  function handleRoomChange(room: any) {
    if (room != null) {
      setroomSelected(room.value);
      getRents(room.value, today);
    }
  }
  function handleMonthChange(month: any) {
    if (month != null) {
      settoday(month);
      getRents(roomSelected, month);
    }
  }
  useEffect(() => {
    setroomSelected(Roomoptions[0].value);
    getRents(Roomoptions[0].value, today);
  }, []);

  function handleNext() {
    const nextMonth = moment(today).add(1, "month");
    settoday(nextMonth);
    getRents(roomSelected, nextMonth);
  }
  function handlePrev() {
    const nextMonth = moment(today).add(-1, "month");
    settoday(nextMonth);
    getRents(roomSelected, nextMonth);
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
        <Table ExpanseData={RentDataType} />
      </div>
      <div className={style.GuestTableSelectors}>
        <button onClick={handlePrev}>Previous</button>
        <div className={style.pageGuestSelectors}>
          <p>1</p>
          <p>2</p>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Guest;
