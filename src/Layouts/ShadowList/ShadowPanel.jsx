import React from "react";
import { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";

export default function ShadowPanel({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(true);

  return (
    <>
      <li className="bg-gray-50 border-b border-gray-300">
        <button onClick={() => setToggleShadow(!toggleShadow)}>
          <span>Shadow {panelNumber} </span>
          <img
            style={{
              transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
            }}
            className="font-bold w-5"
            src={Chevron}
            alt="Chevron"
          />
        </button>
        {toggleShadow && (
          <>
            <div className="flex item-end px-6 py-4">
              {/* Checkbox */}

              <button className=" ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                Remove
              </button>
            </div>
          </>
        )}
      </li>
    </>
  );
}
