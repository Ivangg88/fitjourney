export interface InitialDataState {}

export interface UiData {
  isLoading: boolean;
}

export interface LoginUser {
  userName: string;
  password: string;
}

export interface UserLoged {
  userName: string;
  email: string;
  weight: string;
  height: string;
  birthDate: string;
  registerDate: string;
  token: string;
  isLogged: boolean;
}
export interface Token {
  userName: string;
  isLogged: boolean;
}
