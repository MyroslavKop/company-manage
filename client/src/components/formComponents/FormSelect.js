import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const FormSelect = ({ control }) => {
  return (
    <FormControl>
      <InputLabel
        id="role"
        sx={{ backgroundColor: "white", padding: "0px 10px 0px", zIndex: 10 }}
      >
        Role
      </InputLabel>
      <Controller
        name="role"
        id="role"
        defaultValue="USER"
        control={control}
        render={({ field }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Select {...field} sx={{ marginBottom: "23px" }}>
            <MenuItem value="USER">USER</MenuItem>
            <MenuItem value="ADMIN">ADMIN</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
};

FormSelect.propTypes = {
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default FormSelect;
