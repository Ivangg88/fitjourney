import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import {
  closeLoadingModalActionCreator,
  openLoadingModalActionCreator,
} from "../../redux/slices/uiSlice/uiSlice";
import { mockExercises } from "../../utils/mockData";
import { loadExercisesActionCreator } from "../../redux/slices/dataSlice/dataSlice";
import { useCallback } from "react";

const useData = () => {
  const dispatch = useAppDispatch();
  const getExercises = useCallback(async () => {
    try {
      dispatch(openLoadingModalActionCreator());
      dispatch(loadExercisesActionCreator(mockExercises));
      dispatch(closeLoadingModalActionCreator());
    } catch (error) {
      dispatch(closeLoadingModalActionCreator());
      toast.error((error as Error).message);
    }
  }, [dispatch]);

  return { getExercises };
};

export default useData;
