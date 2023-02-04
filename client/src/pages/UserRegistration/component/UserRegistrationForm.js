import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import {
  defaultValues,
  schema,
} from "../../../formsValidationRules/registrationValidation";
import FormField from "../../../components/formComponents/FormField";
import FormButtons from "../../../components/formComponents/FormButtons";
import FormSelect from "../../../components/formComponents/FormSelect";
import { registration } from "../../../api/userAPI";
import useError from "../../../hooks/useError";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const UserRegistrationForm = () => {
  const { error, closeError, catchError } = useError();
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (result) => {
    try {
      await registration(result);
      navigate("/signin");
    } catch (err) {
      catchError(err.response.data.message);
    }
  };

  const handleReset = () => {
    reset(defaultValues);
    closeError();
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      noValidate
      name="Registration"
      onSubmit={handleSubmit(handleRegister)}
    >
      {error && (
        <Alert onClose={closeError} severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={columnFlex}>
          <FormSelect control={control} />
          <FormField
            name="email"
            type="text"
            control={control}
            label="Email*"
            placeholder="Enter your email"
          />
          <FormField
            name="password"
            type="password"
            control={control}
            label="Password*"
            placeholder="Enter your password"
          />
          <FormField
            name="nickName"
            type="text"
            control={control}
            label="Nickname*"
            placeholder="Enter your nickname"
          />
        </Box>
        <Box sx={columnFlex}>
          <FormField
            name="firstName"
            type="text"
            control={control}
            label="Firstname*"
            placeholder="Enter your firstname"
          />
          <FormField
            name="lastName"
            type="text"
            control={control}
            label="Lastname*"
            placeholder="Enter your lastname"
          />
          <FormField
            name="phoneNumber"
            type="tel"
            control={control}
            label="Phone number*"
            placeholder="Enter phone number"
          />
          <FormField
            name="position"
            type="text"
            control={control}
            label="Position*"
            placeholder="Enter your position"
          />
        </Box>
        <Box sx={columnFlex}>
          <FormField
            name="description"
            type="text"
            control={control}
            label="Description*"
            placeholder="Write about yourself"
            multiline
            rows={13.2}
          />
        </Box>
      </Box>
      <FormButtons onClick={handleReset} text="Submit" icon={<EmailIcon />} />
    </form>
  );
};

export default UserRegistrationForm;
