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

export const mockExercises: Array<Exercise> = [
  {
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
  },
  {
    id: "6559d15a84271930bb638683",
    name: "Crunches",
    force: "pull",
    level: "beginner",
    mechanic: "isolation",
    equipment: "body only",
    primaryMuscles: ["abdominals"],
    secondaryMuscles: [],
    instructions: [
      "Lie flat on your back with your feet flat on the ground, or resting on a bench with your knees bent at a 90 degree angle. If you are resting your feet on a bench, place them three to four inches apart and point your toes inward so they touch.",
      "Now place your hands lightly on either side of your head keeping your elbows in. Tip: Don't lock your fingers behind your head.",
      "While pushing the small of your back down in the floor to better isolate your abdominal muscles, begin to roll your shoulders off the floor.",
      "Continue to push down as hard as you can with your lower back as you contract your abdominals and exhale. Your shoulders should come up off the floor only about four inches, and your lower back should remain on the floor. At the top of the movement, contract your abdominals hard and keep the contraction for a second. Tip: Focus on slow, controlled movement - don't cheat yourself by using momentum.",
      "After the one second contraction, begin to come down slowly again to the starting position as you inhale.",
      "Repeat for the recommended amount of repetitions.",
    ],
    category: "strength",
    images: [
      "data:image/jpeg;base64,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",
      "Crunches/1.jpg",
    ],
  },

  {
    id: "6559d15a84271930bb6386ab",
    name: "Lower Back Curl",
    force: "static",
    level: "beginner",
    mechanic: "",
    equipment: "body only",
    primaryMuscles: ["abdominals"],
    secondaryMuscles: [],
    instructions: [
      "Lie on your stomach with your arms out to your sides. This will be your starting position.",
      "Using your lower back muscles, extend your spine lifting your chest off of the ground. Do not use your arms to push yourself up. Keep your head up during the movement. Repeat for 10-20 repetitions.",
    ],
    category: "stretching",
    images: [
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYIBxUVCBcYGRgZHCQfHBwcHRkcJR8aHiMkHB8cIR0lIS4lJCEsIRoaJjgnMS8xNTU1HCQ/TDszPy80Nj8BDAwMEA8QGhISHzErJCs/NDE/PTE0Pz86Pz80Nj0/PTQ0NDUxNTQ/NDQ0NDU0ND8xNjE0NDY/NDE2PzQxNDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABBEAACAQIEBAMDCAgGAgMAAAABAgADEQQFEiEGMUFRImFxE1KBBxUyQpGSocEWI1NicrHR0iSCosLw8RQzQ3Oy/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EACARAQEAAgICAgMAAAAAAAAAAAABAhEDEiExQYETMlH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA8iJyjiv5SXfEtR4bsFU2NawYsRz0KfCF/fN79BaxMt0uONyuo6vE/OlbMsZiHLV8RXJ/+6oPsAIA+E38o4txeW1AKmJrWHRwK6nyJa7j4HpJMpXS8OUm3fYlT4V4uXOxor6VqW2Km6v8Aw3Nwdj4Tf1O9rXeacnsTyewEREBERAREQEREBERAREQEREBERAREQEREBETBisSmEw7PimCoouWJsAIFa+UjMWy7hCscObM9qYP8ZCsR56dVpxnL8MdA0KT6CXri7NjxNiqNJQVoKxdbjxOVGkMR9VfGbDrz8hny/DU8N4cOAD15X379usxljcnfj5JhPXlUEy+pWayI32GSVDJBSF8QrE+Y2/pLWxtPkuO8uOMiZ82WXj1FSOVU2RzWU6QVO1wQPrHbzKfbeTWDyZKlINgqmKAPIrWDD/UD9kueXYRMRlyiooYM97Hrbl8LqJixeVtQxJfCkKbXJ6W8/Ly8vKW4yuczuPqqw2DxmGP+GxdUW6Pv/wDkgfhMg4ozDKR/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",
      "Lower_Back_Curl/1.jpg",
    ],
  },
];
