import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import withLayout from "../../components/Layout/Layout";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import withBasePage from "../BasePage/BasePage";

const ExercicesPage = () => {
  const { exercises } = useAppSelector((state: RootState) => state.data);

  return withLayout(withBasePage(<ExerciseCard exercise={exercises[0]} />));
};

export default ExercicesPage;
