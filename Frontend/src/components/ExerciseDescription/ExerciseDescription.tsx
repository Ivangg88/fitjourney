import { Exercise } from "../../types/interfaces";
import "./ExerciseDescription.scss";
import { useNavigate } from "react-router-dom";

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseDescription = ({ exercise }: ExerciseCardProps): JSX.Element => {
  const navigator = useNavigate();

  return (
    <section onClick={() => navigator("/exercise")} className="exercise">
      <h2 className="exercise__title">{exercise.name}</h2>
      <img
        className="exercise__picture"
        src={exercise.images[0]}
        alt={exercise.name}
      />

      <ol className="exercise__instructions">
        {exercise.instructions.map((instruction, index) => (
          <li
            key={instruction + index}
            className="instructions__intruction-container"
          >
            <span className="instructions__intruction">{instruction}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExerciseDescription;
