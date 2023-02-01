import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";

const FormButtons = ({ icon, text, onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 3,
        gap: 5,
      }}
    >
      <Button type="submit" variant="contained" size="large" startIcon={icon}>
        {text}
      </Button>
      <Button
        onClick={onClick}
        variant="contained"
        size="large"
        startIcon={<RestartAltIcon />}
      >
        Reset
      </Button>
    </Box>
  );
};

FormButtons.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormButtons;
