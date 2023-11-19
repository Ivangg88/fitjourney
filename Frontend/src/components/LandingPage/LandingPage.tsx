import { useState } from "react";
import "./LandingPage.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import Wod from "../Wod/Wod";
import WorkoutPlans from "../WorkoutPlans/WorkoutPlans";

const initialUser: LoginUser = { password: "", userName: "" };

const LandingPage = () => {
  const navigator = useNavigate();
  

  const [currentUser, setCurrentUser] = useState<LoginUser>(initialUser);

  const dispatch = useAppDispatch();

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
