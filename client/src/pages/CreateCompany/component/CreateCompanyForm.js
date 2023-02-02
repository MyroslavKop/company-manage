import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";
import FormField from "../../../components/formComponents/FormField";
import {
  defaultValues,
  schema,
} from "../../../formsValidationRules/createCompanyValidation";
import FormButtons from "../../../components/formComponents/FormButtons";
import { createCompany } from "../../../api/companyAPI";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const CreateCompanyForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleReset = () => {
    reset(defaultValues);
    setError(null);
  };

  const handleCreate = async (data) => {
    try {
      await createCompany(data);
      setError(null);
      navigate("/companies");
    } catch (err) {
      setError(err.response.data.message);
    }
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
      name="Create Company"
      onSubmit={handleSubmit(handleCreate)}
    >
      {error && (
        <Alert onClose={handleClose} severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={columnFlex}>
          <FormField
            name="name"
            type="text"
            control={control}
            label="Name*"
            placeholder="Enter company name"
          />
          <FormField
            name="address"
            type="text"
            control={control}
            label="Address*"
            placeholder="Enter company address"
          />
          <FormField
            name="serviceOfActivity"
            type="text"
            control={control}
            label="Service of activity*"
            placeholder="Enter service of activity"
          />
          <FormField
            name="numberOfEmployees"
            type="number"
            control={control}
            label="Number of employees*"
            placeholder="Enter the number of employees"
          />
        </Box>
        <Box sx={columnFlex}>
          <FormField
            name="type"
            type="text"
            control={control}
            label="Type*"
            placeholder="Type of your company"
          />
          <FormField
            name="description"
            type="text"
            control={control}
            label="Description*"
            placeholder="Describe your company"
            multiline
            rows={8.7}
          />
        </Box>
      </Box>
      <FormButtons icon={<NoteAddIcon />} text="Create" onClick={handleReset} />
    </form>
  );
};

export default CreateCompanyForm;
