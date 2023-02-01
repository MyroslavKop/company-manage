import LoginForm from "./component/LoginForm";
import FormPageContainer from "../../components/formComponents/FormPageContainer";

const Login = () => {
  return (
    <FormPageContainer title="Authorization">
      <LoginForm />
    </FormPageContainer>
  );
};

export default Login;
