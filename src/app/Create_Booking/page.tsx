import Select from "antd/es/select";
import style from "./booking.module.css";
import AddExpense from "./AddExpense";

const createBooking = () => {
  return (
    <div className={style.createBooking}>
      <div className={style.booking}>
        <h4>Add New Booking</h4>
        <div className={style.SelectDate}>
          <Select
            className={style.select}
            defaultValue={{ value: 0, label: "501" }}
            options={[
              { value: 0, label: "501" },
              { value: 1, label: "601" },
            ]}
          />
          <input type="date" className={style.DatePicker} />
        </div>
        <input
          className={style.inputAmount}
          placeholder="Amount"
          type="number"
        />
        <div className={style.buttons}>
          <button>Cancel</button>
          <button>Create Booking</button>
        </div>
      </div>
      <AddExpense />
    </div>
  );
};

export default createBooking;
