import React from "react";
import ModalBtn from "./Modal/ModalBtn";
import getBoxShadowValue from "../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";

export default function Visualization() {
  const shadowValues = useSelector((state) => state.shadows);

  const boxProp = useSelector((state) => state.boxProperties);

  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
      <ModalBtn />
      <div
        className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"
        style={{
          boxShadow: `${getBoxShadowValue(shadowValues).slice(0, -1)}`,
          borderRadius: `${boxProp[0].value}px`,
          height: `${boxProp[1].value}px`,
          width: `${boxProp[2].value}px`,
          backgroundColor: `${boxProp[3].value}`,
        }}
      ></div>
    </div>
  );
}
