import { useState } from "react";
import "./Login.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { loginUserActionCreator } from "../../redux/slices/userSlice/userSlice";
import { initialUser as mockUser } from "../../utils/initialStates";

const initialUser: LoginUser = { password: "", userName: "" };

const Login = () => {
  const navigator = useNavigate();

  const [currentUser, setCurrentUser] = useState<LoginUser>(initialUser);

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

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: add function to login
    dispatch(
      loginUserActionCreator({
        ...mockUser,
        isLogged: true,
        token: "",
        userName: "Ricardo",
      })
    );
    navigator("/home");
    return;
  };

  return (
    <>
      <p className="impact-phrase">where your health is rewarded</p>
      <form
        onSubmit={handleSubmit}
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
            placeholder="email"
            type="text"
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
            onChange={handleInputChange}
          />
        </div>
        <div className="login-actions">
          <button className="login-button" type="submit">
            Login
          </button>
          <a href="">forgot your password?</a>
        </div>

        <button
          className="sign-up-button"
          onClick={() => navigator("/register")}
        >
          Sing up
        </button>
      </form>
    </>
  );
};

export default Login;
