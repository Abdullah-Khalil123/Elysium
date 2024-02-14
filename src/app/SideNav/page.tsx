"use client";
import React, { useState } from "react";
import style from "./SideNav.module.css";
import Link from "next/link";
const Footer = () => {
  const [extended, setextended] = useState(true);

  const list = ["Dashboard", "Front desk", "Guest", "Rooms", "Deal", "Rate"];
  return (
    <>
      {extended ? null : (
        <NavButton value={extended} setState={setextended} isColl={false} />
      )}
      <div className={`${style.SideNav} ${extended ? null : style.Extended}`}>
        <h2 className={style.logo}>
          <NavButton value={extended} setState={setextended} isColl={true} />
          Elysium
        </h2>
        <ul className={style.listBox}>
          {list.map((item) => (
            <Link href={"/" + item} className={style.ahref}>
              <li key={item}>
                <div className={style.Icons}></div>
                <p>{item}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

interface NavButtonProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
  isColl: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ setState, value, isColl }) => {
  return (
    <div
      className={`${style.button} ${!isColl ? style.scaler : null}`}
      onClick={() => setState(!value)}
      style={!value ? { top: "50px", left: "45px" } : {}}
    >
      <div className={style.SideNavButton}></div>
    </div>
  );
};

export default Footer;
