import * as yup from "yup";

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const schema = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  phoneNumber: yup
    .string()
    .required("Phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  firstName: yup.string().trim().required("Firstname is required"),
  lastName: yup.string().trim().required("Lastname is required"),
  nickName: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 characters")
    .required("Nickname is required"),
  description: yup.string().required("Description is required"),
  position: yup.string().trim().required("Position is required"),
});

export const defaultValues = {
  email: "",
  password: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
  nickName: "",
  position: "",
  description: "",
};
