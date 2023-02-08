import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FormPageContainer = ({ children, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: {
          xs: "30px",
          sm: "60px",
        },
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "30px",
            sm: "40px",
          },
          mb: 3,
          textAlign: "center",
        }}
      >
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
