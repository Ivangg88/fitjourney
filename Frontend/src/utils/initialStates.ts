import { Token, UserLoged } from "../types/interfaces";

export const initialUser: UserLoged = {
  userName: "",
  birthDate: "",
  email: "",
  height: "",
  weight: "",
  isLogged: false,
  registerDate: "",
  token: "",
};

export const getInitialUser = (): UserLoged => {
  const token = localStorage.getItem("token");

  if (token) {
    const user: Token = JSON.parse(token);

    const userLoged: UserLoged = {
      ...initialUser,
      userName: user.userName,
      isLogged: true,
      token: token,
    };

    return userLoged;
  }
  return initialUser;
};

export const initialLoggedUser = getInitialUser();
