import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// État initial avec un seul élément de l'ombre initial
const initialState = [
  {
    id: nanoid(8), // Génère un identifiant unique
    active: true, // Indique si l'ombre est active
    inset: false, // Indique si l'ombre est en relief
    finalString:"",
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset", // Nom de l'entrée d'ombr
        value: 0, // Valeur actuelle de l'entrée d'ombre
        type: "range", // Type de l'entrée (range ou color)
        minMax: [-250, 250], // Valeur minimale et maximale pour les entrées de type range
      },

      // ... Les autres entrées d'ombre
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread offset",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

// Crée un slice Redux pour gérer les ombres
export const shadowslice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {},

    addShadow: (state, action) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },

          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread offset",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },

    // Action pour mettre à jour la valeur d'une entrée d'ombre
    updatesShadowValue: (state, action) => {
      const currentShadow = state.find(
        //on utilise la props shadowId qu'on récupère
        //dans le fichier ShadowColor où on appel
        //la function updatesShadowValue()
        (shadow) => shadow.id === action.payload.shadowId
      );

      const currentInput = currentShadow.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      );

      currentInput.value = action.payload.value;
    },

    // Action pour mettre à jour une case à cocher (à implémenter)
    updateCheckbox: (state, action) => {
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowId
      );

      currentShadow[action.payload.status] =
        !currentShadow[action.payload.status];
    },



    



    
  },
});

export const { updatesShadowValue, addShadow, updateCheckbox, removeShadow } =
  shadowslice.actions;

export default shadowslice.reducer;
