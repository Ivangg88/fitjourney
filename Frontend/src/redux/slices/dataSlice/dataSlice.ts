import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Exercise, InitialDataState } from "../../../types/interfaces";
import { mockInitialExercise } from "../../../utils/mockData";

const initialDataState: InitialDataState = { exercises: [mockInitialExercise] };

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    loadExercises: (previousState, action: PayloadAction<Array<Exercise>>) => ({
      ...previousState,
      exercises: action.payload,
    }),
  },
});

export const dataReducer = dataSlice.reducer;

export const { loadExercises: loadExercisesActionCreator } = dataSlice.actions;
