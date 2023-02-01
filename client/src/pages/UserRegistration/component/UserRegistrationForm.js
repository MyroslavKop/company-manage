import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import {
  defaultValues,
  schema,
} from "../../../formsValidationRules/registrationValidation";
import FormField from "../../../components/formComponents/FormField";
import FormButtons from "../../../components/formComponents/FormButtons";
import FormSelect from "../../../components/formComponents/FormSelect";
import { registration } from "../../../api/userAPI";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

const UserRegistrationForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (result) => {
    try {
      await registration(result);
      setError(null);
      navigate("/signin");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleReset = () => {
    reset(defaultValues);
    setError(null);
  };

  const handleClose = () => setError(null);

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
        <Alert onClose={handleClose} severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={columnFlex}>
          <FormSelect control={control} />
          <FormField name="email" type="text" control={control} label="Email" />
          <FormField
            name="password"
            type="password"
            control={control}
            label="Password"
          />
          <FormField
            name="nickName"
            type="text"
            control={control}
            label="Nickname"
          />
        </Box>
        <Box sx={columnFlex}>
          <FormField
            name="firstName"
            type="text"
            control={control}
            label="First name"
          />
          <FormField
            name="lastName"
            type="text"
            control={control}
            label="Last name"
          />
          <FormField
            name="phoneNumber"
            type="tel"
            control={control}
            label="Phone number"
          />
          <FormField
            name="position"
            type="text"
            control={control}
            label="Position"
          />
        </Box>
        <Box sx={columnFlex}>
          <FormField
            name="description"
            type="text"
            control={control}
            label="Description"
            multiline
            rows={11.4}
          />
        </Box>
      </Box>
      <FormButtons onClick={handleReset} text="Submit" icon={<EmailIcon />} />
    </form>
  );
};

export default UserRegistrationForm;
