import DatePicker from "antd/es/date-picker";
import Select from "antd/es/select";
import style from "./booking.module.css";

const createBooking = () => {
  return (
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
        <DatePicker className={style.DatePicker} />
      </div>
      <input className={style.inputAmount} placeholder="Amount" type="number" />
      <div className={style.buttons}>
        <button>Cancel</button>
        <button>Create Booking</button>
      </div>
    </div>
  );
};

export default createBooking;
