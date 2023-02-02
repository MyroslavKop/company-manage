import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Enter your email"),
  password: yup.string().required("Enter your password"),
});
