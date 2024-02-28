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
    if (window.innerWidth < 700) {
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
    top: "20px",
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

// "use client";
// import React, { useEffect, useState } from "react";
// import style from "./SideNav.module.css";
// import Link from "next/link";
// import Image from "next/image";
// import nextConfig from "../../../next.config";

// const SideNav = () => {
//   const [extended, setextended] = useState(true);
//   const [pageSelected, setpageSelected] = useState("");

//   useEffect(() => {
//     const handleResize = () => {
//       setextended(window.innerWidth > 700);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setpageSelected(window.location.pathname.substring(1));
//   }, []);

//   const handleLinkClick = (name: string) => {
//     if (window.innerWidth < 700) {
//       extended ? setextended(false) : null;
//     } else {
//       extended ? setextended(true) : null;
//     }
//     setpageSelected(name);
//   };

//   return (
//     <>
//       {extended ? null : (
//         <NavButton value={extended} setState={setextended} isColl={false} />
//       )}
//       <div className={`${style.SideNav} ${extended ? null : style.Extended}`}>
//         <h2 className={style.logo}>
//           <NavButton value={extended} setState={setextended} isColl={true} />
//           Elysium
//         </h2>
//         <ul className={style.listBox}>
//           {list2.map((item) => (
//             <Link
//               href={"/" + item.name}
//               className={style.ahref}
//               key={item.name}
//             >
//               <li
//                 className={
//                   pageSelected == item.name ? style.liItemSelected : style.Dummy
//                 }
//                 onClick={() => {
//                   handleLinkClick(item.name);
//                 }}
//               >
//                 <div className={style.Icons}>
//                   <Image
//                     src={`${nextConfig.basePath}/${item.icon}`}
//                     alt="image"
//                     width={22}
//                     height={22}
//                   />
//                 </div>
//                 <p>{item.name}</p>
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// interface NavButtonProps {
//   setState: React.Dispatch<React.SetStateAction<boolean>>;
//   value: boolean;
//   isColl: boolean;
// }

// const NavButton: React.FC<NavButtonProps> = ({ setState, value, isColl }) => {
//   return (
//     <div
//       className={`${style.button} ${!isColl ? style.scaler : null}`}
//       onClick={() => setState(!value)}
//       style={!value ? { marginTop: "8px", left: "45px" } : {}}
//     >
//       <div className={style.SideNavButton}></div>
//     </div>
//   );
// };

// export default SideNav;
