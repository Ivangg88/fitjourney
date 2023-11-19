import { useNavigate } from "react-router-dom";



const WorkoutPlans = () => {
    const navigator = useNavigate();
    
    return (
      <>
      <div className="plan-workout">
        <div className="card-plan__previous-plan"><img className="image-reward" src="./adidas-shoes.png" alt="exercise" /></div>
        <div className="card-plan__current-plan"><img className="image-reward" src="./muscle-mass.png" alt="exercise" /></div>
        <div className="card-plan__next-plan"><img className="image-reward" src="./rope.png" alt="exercise" /></div>
     
      </div>
      </>
    );
  };
  
  export default WorkoutPlans;
  