import React, { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";
import "./animation.css";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";
import ShadowCheckBox from "./ShadowCheckBox";
import { removeShadow } from "../../features/shadow";
import { useDispatch } from "react-redux";

export default function ShadowPanel({ panelNumber, shadow }) {
  const dispatch = useDispatch();

  // État local pour gérer l'état de l'ombre (ouverte ou fermée)
  const [toggleShadow, setToggleShadow] = useState(false);

  // Fait en sorte que la vignette reste fermée sauf pour la première lorsque charge la page
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  // Style initial pour la rotation du chevron
  const initialRotateStyle = toggleShadow ? "rotate(90deg)" : "rotate(0deg)";

  // Génère les éléments d'entrée d'ombre en fonction du type (range ou color)
  const shadowInput = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        />
      );
    }
  });

  return (
    <>
      <li className="bg-gray-50 border-b border-gray-300 animation">
        <button
          className="w-full px-6 py-4 flex justify-between items-center"
          onClick={() => setToggleShadow(!toggleShadow)}
        >
          {/* Affiche le texte "Shadow {panelNumber}" */}
          Shadow {panelNumber}
          {/* Image du chevron avec style initial */}
          <img
            style={{ transform: initialRotateStyle }}
            className="font-bold w-5 ml-2 float-right "
            src={Chevron}
            alt="Chevron"
          />
        </button>
        {toggleShadow && (
          <>
            <div className="flex item-end px-6 pt-4">
              <div>
                <ShadowCheckBox status="active" shadowId={shadow.id} />
                <ShadowCheckBox status="inset" shadowId={shadow.id} />
              </div>

              <button
                onClick={() => dispatch(removeShadow(shadow.id))}
                className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>

            {/* Affiche les entrées d'ombre (ShadowRange ou ShadowColorPicker) */}
            <div className="px-6 py-4"> {shadowInput}</div>
          </>
        )}
      </li>
    </>
  );
}
