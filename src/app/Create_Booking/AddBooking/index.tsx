import { Select } from "antd";
import style from "./AddBooking.module.css";
import { Dispatch, SetStateAction } from "react";
const AddBooking = (props: {
  showBooking: Dispatch<SetStateAction<boolean>>;
}) => {
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
        <button
          onClick={() => {
            props.showBooking(false);
          }}
        >
          Create Booking
        </button>
      </div>
    </div>
  );
};

export default AddBooking;
