import { createSlice } from "@reduxjs/toolkit";
import { InitialDataState } from "../../../types/interfaces";

const initialDataState: InitialDataState = {};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {},
});

export const dataReducer = dataSlice.reducer;

export const {} = dataSlice.actions;
