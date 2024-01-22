import ExerciseDescription from "../../components/ExerciseDescription/ExerciseDescription";
import withLayout from "../../components/Layout/Layout";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import withBasePage from "../BasePage/BasePage";
import "./ExercisePlanPage.scss";
import { NavLink } from "react-router-dom";

const ExercisePlanPage = () => {
  const { exercises } = useAppSelector((state: RootState) => state.data);

  const exercisesElement = exercises.map((exercise) => (
    <ExerciseDescription exercise={exercise} />
  ));
  return withLayout(
    withBasePage(
      <>
        <h1>Exercises of the day</h1>
        <NavLink to={"/home"}>Back to home</NavLink>
        <ul className="exercises-list">{exercisesElement}</ul>
      </>
    )
  );
};

export default ExercisePlanPage;
