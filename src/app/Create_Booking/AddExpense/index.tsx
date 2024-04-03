import { Dispatch, SetStateAction } from "react";
import style from "./addExpense.module.css";
import { Select } from "antd";

const addExpense = (props: {
  showExpense: Dispatch<SetStateAction<boolean>>;
}) => {
  const roomOptions = [
    { value: 0, label: "501" },
    { value: 1, label: "601" },
  ];
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
      <input type="text" placeholder="Discription" />
      <input type="text" placeholder="Amount" />
      <input type="month" />
      <div className={style.buttons}>
        <button onClick={() => props.showExpense(false)}>Create Booking</button>
      </div>
    </div>
  );
};

export default addExpense;
