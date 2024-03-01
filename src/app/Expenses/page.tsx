import Table from "./Table Rooms";
import style from "./page.module.css";

const Expenses = () => {
  return (
    <div className={style.Expenses}>
      <div className={style.roomSelectors}>
        <input type="text" placeholder="Search by Room Number" />
      </div>
      <Table />
    </div>
  );
};

export default Expenses;
