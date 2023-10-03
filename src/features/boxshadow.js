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
    minMax: [-250, 250],
    slice: "boxProperties",
  },
];

export const boxSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxeValue: (state, action) => {},
  },
});

export const { updateBoxeValue } = boxSlice.actions;

export default boxSlice.reducer;
