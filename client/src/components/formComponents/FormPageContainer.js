import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const FormPageContainer = ({ children, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "60px",
      }}
    >
      <Typography variant="h1" fontSize="40px" mb={3}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

FormPageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormPageContainer;
