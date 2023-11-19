import withLayout from "../../components/Layout/Layout";
import Register from "../../components/Register/Register";
import withBasePage from "../BasePage/BasePage";

const RegisterPage = () => {
  return withLayout(withBasePage(<Register />));
};

export default RegisterPage;
