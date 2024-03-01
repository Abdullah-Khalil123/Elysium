"use client";
import Link from "next/link";
import style from "./SideNav.module.css";
import Image from "next/image";
import nextConfig from "../../../next.config";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [collapsed, setcollapsed] = useState(false);
  const [SelectedPage, setSelectedPage] = useState("");
  const [isMobile, setisMobile] = useState(false);
  function isMobileDevice() {
    if (window.innerWidth < 900) {
      setisMobile(true);
      return true;
    } else {
      setisMobile(false);
      return false;
    }
  }

  useEffect(() => {
    setSelectedPage(window.location.pathname.substring(9));
    window.addEventListener("resize", isMobileDevice);
    isMobileDevice();
    return () => removeEventListener("resize", isMobileDevice);
  }, []);

  function handleLinkClick(name: string) {
    if (isMobile) {
      setcollapsed(true);
    }
    setSelectedPage(name);
  }

  const Icons = [
    "Vector.svg",
    "Vector (1).svg",
    "Vector (2).svg",
    "Vector (3).svg",
    "Vector (4).svg",
    "Vector (5).svg",
  ];

  const buttonStyle: any = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    position: "absolute",
    left: "30px",
    top: "10px",
  };

  const list = [
    { name: "Dashboard", icon: Icons[0] },
    { name: "Front_desk", icon: Icons[1] },
    { name: "Guest", icon: Icons[2] },
    { name: "Expenses", icon: Icons[3] },
    { name: "Monthly_Data", icon: Icons[4] },
    { name: "Rate", icon: Icons[5] },
  ];

  return (
    <>
      {isMobile ? (
        <button
          onClick={() => setcollapsed((collapsed) => !collapsed)}
          style={buttonStyle}
        >
          <Image
            alt={"image"}
            height={25}
            width={25}
            src={nextConfig.basePath + "/" + "options.svg"}
          ></Image>
        </button>
      ) : null}
      <div
        className={`${style.SideNav} ${collapsed ? style.collapsed : null} ${
          isMobile ? style.mobileView : null
        }`}
        style={collapsed && isMobile ? { display: "none" } : {}}
      >
        <div className={style.ButtonTitle}>
          <button
            className={collapsed ? style.collapBut : ""}
            onClick={() => setcollapsed((collapsed) => !collapsed)}
          >
            <Image
              alt={"image"}
              height={25}
              width={25}
              src={nextConfig.basePath + "/" + "options.svg"}
            ></Image>
          </button>
          <h2>Elysium</h2>
          <section className={!collapsed ? style.dummy : ""}></section>
        </div>
        <ul className={style.ulItems}>
          {list.map((item) => (
            <Link
              href={"/" + item.name}
              className={`${style.ahref} ${
                SelectedPage == item.name ? style.selectedPage : ""
              }`}
              key={item.name}
              onClick={() => handleLinkClick(item.name)}
            >
              <li>
                <Image
                  src={nextConfig.basePath + "/" + item.icon}
                  height={22}
                  width={22}
                  alt={"image"}
                  className={style.listicon}
                />
                <p>{item.name.split("_").join(" ")}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
