import { createSlice } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border Radius",
    value: 25,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 250],
  },

  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    slice: "boxProperties",
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
    slice: "boxProperties",
  },
];

// Création du slice Redux
export const boxSlice = createSlice({
  name: "boxProperties", // Le nom du slice
  initialState, // L'état initial
  reducers: {
    // Action pour mettre à jour la valeur d'un élément du slice
    updateBoxeValue: (state, action) => {
      // Recherche de l'élément avec le même inputNumber et mise à jour de sa valeur
      state.find((el) => el.inputNumber === action.payload.inputNumber).value =
        action.payload.value;
    },
  },
});

// Export des actions générées par createSlice
export const { updateBoxeValue } = boxSlice.actions;

// Export du réducteur du slice
export default boxSlice.reducer;