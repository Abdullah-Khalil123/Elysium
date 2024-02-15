"use client";
import React, { useState } from "react";
import style from "./SideNav.module.css";
import Link from "next/link";
import Icons from "./SideNav";
const SideNav = () => {
  console.log(Icons);
  const [extended, setextended] = useState(true);
  const innerWidth = window.innerWidth;
  const list2 = [
    { name: "Dashboard", icon: Icons[0] },
    { name: "Front desk", icon: Icons[1] },
    { name: "Guest", icon: Icons[2] },
    { name: "Rooms", icon: Icons[3] },
    { name: "Deal", icon: Icons[4] },
    { name: "Rate", icon: Icons[5] },
  ];
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
          {list2.map((item) => (
            <Link
              href={"/" + item.name}
              className={style.ahref}
              key={item.name}
              onClick={() => {
                innerWidth <= 700 ? setextended(false) : null;
              }}
            >
              <li>
                <div className={style.Icons}>
                  <img src={item.icon} />
                </div>
                <p>{item.name}</p>
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

export default SideNav;
