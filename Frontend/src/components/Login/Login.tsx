import { useState } from "react";
import "./Login.scss";
import { LoginUser } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { loginUserActionCreator } from "../../redux/slices/userSlice/userSlice";

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
      loginUserActionCreator({ isLogged: true, token: "", userName: "Ricardo" })
    );
    navigator("/home");
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className="form-container"
      data-testid="loginForm"
    >
      <h1 className="form-container__login-text">Welcome to Fitjourney</h1>

      <div className="form-container__input-field">
        <label htmlFor="userName"></label>
        <input
          className="form-container__input"
          id="userName"
          name="userName"
          placeholder="username"
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
      <button className="form-container__button" type="submit">
        Login
      </button>

      <p>Not a member?</p>
      <button
        className="form-container__button"
        onClick={() => navigator("/register")}
      >
        Sing up here
      </button>
    </form>
  );
};

export default Login;
