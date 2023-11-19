import { Exercise, InitialDataState } from "../types/interfaces";

export const mockExercise: Exercise = {
  id: "Alternate_Incline_Dumbbell_Curl",
  name: "Alternate Incline Dumbbell Curl",
  force: "pull",
  level: "beginner",
  mechanic: "isolation",
  equipment: "dumbbell",
  primaryMuscles: ["biceps"],
  secondaryMuscles: ["forearms"],
  instructions: [
    "Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso. This will be your starting position.",
    "Sit down on an incline bench with a dumbbell in each hand being held at arms length. Tip: Keep the elbows close to the torso. This will be your starting position.",
  ],
  category: "strength",
  images: [
    "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif",
    "Alternate_Incline_Dumbbell_Curl/1.jpg",
  ],
};

export const mockInitialExercise: Exercise = {
  id: "",
  name: "",
  force: "",
  level: "",
  mechanic: "",
  equipment: "",
  primaryMuscles: [],
  secondaryMuscles: [],
  instructions: [],
  category: "",
  images: ["", ""],
};

export const mockInitialDataState: InitialDataState = {
  exercises: [],
};
