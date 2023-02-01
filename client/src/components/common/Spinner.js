import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = ({ height }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: { height },
    }}
  >
    <CircularProgress />
  </Box>
);

Spinner.propTypes = {
  height: PropTypes.string,
};

Spinner.defaultProps = {
  height: "400px",
};

export default Spinner;
