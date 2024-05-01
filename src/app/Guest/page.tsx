"use client";
import style from "./Guest.module.css";
import Table from "./Table Rooms";
import Select from "antd/es/select";
import DatePicker from "antd/es/date-picker";
import { useEffect, useState } from "react";
// import { fillMissingDates, generateDates } from "./dataHandling";
import Loading from "../Loader";
import URI from "../../Data/API";
import moment from "moment";
interface RentDataType {
  rentID: number;
  roomID: number;
  RoomNum: number;
  amount: number;
  currency: number;
  Date: string;
}
const Guest = () => {
  const [roomSelected, setroomSelected] = useState<number>();
  const [RentData, setRentData] = useState<RentDataType[]>([]);
  const [today, settoday] = useState(moment());
  const [isLoading, setisLoading] = useState(true);
  async function getRents(room: any, today: moment.Moment) {
    try {
      setisLoading(true);
      const uri = `${URI}/api/Rents?room=${room}&month=${
        today.month() + 1
      }&year=${today.year()}`;

      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setRentData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }

  const Roomoptions = [
    { value: 0, label: "501" },
    { value: 1, label: "601" },
  ];
  function handleRoomChange(room: any) {
    if (room != null) {
      setroomSelected(room);
      getRents(room, today);
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
            value={today}
            defaultValue={today}
            onChange={handleMonthChange}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <Table ExpanseData={RentData} isLoading={false} />
        )}
      </div>
      <div className={style.GuestTableSelectors}>
        <button onClick={handlePrev}>Previous</button>
        <div className={style.pageGuestSelectors}>
          {/* <p>1</p>
          <p>2</p> */}
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Guest;
