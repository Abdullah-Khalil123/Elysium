import { Dispatch, SetStateAction } from "react";
import style from "./addExpense.module.css";

const addExpense = (props: {
  showExpense: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={style.addExpense}>
      <p>Add Expense</p>
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
