import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequireAdminRole = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const { role } = jwtDecode(localStorage.getItem("token"));

  if (isAuth && role === "ADMIN") {
    return children;
  }
  return <Navigate to="/" />;
};

RequireAdminRole.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAdminRole;
