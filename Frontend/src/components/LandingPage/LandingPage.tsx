import { useState } from "react";
import "./LandingPage.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import Wod from "../Wod/Wod";

const initialUser: LoginUser = { password: "", userName: "" };

const LandingPage = () => {
  const navigator = useNavigate();
  

  const [currentUser, setCurrentUser] = useState<LoginUser>(initialUser);

  const dispatch = useAppDispatch();

  return (
    <>
    <div className="container">
    <div className="plan-workout">
      <div className="card-plan__previous-plan"><img className="image-reward" src="./adidas-shoes.png" alt="exercise" /></div>
      <div className="card-plan__current-plan"><img className="image-reward" src="./muscle-mass.png" alt="exercise" /></div>
      <div className="card-plan__next-plan"><img className="image-reward" src="./rope.png" alt="exercise" /></div>
    </div>
     <Wod />
    </div>
    </>
  );
};

export default LandingPage;
