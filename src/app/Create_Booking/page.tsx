"use client";
import style from "./booking.module.css";
import AddExpense from "./AddExpense";
import AddBooking from "./AddBooking";
import { useState } from "react";

const createBooking = () => {
  const [showBookingDialoge, setshowBookingDialoge] = useState(false);
  const [showExpenseDialoge, setshowExpenseDialoge] = useState(false);
  return (
    <div className={style.createBooking}>
      {showBookingDialoge || showExpenseDialoge ? (
        <div
          className={style.backDrop}
          onClick={() => {
            setshowBookingDialoge(false);
            setshowExpenseDialoge(false);
          }}
        ></div>
      ) : null}
      <button
        className={style.bookingBtn}
        onClick={() => {
          setshowBookingDialoge((e) => !e);
          setshowExpenseDialoge(false);
        }}
      >
        Add Booking
      </button>
      <button
        className={style.bookingBtn}
        onClick={() => {
          setshowExpenseDialoge((e) => !e);
          setshowBookingDialoge(false);
        }}
      >
        Add Expense
      </button>
      {showBookingDialoge && <AddBooking />}
      {showExpenseDialoge && <AddExpense />}
    </div>
  );
};

export default createBooking;
