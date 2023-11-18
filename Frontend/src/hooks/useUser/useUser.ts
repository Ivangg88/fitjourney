import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { LoginUser, UserLoged } from "../../types/interfaces";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/slices/userSlice/userSlice";
import { initialUser } from "../../utils/initialStates";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = (user: LoginUser) => {
    try {
      //TODO: loginUser from the repository.
      const token = JSON.stringify(user);
      localStorage.setItem("token", token);
      getUser(user.userName);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const getUser = (userName: string) => {
    try {
      const token = localStorage.getItem("token");
      if (token === null) throw new Error("There isn´t a logged user.");

      //TODO:getUser from repository.

      const userToLogin: UserLoged = {
        ...initialUser,
        isLogged: true,
        token,
        userName: userName,
      };

      dispatch(loginUserActionCreator(userToLogin));
      toast.success(`User: ${userToLogin.userName} logged successfully`);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
    toast.success("User logged out successfully \n See you soon");
  };
  return { loginUser, getUser, logoutUser };
};
export default useUser;
