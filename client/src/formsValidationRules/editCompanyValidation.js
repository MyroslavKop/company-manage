import * as yup from "yup";

export const schema = yup.object({
  address: yup.string().required("Address is required"),
  serviceOfActivity: yup.string().required("Service is required"),
  numberOfEmployees: yup
    .number()
    .typeError("Amount must be a number")
    .required("Number of employees is required"),
  description: yup.string().required("Description is required"),
  type: yup.string().required("Type is required"),
});
