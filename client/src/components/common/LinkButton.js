import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

const LinkButton = ({
  margin,
  children,
  router,
  width,
  fontSize,
  padding,
  icon,
  border,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <Button
      sx={{
        textAlign: "center",
        backgroundColor: { backgroundColor },
        color: { color },
        width: { width },
        fontSize: { fontSize },
        p: { padding },
        border: { border },
        margin: { margin },
      }}
      component={RouterLink}
      to={router}
      endIcon={icon}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  );
};

LinkButton.defaultProps = {
  color: "white",
  backgroundColor: "#1976d2",
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.number,
  padding: PropTypes.string,
  icon: PropTypes.node,
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  margin: PropTypes.string,
};

export default LinkButton;
