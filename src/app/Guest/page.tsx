import style from "./Guest.module.css";
import Table from "./Table Rooms";

const Guest = () => {
  return (
    <div className={style.Guest}>
      <div>
        <div className={style.roomSelectors}>
          <button>501</button>
          <button>601</button>
        </div>
        <Table />
      </div>
      <div className={style.GuestTableSelectors}>
        <button>Previous</button>
        <div className={style.pageGuestSelectors}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Guest;
