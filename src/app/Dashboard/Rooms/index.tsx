import React from "react";
import style from "./Rooms.module.css";
import icon from "../../../../public/ellipises.svg";

const RoomsDashBoard = () => {
  return (
    <div className={style.Rooms}>
      <h3>Rooms</h3>
      <div className={style.RoomsBoxes}>
        <RoomsItem />
        <RoomsItem />
        <RoomsItem />
        <RoomsItem />
      </div>
    </div>
  );
};

const RoomsItem = () => {
  return (
    <div className={style.RoomItem}>
      <div className={style.RoomItemButtonflex}>
        <p>2 Deals</p>
        <button>
          <img src={icon.src} alt="" />
        </button>
      </div>
      <h5>Single Bed</h5>
      <h4>2/30</h4>
      <h3>$ 540/ day</h3>
    </div>
  );
};

export default RoomsDashBoard;
