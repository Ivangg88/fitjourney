export interface InitialDataState {}

export interface UiData {
  isLoading: boolean;
}

export interface UserLoged {
  userName: string;
  token: string;
  isLogged: boolean;
}
export interface Token {
  userName: string;
  isLogged: boolean;
}

export interface LoginUser {
  userName: string;
  password: string;
}
