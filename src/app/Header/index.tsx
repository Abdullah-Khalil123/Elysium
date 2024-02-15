import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <div></div>
      <p>Friday, Novemever 16 2022</p>
      <button>Create Booking</button>
    </div>
  );
};

export default Header;
