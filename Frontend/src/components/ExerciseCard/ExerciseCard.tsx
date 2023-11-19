import { useState } from "react";
import { Exercise } from "../../types/interfaces";
import "./ExerciseCard.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Chrono from "../Chrono/Chrono";
interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps): JSX.Element => {
  const [startedExercise, setStartedExercise] = useState(false);
  const [chronoTime, setChronoTime] = useState(10);
  const navigator = useNavigate();

  const handleStartButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setStartedExercise(true);
  };

  const handleStopButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setStartedExercise(false);
  };

  const handleCompleteButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    toast.success("Exercise updated");
    navigator("/home");
    //TODO:send to backend the new status
  };
  return (
    <section className="exercise">
      <h2 className="exercise__title">{exercise.name}</h2>
      <Chrono
        className="actions-container__chrono"
        chronoTime={chronoTime}
        setChronoTime={setChronoTime}
        start={startedExercise}
      ></Chrono>
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

      {chronoTime ? (
        <div className="exercise__actions-container">
          {startedExercise ? (
            <>
              <button
                onClick={handleStopButton}
                className="actions-container__button actions-container__button--stop"
              >
                Stop
              </button>
            </>
          ) : (
            <button
              onClick={handleStartButton}
              className="actions-container__button actions-container__button--start"
            >
              Start
            </button>
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={handleCompleteButton}
          disabled={chronoTime !== 0}
          className={`actions-container__button actions-container__button--complete ${
            chronoTime !== 0 ? "disable" : ""
          }`}
        >
          Mark as complete
        </button>
      )}
    </section>
  );
};

export default ExerciseCard;
