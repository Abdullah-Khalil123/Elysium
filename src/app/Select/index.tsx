"use client";
import { CSSProperties, useEffect, useState } from "react";
import style from "./Select.module.css";
import Image from "next/image";
import nextConfig from "../../../next.config";

interface selectProps {
  width?: string;
  Options?: { index: number; itemName: string }[];
  onChange?: (selectedIndex: number) => void;
  style?: CSSProperties;
}

const Select = (props: selectProps) => {
  const selectStyle: CSSProperties = props.style || {};
  const [isClicked, setisClicked] = useState(false);
  const [selectedItem, setselectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setselectedItem(index);
    setisClicked(false);
    if (props.onChange) {
      props.onChange(index);
    }
  };

  return (
    <div className={style.DropDown}>
      <div
        className={style.select}
        style={selectStyle}
        onClick={() => {
          setisClicked((prevState) => !prevState);
        }}
      >
        <span className={style.selected}>
          {props.Options?.at(selectedItem)?.itemName}
        </span>
        <div className={style.caret}>
          <Image
            src={nextConfig.basePath + "/" + "dropdown.svg"}
            width={20}
            height={20}
            alt="Drop Down Icon"
            className={!isClicked ? " " : style.rotate}
          />
        </div>
      </div>
      <ul
        className={style.menu}
        style={{
          display: isClicked ? "block" : "none",
        }}
      >
        {props.Options?.map((val) => (
          <li
            key={val.index}
            style={{
              backgroundColor: selectedItem === val.index ? "#e8f1fd" : "white",
            }}
            onClick={() => handleItemClick(val.index)}
          >
            {val.itemName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
