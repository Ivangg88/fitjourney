import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import withLayout from "../../components/Layout/Layout";
import useData from "../../hooks/useData/useData";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import withBasePage from "../BasePage/BasePage";
import { useEffect } from "react";

const ExercicesPage = () => {
  const { getExercises } = useData();
  const { exercises } = useAppSelector((state: RootState) => state.data);

  useEffect(() => {
    getExercises();
  }, [getExercises]);

  return withLayout(withBasePage(<ExerciseCard exercise={exercises[0]} />));
};

export default ExercicesPage;
