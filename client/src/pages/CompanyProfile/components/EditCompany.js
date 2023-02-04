import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import FormField from "../../../components/formComponents/FormField";
import { editCompany } from "../../../api/companyAPI";
import { schema } from "../../../formsValidationRules/editCompanyValidation";

const EditCompany = ({ data, setEdit }) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { companyId } = useParams();

  const handleEdit = async (result) => {
    await editCompany(companyId, result);
    setEdit(false);
  };

  return (
    <Box>
      <Typography
        textAlign="center"
        fontSize={40}
        fontWeight="bold"
        mt={2}
        mb={4}
      >
        EDIT COMPANY
      </Typography>
      <form
        noValidate
        name="Edit Company"
        onSubmit={handleSubmit(handleEdit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormField
              control={control}
              value={data.address}
              label="Address"
              name="address"
              type="text"
              placeholder="Enter company address"
            />
            <FormField
              control={control}
              value={data.serviceOfActivity}
              label="Service of activity"
              name="serviceOfActivity"
              type="text"
              placeholder="Enter service of activity"
            />
            <FormField
              control={control}
              value={data.numberOfEmployees}
              label="Number of employees"
              name="numberOfEmployees"
              type="number"
              placeholder="Enter the number of employees"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormField
              value={data.type}
              label="Type"
              name="type"
              type="text"
              control={control}
              placeholder="Type of your company"
            />
            <FormField
              value={data.description}
              label="Description"
              name="description"
              type="text"
              control={control}
              multiline
              rows={5.8}
              placeholder="Describe your company"
            />
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<SaveAsIcon />}
        >
          Save changes
        </Button>
      </form>
    </Box>
  );
};

EditCompany.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    serviceOfActivity: PropTypes.string,
    numberOfEmployees: PropTypes.number,
    type: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default EditCompany;
