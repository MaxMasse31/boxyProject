import React from "react";
import getBoxShadowValue from "../../../utils/getBoxShadowValue";
import { useSelector } from "react-redux";

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadows);
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5  ">
          <p className="font-semibold mr-5"> Here is your code</p>

          <button className="ml-10 mr-0 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded  ">
            copy
          </button>

          <button
            onClick={closeModal}
            className="ml-auto mr-2 text-sm bg-red-600  text-white hover:bg-red-800 py-1 px-3 rounded  "
          >
            close
          </button>
        </div>
        <p className="rounded bg-gray-100 p-5">
          <span className="font-semibold">
            box-shadow: {getBoxShadowValue(shadowValues)}
          </span>
        </p>
      </div>
    </div>
  );
}
