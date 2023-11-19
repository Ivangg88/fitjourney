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
  name: "",
};

export const getInitialUser = (): UserLoged => {
  return initialUser;
};

export const initialLoggedUser = getInitialUser();
