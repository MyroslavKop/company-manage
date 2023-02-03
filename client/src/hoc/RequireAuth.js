import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
