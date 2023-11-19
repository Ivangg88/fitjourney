import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { LoginUser, UserLoged } from "../../types/interfaces";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/slices/userSlice/userSlice";
import { fetchLogin, fetchUser } from "../services";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (user: LoginUser) => {
    try {
      const response = await fetchLogin(user);
      if (response === undefined) throw new Error("Error with the login");

      await getUser(user.userName);
      return true;
    } catch (error) {
      toast.error((error as Error).message);
      return false;
    }
  };

  const getUser = async (userName: string) => {
    try {
      const token = localStorage.getItem("token");

      const userFromDB = await fetchUser();

      if (!userFromDB) throw new Error("User not found");

      const userToLogin: UserLoged = {
        birthDate: userFromDB.birthDate,
        email: userFromDB.email,
        height: userFromDB.email,
        registerDate: userFromDB.registerDate,
        weight: userFromDB.weight,
        isLogged: true,
        token: token!,
        userName: userFromDB.name,
        name: userFromDB.name,
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
