import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import {
  closeLoadingModalActionCreator,
  openLoadingModalActionCreator,
} from "../../redux/slices/uiSlice/uiSlice";
import { Exercise } from "../../types/interfaces";
import { mockExercise } from "../../utils/mockData";
import { loadExercisesActionCreator } from "../../redux/slices/dataSlice/dataSlice";
import { useCallback } from "react";

const useData = () => {
  const dispatch = useAppDispatch();
  const getExercises = useCallback(async () => {
    try {
      dispatch(openLoadingModalActionCreator());
      //TODO:Get the Exercices from Respository.

      const exercises: Array<Exercise> = [mockExercise];

      dispatch(loadExercisesActionCreator(exercises));
      dispatch(closeLoadingModalActionCreator());
      toast.success("Exercises loaded successfully");
    } catch (error) {
      dispatch(closeLoadingModalActionCreator());
      toast.error((error as Error).message);
    }
  }, [dispatch]);

  return { getExercises };
};

export default useData;
