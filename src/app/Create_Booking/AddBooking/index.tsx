import { Select } from "antd";
import style from "./AddBooking.module.css";
import { Dispatch, SetStateAction, useState } from "react";
import uri from "../../../Data/API";
const AddBooking = (props: {
  showBooking: Dispatch<SetStateAction<boolean>>;
}) => {
  const roomOptions = [
    { value: 0, label: "501" },
    { value: 1, label: "601" },
  ];
  var roomID: number = roomOptions[0].value,
    date: string | null,
    amount: string | null;
  async function handleSubmitData() {
    const data = {
      roomid: roomID,
      date: date,
      amount: amount,
    };

    const URI = uri + "/api/addBooking";
    const response = await fetch(URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <div className={style.booking}>
      <h4>Add New Booking</h4>
      <div className={style.SelectDate}>
        <Select
          className={style.select}
          defaultValue={{ value: 0, label: "501" }}
          options={roomOptions}
          onChange={(e: any) => {
            roomID = e;
          }}
        />
        <input
          type="date"
          className={style.DatePicker}
          onChange={(e) => {
            date = e.target.value;
          }}
        />
      </div>
      <input
        className={style.inputAmount}
        placeholder="Amount"
        type="number"
        onChange={(e) => {
          amount = e.target.value;
        }}
      />
      <div className={style.buttons}>
        <button
          onClick={() => {
            props.showBooking(false);
            handleSubmitData();
          }}
        >
          Create Booking
        </button>
      </div>
    </div>
  );
};

export default AddBooking;
