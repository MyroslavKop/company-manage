import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Company name is required"),
  address: yup.string().required("Address is required"),
  serviceOfActivity: yup.string().required("Service is required"),
  numberOfEmployees: yup
    .number()
    .typeError("Amount must be a number")
    .required("Number of employees is required"),
  description: yup.string().required("Description is required"),
  type: yup.string().required("Type is required"),
});

export const defaultValues = {
  name: "",
  address: "",
  serviceOfActivity: "",
  numberOfEmployees: "",
  description: "",
  type: "",
};
