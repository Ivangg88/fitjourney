import "./LandingPage.scss";
import Wod from "../Wod/Wod";
import WorkoutPlans from "../WorkoutPlans/WorkoutPlans";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <WorkoutPlans />
        <Wod />
      </div>
    </>
  );
};

export default LandingPage;
