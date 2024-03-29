"use client";
import React from "react";
import Select from "../Select";

const Rate = () => {
  const Options = [
    {
      index: 0,
      itemName: "Item 1",
    },
    {
      index: 1,
      itemName: "Item 2",
    },
    {
      index: 2,
      itemName: "Item 3",
    },
  ];
  return (
    <div>
      <Select
        onChange={(item) => {}}
        Options={Options}
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default Rate;
