import FormPageContainer from "../components/formComponents/FormPageContainer";
import CreateCompanyForm from "./CreateCompany/component/CreateCompanyForm";

const CreateCompany = () => {
  return (
    <FormPageContainer title="Create your company">
      <CreateCompanyForm />
    </FormPageContainer>
  );
};

export default CreateCompany;
