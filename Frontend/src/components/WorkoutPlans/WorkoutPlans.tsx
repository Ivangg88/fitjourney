import { useNavigate } from "react-router-dom";
import "./WorkoutPlans.scss";
import { fetchPatient } from "../../hooks/services";
import { useEffect } from "react";

const WorkoutPlans = () => {

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    fetchPatient(token)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  , []);

    
    return (
      <>
      <div className="plan-workout">
        <div className="card-plan__previous-plan">
          <button className="button-card" onClick={()=> console.log("hello")}>
            <div className="text-image">
              <h3>Previous Plan</h3>
            <img className="image-reward" src="./adidas-shoes.png" alt="exercise" />
            </div>
          </button>
          </div>
        <div className="card-plan__current-plan">
        <button className="button-card__main raibow" onClick={()=> console.log("hello")}>
        <div className="text-image">
            <h3>Current Plan</h3>
          <img className="image-reward" src="./muscle-mass.png" alt="exercise" />
          </div>
          </button>
          </div>
        <div className="card-plan__next-plan">
        <button className="button-card" onClick={()=> console.log("hello")}>
        <div className="text-image">
            <h3>Next Plan</h3>
          <img className="image-reward" src="./adidas-shoes.png" alt="exercise" />
          </div>
          </button>
          </div>
      </div>
      </>
    );
  };
  
  export default WorkoutPlans;
  