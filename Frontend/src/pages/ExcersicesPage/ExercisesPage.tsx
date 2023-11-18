import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import withLayout from "../../components/Layout/Layout";
import { mockExercise } from "../../utils/mockData";
import withBasePage from "../BasePage/BasePage";

const ExercicesPage = () => {
  return withLayout(withBasePage(<ExerciseCard exercise={mockExercise} />));
};

export default ExercicesPage;
