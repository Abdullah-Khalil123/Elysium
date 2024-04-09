import { Dispatch, SetStateAction } from "react";
import style from "./addExpense.module.css";
import { Select } from "antd";
import URI from "../../../Data/API";

const addExpense = (props: {
  showExpense: Dispatch<SetStateAction<boolean>>;
}) => {
  const roomOptions = [
    { value: 0, label: "501" },
    { value: 1, label: "601" },
  ];

  var roomid: number = roomOptions[0].value,
    discrip: string,
    amount: number,
    date: string;

  async function submitExpense() {
    const uri = URI + "/api/addExpense";
    const data = {
      roomid: roomid,
      discrip: discrip,
      amount: amount,
      date: date,
    };
    await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className={style.addExpense}>
      <p>Add Expense </p>
      <span className={style.TopicNote}>
        Note only added for every Expense Item
      </span>
      <Select
        options={roomOptions}
        defaultValue={roomOptions[0]}
        className={style.Select}
      />
      <input
        type="text"
        placeholder="Discription"
        onChange={(e) => {
          discrip = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Amount"
        onChange={(e) => {
          amount = parseInt(e.target.value);
        }}
      />
      <input
        type="month"
        onChange={(e) => {
          date = e.target.value;
        }}
      />
      <div className={style.buttons}>
        <button
          onClick={() => {
            submitExpense();
            props.showExpense(false);
          }}
        >
          Create Booking
        </button>
      </div>
    </div>
  );
};

export default addExpense;
