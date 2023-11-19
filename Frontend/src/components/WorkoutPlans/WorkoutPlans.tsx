import { useNavigate } from "react-router-dom";
import "./WorkoutPlans.scss";

const WorkoutPlans = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="plan-workout">
        <div className="card-plan__previous-plan">
          <button className="button-card" onClick={() => console.log("hello")}>
            <div className="text-image">
              <h3>Previous Plan</h3>
              <img
                className="image-reward"
                src="/adidas-shoes.png"
                alt="exercise"
              />
            </div>
          </button>
        </div>
        <div className="card-plan__current-plan">
          <button
            className="button-card__main raibow"
            onClick={() => navigator("/weeklyplan")}
          >
            <div className="text-image">
              <h3>Current Plan</h3>
              <img
                className="image-reward"
                src="https://expospa.files.wordpress.com/2016/11/spa-toulouse-centre.jpg?w=533"
                alt="exercise"
              />
            </div>
          </button>
        </div>
        <div className="card-plan__next-plan">
          <button className="button-card" onClick={() => console.log("hello")}>
            <div className="text-image">
              <h3>Next Plan</h3>
              <img
                className="image-reward"
                src="https://img.freepik.com/foto-gratis/gimnasio-pesas-suelo_1340-37013.jpg?w=1060&t=st=1700407941~exp=1700408541~hmac=3750aaf6901a9d45a17796328630ae3cb4dcb4ef15ae8c1707236a44e9be0a20"
                alt="exercise"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkoutPlans;
