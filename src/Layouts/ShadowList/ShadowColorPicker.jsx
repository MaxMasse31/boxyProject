import React from "react";
import { useDispatch } from "react-redux";
import { updatesShadowValue } from "../../features/shadow";

// importation des props provenant de ShadowPanel.jsx
export default function ShadowColorPicker({ inputData, shadowId }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
        updatesShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowId
      })
    );
  }

  return (
    <div className="mt-3">
      {/* destructuring avec props InputData */}
      <p>{inputData.name} </p>

      <div className="flex mt-2">
        <input
          value={inputData.value}
          onChange={handleInputs}
          className="flex-grow border py-1 px-2 focus:outline-1 outline-grey-400"
          type="text"
        />

        <input
          className="cursor-pointer h-[40px]"
          type="color"
          value={inputData.value}
          onChange={handleInputs}
        />
      </div>
    </div>
  );
}
