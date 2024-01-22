import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { LoginUser, UserFromDB, UserLoged } from "../../types/interfaces";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/slices/userSlice/userSlice";
import useData from "../useData/useData";

const useUser = () => {
  const dispatch = useAppDispatch();
  const { getExercises } = useData();

  const loginUser = async (user: LoginUser) => {
    try {
      //TODO: implement the conection with the backend app.
      // const response = await fetchLogin(user);
      // if (response === undefined) throw new Error("Error with the login");

      await getUser(user.userName);
      return true;
    } catch (error) {
      toast.error((error as Error).message);
      return false;
    }
  };

  const getUser = async (userName: string) => {
    try {
      //TODO: delete from line 332 to line 41 whent the backend conection is ready.
      const userFromDB: UserFromDB = {
        birthDate: "06-06-1988",
        email: "mocjUser@mockmail.net",
        height: "185",
        name: userName,
        registerDate: "2000-01-01",
        weight: "95",
      };

      localStorage.setItem("token", userFromDB.email);

      const token = localStorage.getItem("token");

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
      getExercises();
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
