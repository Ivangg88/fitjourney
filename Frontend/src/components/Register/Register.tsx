import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface User {
  name: string;
  email: string;
  password: string;
}

const initialUser: User = { password: "", email: "", name: "" };

const Register = () => {
  const navigator = useNavigate();

  const [currentUser, setCurrentUser] = useState<User>(initialUser);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //TODO: add function to register
    navigator("/home");

    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className="register-form-container"
      data-testid="loginForm"
    >
      <h1 className="register-form-container__login-text">Create your account</h1>
name
      <div className="register-form-container__input-field">
        <label htmlFor="name"></label>
        <input
          className="register-form-container__input"
          id="name"
          name="name"
          placeholder="name"
          type="text"
          onChange={handleInputChange}
        />
      </div>
email
      <div className="register-form-container__input-field">
        <label htmlFor="email"></label>
        <input
          className="register-form-container__input"
          id="email"
          name="email"
          placeholder="wonderwoman@marvel.com"
          type="email"
          onChange={handleInputChange}
        />
      </div>
      password
      <div className="register-form-container__input-field">
        <label htmlFor="password"></label>
        <input
          className="register-form-container__input"
          id="password"
          name="password"
          placeholder="********"
          type="password"
          onChange={handleInputChange}
        />
      </div>
      confirm password
      <div className="register-form-container__input-field">
        <label htmlFor="password"></label>
        <input
          className="register-form-container__input"
          id="password"
          name="password"
          placeholder="********"
          type="password"
          onChange={handleInputChange}
        />
      </div>
      <button className="register-form-container__button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
