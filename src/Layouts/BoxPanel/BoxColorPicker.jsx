import React from "react";
import { useDispatch } from "react-redux";
import { updateBoxeValue } from "../../features/boxProperties";

export default function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch();

  function handleInputs(e) {
    dispatch(
      updateBoxeValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
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
