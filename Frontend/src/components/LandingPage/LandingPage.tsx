import "./LandingPage.scss";
import { useNavigate } from "react-router";
import Wod from "../Wod/Wod";
import WorkoutPlans from "../WorkoutPlans/WorkoutPlans";

const LandingPage = () => {
  const navigator = useNavigate();
  return (
    <>

    <div className="container">
     <WorkoutPlans/>
     <Wod />
    </div>

    </>
  );
};

export default LandingPage;
