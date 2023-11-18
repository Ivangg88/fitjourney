import { renderHook } from "@testing-library/react";
import useData from "./useData";
import { loadExercisesActionCreator } from "../../redux/slices/dataSlice/dataSlice";
import { mockExercise } from "../../utils/mockData";
import { toast } from "react-toastify";

const mockDispatch = jest.fn();
jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given a hook useData", () => {
  describe("When the function getExercises is called", () => {
    describe("And have a successfull response", () => {
      test("Then it should call the dispatch with the action data/loadExercises and the toast with the message 'Exercises loaded successfully'", async () => {
        const successMessage = "Exercises loaded successfully";
        const {
          result: {
            current: { getExercises },
          },
        } = renderHook(useData);

        await getExercises();

        expect(mockDispatch).toHaveBeenCalledWith(
          loadExercisesActionCreator([mockExercise])
        );

        expect(toast.success).toHaveBeenCalledWith(successMessage);
      });
    });
  });
});
