import withLayout from "../../components/Layout/Layout";
import withBasePage from "../BasePage/BasePage";
import LandingPage from "../../components/LandingPage/LandingPage";

const LoginPage = () => {
  return withLayout(withBasePage(<LandingPage />));
};

export default LoginPage;