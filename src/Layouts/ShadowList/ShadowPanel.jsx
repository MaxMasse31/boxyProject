import React, { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";
import "./animation.css";
import { useSpring, animated } from "react-spring";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";

export default function ShadowPanel({ panelNumber, shadow }) {
  // État local pour gérer l'état de l'ombre (ouverte ou fermée)
  const [toggleShadow, setToggleShadow] = useState(false);

  //Fait en sorte que la vignette reste fermé sauf pour la première lorsque charge la page
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  // Configuration pour l'animation de rotation du chevron
  const rotateProps = useSpring({
    transform: toggleShadow ? "rotate(90deg)" : "rotate(0deg)",
  });

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
      return <ShadowColorPicker key={index} inputData={shadow.inputs[index]} />;
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
          {/* Image du chevron animée */}
          <animated.img
            style={rotateProps}
            className="font-bold w-5 ml-2 float-right "
            src={Chevron}
            alt="Chevron"
          />
        </button>
        {toggleShadow && (
          <>
            <div className="flex item-end px-6 py-4">
              {/* Bouton pour supprimer l'ombre */}
              <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
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
