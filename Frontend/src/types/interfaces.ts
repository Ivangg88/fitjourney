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
