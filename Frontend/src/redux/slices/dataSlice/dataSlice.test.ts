import { InitialDataState } from "../../../types/interfaces";
import { mockExercise, mockInitialDataState } from "../../../utils/mockData";
import { dataReducer, loadExercisesActionCreator } from "./dataSlice";

describe("Given a loadExercisesActionCreator", () => {
  describe("When is called", () => {
    test("Then it should return an action with the type data/loadExercise", () => {
      const actionType = "data/loadExercises";
      const expectedAction = {
        type: actionType,
        payload: [mockExercise],
      };

      const action = loadExercisesActionCreator([mockExercise]);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a dataReducer function", () => {
  describe("When is called with an action type 'data/LoadExercises' and a payload with an array of Exercise", () => {
    test("Then it should return a copy of the loaded Posts", () => {
      const action = loadExercisesActionCreator([mockExercise]);
      const expectedState: InitialDataState = {
        ...mockInitialDataState,
        exercises: [mockExercise],
      };

      const receivedstate = dataReducer(mockInitialDataState, action);

      expect(receivedstate).toStrictEqual(expectedState);
    });
  });
});
