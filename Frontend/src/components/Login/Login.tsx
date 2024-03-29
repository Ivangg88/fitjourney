import { useState } from "react";
import "./Login.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser/useUser";

const initialUser: LoginUser = { password: "00000000", userName: "Thomas" };

const Login = () => {
  const [currentUser, setCurrentUser] = useState<LoginUser>(initialUser);
  const { loginUser } = useUser();

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    });
  };
  const navigator = useNavigate();

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (await loginUser(currentUser)) {
      navigator("/home");
    }
  };

  return (
    <>
      <p className="impact-phrase">where your health is rewarded</p>
      <form
        noValidate
        autoComplete="off"
        className="form-container"
        data-testid="loginForm"
      >
        <div className="form-container__input-field">
          <label htmlFor="userName"></label>
          <input
            className="form-container__input"
            id="userName"
            name="userName"
            placeholder="username"
            type="text"
            value={currentUser.userName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-container__input-field">
          <label htmlFor="password"></label>
          <input
            className="form-container__input"
            id="password"
            name="password"
            placeholder="********"
            type="password"
            value={currentUser.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-actions">
          <button
            autoFocus
            className="login-button"
            type="button"
            onClick={(event) => handleLogin(event)}
          >
            Login
          </button>
        </div>

        {/* <button
          className="sign-up-button"
          onClick={() => navigator("/register")}
        >
          Sign up
        </button> */}
      </form>
    </>
  );
};

export default Login;
