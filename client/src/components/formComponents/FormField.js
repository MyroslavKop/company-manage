import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const FormField = ({ control, name, label, type, multiline, rows }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          label={label}
          type={type}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

FormField.propTypes = {
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
