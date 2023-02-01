import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { authUser, closeAlert } from "../../../redux/auth/actions";
import FormField from "../../../components/formComponents/FormField";
import { schema } from "../../../formsValidationRules/authValidation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error, errorMessage } = useSelector((state) => state.auth);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    dispatch(authUser(data));
  };

  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 15,
      }}
      noValidate
      name="Authorization"
      onSubmit={handleSubmit(handleLogin)}
    >
      {error && (
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <FormField name="email" type="text" control={control} label="Email" />
        <FormField
          name="password"
          type="password"
          control={control}
          label="Password"
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<LoginIcon />}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
