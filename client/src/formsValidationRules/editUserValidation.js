import * as yup from "yup";

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

export const schema = yup.object({
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
  position: yup.string().required("Position is required"),
});
