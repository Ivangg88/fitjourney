import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../../styles/sass/styles.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "./App.scss";
import Loading from "../Loading/Loading";
import withCredentials from "../CredentialRoutes/CredentialRoutes";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

import LandingPage from "../../pages/LandingPage/LandingPage";

import ExercicesPage from "../../pages/ExcersicesPage/ExercisesPage";

const App = (): JSX.Element => {
  const { isLoading } = useAppSelector((state: RootState) => state.ui);

  return (
    <>
      <ToastContainer
        bodyClassName="toast-body"
        toastClassName="toast"
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        theme="light"
      />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/home" element={withCredentials(<LandingPage />)} />
        <Route
          path="/exercise"
          element={withCredentials(<ExercicesPage />)}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
