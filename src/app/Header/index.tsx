import style from "./Header.module.css";
import Link from "next/link";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = String(date.getDate()).padStart(2, "0");

  return (
    <div className={style.Header}>
      <div></div>
      <p>
        {daysOfWeek[date.getDay()]}, {months[month] + " " + day + " " + year}
      </p>
      {/* <button>Create Booking</button> */}
      <Link className={style.buttonCreate} href={"/Create_Booking"}>
        <p>Create Booking</p>
      </Link>
    </div>
  );
};

export default Header;
