"use client";
import style from "./booking.module.css";
import AddExpense from "./AddExpense";
import AddBooking from "./AddBooking";
import { useState } from "react";

const CreateBooking = () => {
  const [showBookingDialoge, setshowBookingDialoge] = useState(false);
  const [showExpenseDialoge, setshowExpenseDialoge] = useState(false);
  return (
    <div className={style.createBooking}>
      <div className={style.flex}>
        <p>Add New Room</p>
        <button className={style.bookingBtn}>+</button>
      </div>
      {showBookingDialoge || showExpenseDialoge ? (
        <div
          className={style.backDrop}
          onClick={() => {
            setshowBookingDialoge(false);
            setshowExpenseDialoge(false);
          }}
        ></div>
      ) : null}

      <div className={style.flex}>
        <p>Create a New Booking </p>
        <button
          className={style.bookingBtn}
          onClick={() => {
            setshowBookingDialoge((e) => !e);
            setshowExpenseDialoge(false);
          }}
        >
          +
        </button>
      </div>

      <div className={style.flex}>
        <p>Add Expense For a Room</p>
        <button
          className={style.bookingBtn}
          onClick={() => {
            setshowExpenseDialoge((e) => !e);
            setshowBookingDialoge(false);
          }}
        >
          +
        </button>
      </div>
      {showBookingDialoge && <AddBooking showBooking={setshowBookingDialoge} />}
      {showExpenseDialoge && <AddExpense showExpense={setshowExpenseDialoge} />}
      {}
    </div>
  );
};

export default CreateBooking;
