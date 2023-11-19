export interface UiData {
  isLoading: boolean;
}

export interface LoginUser {
  userName: string;
  password: string;
}

export interface RegistrationData {
  name: string;
  email: string;
}

export interface UserFromDB {
  name: string;
  email: string;
  weight: string;
  height: string;
  birthDate: string;
  registerDate: string;
}

export interface UserLoged extends UserFromDB {
  token: string;
  isLogged: boolean;
  userName: string;
}
export interface Token {
  userName: string;
  isLogged: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  force: string;
  level: string;
  mechanic: string;
  equipment: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
  images: string[];
}

export interface InitialDataState {
  exercises: Array<Exercise>;
}
