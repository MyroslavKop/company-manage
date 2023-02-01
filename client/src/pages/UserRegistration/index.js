import UserRegistrationForm from "./component/UserRegistrationForm";
import FormPageContainer from "../../components/formComponents/FormPageContainer";

const UserRegistration = () => {
  return (
    <FormPageContainer title="Registration">
      <UserRegistrationForm />
    </FormPageContainer>
  );
};

export default UserRegistration;
