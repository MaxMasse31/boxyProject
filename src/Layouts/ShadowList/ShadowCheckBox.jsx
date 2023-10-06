import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckbox } from "../../features/shadow";

export default function ShadowCheckBox({ name, shadowId }) {
  const checkBoxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowId)
  );

  console.log(checkBoxShadow);
  return (
    <>
      <input
        onChange={() => dispatch(updateCheckbox({ shadowId, name }))}
        type="checkbox"
        checked={checkBoxShadow[name]}
        // id={`checkbox-${name}-${shadowId}`}
        id={shadowId}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
      />
      {/* <label htmlFor={`checkbox-${name}-${shadowId}`}> */}
      <label className="leading-4 mr-5" htmlFor={shadowId}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
}
