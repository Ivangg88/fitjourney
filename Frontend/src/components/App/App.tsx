import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../../styles/sass/styles.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "./App.scss";
import Loading from "../Loading/Loading";
import withLayout from "../Layout/Layout";
import withBasePage from "../../pages/BasePage/BasePage";
import withCredentials from "../CredentialRoutes/CredentialRoutes";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const App = (): JSX.Element => {
  const { isLoading } = useAppSelector((state: RootState) => state.ui);

  return (
    <>
      <ToastContainer
        bodyClassName="toast-body"
        toastClassName="toast"
        position="top-center"
        autoClose={2000}
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
        <Route
          path="/home"
          element={withCredentials(
            withLayout(withBasePage(<h1>FitJourney</h1>))
          )}
        />
      </Routes>
    </>
  );
};

export default App;
