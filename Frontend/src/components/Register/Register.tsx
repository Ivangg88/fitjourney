import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { fetchRegistration } from "./../../hooks/services";

interface User {
  name: string;
  email: string;
  password: string;
  height_cm: number;
  weight_kg: number;
  age: number;
}

const initialUser: User = {
  password: "",
  email: "",
  name: "",
  height_cm: 0,
  weight_kg: 0,
  age: 0,
};

const Register = () => {
  const navigator = useNavigate();

  const [currentUser, setCurrentUser] = useState<User>(initialUser);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log("currentUser", currentUser);

    const { name, value } = event.target;

    // Convert numerical fields to numbers
    const numericValue =
      name === "height_cm" || name === "weight_kg" || name === "age"
        ? +value
        : value;

    setCurrentUser({
      ...currentUser,
      [name]: numericValue,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log({ currentUser });
    event.preventDefault();

    try {
      const response = await fetchRegistration({
        name: currentUser.name,
        email: currentUser.email,
        password: currentUser.password,
        height_cm: currentUser.height_cm,
        weight_kg: currentUser.weight_kg,
        age: currentUser.age,
      });
      if (response.ok) {
        alert("Registration completed succesfully");
        navigator("/login");
      } else {
        alert("Email and/or name already in use");
        console.error("registration failed");
      }
    } catch (error) {
      console.error("an error occurred:", error);
    }

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
      <h1 className="register-form-container__login-text">
        Create your account
      </h1>
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
      height in cm
      <div className="register-form-container__input-field">
        <label htmlFor="height_cm"></label>
        <input
          className="register-form-container__input"
          id="height_cm"
          name="height_cm"
          placeholder="184"
          type="number"
          onChange={handleInputChange}
        />
      </div>
      weight in kg
      <div className="register-form-container__input-field">
        <label htmlFor="weight_kg"></label>
        <input
          className="register-form-container__input"
          id="weight_kg"
          name="weight_kg"
          placeholder="75"
          type="number"
          onChange={handleInputChange}
        />
      </div>
      age
      <div className="register-form-container__input-field">
        <label htmlFor="age"></label>
        <input
          className="register-form-container__input"
          id="age"
          name="age"
          placeholder="45"
          type="number"
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
