import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import "./Header.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";

interface ProgressProps {
  level: number;
}

const Progress = ({ level }: ProgressProps) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${level}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
};

export const Header = () => {
  const { userName, isLogged } = useAppSelector(
    (state: RootState) => state.user
  );
  const navigator = useNavigate();
  const { logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
    navigator("/login");
  };

  return (
    <div className="header">
      <p className="title">FitJourney</p>
      <img className="logo" src="./FitJourneyLogo.png" alt="exercise" />

      {isLogged ? (
        <>
          <div className="header__welcome-box">
            <span>{userName}</span>
            <div className="welcome-box__progress-status">
              <span>Level: </span>
              <Progress level={50} />
            </div>
            <button className="header__user-action" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};
