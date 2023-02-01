import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

const LinkButton = ({
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
        backgroundColor: { backgroundColor },
        color: { color },
        width: { width },
        fontSize: { fontSize },
        p: { padding },
        border: { border },

        "&:hover": {
          backgroundColor: "#1871ca",
        },
      }}
      component={RouterLink}
      to={router}
      endIcon={icon}
      onClick={onClick}
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
};

export default LinkButton;
