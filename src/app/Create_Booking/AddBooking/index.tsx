import { Select } from "antd";
import style from "./AddBooking.module.css";
const AddBooking = () => {
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
        <input type="date" className={style.DatePicker} />
      </div>
      <input className={style.inputAmount} placeholder="Amount" type="number" />
      <div className={style.buttons}>
        {/* <button>Cancel</button> */}
        <button>Create Booking</button>
      </div>
    </div>
  );
};

export default AddBooking;
