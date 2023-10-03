import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    intputs: [
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
  },
];

export const shadowslice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {},

    addShadow: (state, action) => {},

    updatesShadowValue: (state, action) => {},

    updateCheckbox: (state, action) => {},
  },
});

export const { updatesShadowValue, addShadow, updateCheckbox, removeShadow } =
  shadowslice.actions;

  export default shadowslice.reducer
