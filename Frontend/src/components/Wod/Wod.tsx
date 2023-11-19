import { useState } from "react";
import "./Wod.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";

const initialUser: LoginUser = { password: "", userName: "" };

const Wod = () => {
  const navigator = useNavigate();
  

  const [currentUser, setCurrentUser] = useState<LoginUser>(initialUser);

  const dispatch = useAppDispatch();

  return (
    <>
     <div className="wod">
      <div className="wod-image"><img className="wod-img" src="wod.svg" alt="workout of the day" /></div>
      </div>
    </>
  );
};

export default Wod;
