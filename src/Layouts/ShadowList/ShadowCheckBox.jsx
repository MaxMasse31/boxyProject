import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckbox } from "../../features/shadow";

export default function ShadowCheckBox({ status, shadowId }) {
  const checkBoxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowId)
  );

  const dispatch = useDispatch();

  return (
    <>
      {/* La propriété name définie si il est actif ou non  */}
      <input
        onChange={() => dispatch(updateCheckbox({ shadowId, status }))}
        type="checkbox"
        checked={checkBoxShadow[status]}
        // id={`checkbox-${name}-${shadowId}`}
        id={shadowId}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
      />
      {/* <label htmlFor={`checkbox-${name}-${shadowId}`}> */}
      <label className="leading-4 mr-5" htmlFor={shadowId}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </label>
    </>
  );
}
