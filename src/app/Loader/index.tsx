import React from "react";
import style from "./loading.module.css";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={style.Loading}>
      <ScaleLoader loading={true} color="#40A2E3" />
    </div>
  );
};

export default Loading;
