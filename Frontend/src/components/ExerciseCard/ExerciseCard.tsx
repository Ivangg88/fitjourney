import { Exercise } from "../../types/interfaces";
import "./ExerciseCard.scss";
interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps): JSX.Element => {
  return (
    <section className="exercise">
      <h2 className="exercise__title">{exercise.name}</h2>
      <img
        className="exercise__picture"
        src={exercise.images[0]}
        alt={exercise.name}
      />
      <ol className="exercise__instructions">
        {exercise.instructions.map((instruction) => (
          <li className="instructions__intruction-container">
            <span className="instructions__intruction">{instruction}</span>
          </li>
        ))}
      </ol>
      <div className="exercise__actions-container">
        <button className="actions-container__button actions-container__button--stop">
          Stop
        </button>
        <span className="actions-container__chrono">00:30</span>
        <button className="actions-container__button actions-container__button--start">
          Start
        </button>
      </div>
    </section>
  );
};

export default ExerciseCard;
