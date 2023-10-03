import React from "react";
import { useSelector } from "react-redux";
import BoxRange from "./BoxRange";
import BoxColorPicker from "./BoxColorPicker";

export default function BoxPanel() {
  const boxState = useSelector((state) => state.boxProperties);
  const boxInputs = boxState.map((input, index) => {
    if (input.type === "range") {
      return <BoxRange key={index} inputData={input} />;
    } else if (input.type === "color") {
      return <BoxColorPicker key={index} inputData={input} />;
    }
  });

  return <div>{boxInputs}</div>;
}
