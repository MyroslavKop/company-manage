import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import FormField from "../../../components/formComponents/FormField";
import { editUserById } from "../../../api/userAPI";
import { schema } from "../../../formsValidationRules/editUserValidation";

const columnFlex = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const EditUserIdProfile = ({ data, setEdit }) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { userId } = useParams();

  const handleEdit = async (result) => {
    await editUserById(userId, result);
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
        EDIT PROFILE
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
          <Box sx={columnFlex}>
            <FormField
              control={control}
              value={data.firstName}
              label="Firstname"
              name="firstName"
              type="text"
              placeholder="Enter your firstname"
            />
            <FormField
              control={control}
              value={data.lastName}
              label="Lastname"
              name="lastName"
              type="text"
              placeholder="Enter your lastname"
            />
            <FormField
              control={control}
              value={data.nickName}
              label="Nickname"
              name="nickName"
              type="text"
              placeholder="Enter your nickname"
            />
            <FormField
              control={control}
              value={data.phoneNumber}
              label="Phone number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter phone number"
            />
          </Box>
          <Box sx={columnFlex}>
            <FormField
              value={data.position}
              label="Position"
              name="position"
              type="text"
              control={control}
              placeholder="Enter your position"
            />
            <FormField
              value={data.description}
              label="Description"
              name="description"
              type="text"
              control={control}
              multiline
              rows={9.3}
              placeholder="Write about yourself"
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

EditUserIdProfile.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nickName: PropTypes.string,
    phoneNumber: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default EditUserIdProfile;
