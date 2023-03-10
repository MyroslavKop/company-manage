import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { authUser, closeAlert } from "../../../redux/auth/actions";
import FormField from "../../../components/formComponents/FormField";
import { schema } from "../../../formsValidationRules/authValidation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, errorMessage } = useSelector((state) => state.auth);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    await dispatch(authUser(data));
    navigate("/");
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
        width: "280px",
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.3 }}>
        <FormField
          name="email"
          type="text"
          control={control}
          label="Email"
          placeholder="Enter your email"
        />
        <FormField
          name="password"
          type="password"
          control={control}
          label="Password"
          placeholder="Enter your password"
        />
      </Box>
      <Button
        sx={{ width: "150px", margin: "0 auto" }}
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
