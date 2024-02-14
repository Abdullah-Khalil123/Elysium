"use client";
import React, { useState } from "react";
import style from "./SideNav.module.css";
const Footer = () => {
  const [extended, setextended] = useState(true);

  const list = ["Dashboard", "Front desk", "Guest", "Rooms", "Deal", "Rate"];
  return (
    <>
      {extended ? null : <NavButton value={extended} setState={setextended} />}
      <div className={`${style.SideNav} ${extended ? null : style.Extended}`}>
        <h2 className={style.logo}>
          <NavButton value={extended} setState={setextended} />
          Elysium
        </h2>
        <ul className={style.listBox}>
          {list.map((item) => (
            <li>
              <div className={style.Icons}></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
interface NavButtonProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ setState, value }) => {
  return (
    <div
      className={style.button}
      onClick={() => setState(!value)}
      style={!value ? { top: "50px", left: "50px" } : {}}
    >
      <div className={style.SideNavButton}></div>
    </div>
  );
};

export default Footer;
