import React, { useState } from "react";
import Chevron from "../../assets/chevron.svg";
import "./animation.css";
import { useSpring, animated } from "react-spring";

export default function ShadowPanel({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(false);
  const rotateProps = useSpring({
    transform: toggleShadow ? "rotate(90deg)" : "rotate(0deg)",
  });

  // const shadowInput = boxState.map((input, index) => {
  //   if (input.type === "range") {
  //     return <shadowRange key={index} inputData={input} />;
  //   } else if (input.type === "color") {
  //     return <BoxColorPicker key={index} inputData={input} />;
  //   }
  // });

  return (
    <>
      <li className="bg-gray-50 border-b border-gray-300 animation block">
        <button onClick={() => setToggleShadow(!toggleShadow)}>
        <span className={toggleShadow ? "text-visible" : ""}>Shadow {panelNumber}</span>
          <animated.img
            style={rotateProps}
            className="font-bold w-5"
            src={Chevron}
            alt="Chevron"
          />
        </button>
        {toggleShadow && (
          <>
            <div className="flex item-end px-6 py-4">
              {/* Checkbox */}
              <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                Remove
              </button>
            </div>

            {/* <div className="px-6 py-4"> {shadowInput}</div> */}
          </>
        )}
      </li>
    </>
  );
}
