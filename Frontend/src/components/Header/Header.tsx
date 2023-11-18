import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import "./Header.scss";

export const Header = () => {
  const { userName, isLogged } = useAppSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {};

  return (
    <div className="header">
      <span>Fitjourney</span>

      {isLogged ? (
        <div className="header__welcome-box">
          <span>{userName}</span>
          <NavLink
            className="header__user-action"
            onClick={handleLogout}
            to="/login"
          >
            Logout
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};
