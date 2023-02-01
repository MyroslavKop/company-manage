import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import PositionedMenu from "./common/PositionedMenu";
import LinkButton from "./common/LinkButton";
import { logout } from "../redux/auth/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
            component={RouterLink}
            to="/"
          >
            HOME
          </Typography>
          {isAuth ? (
            <Box sx={{ display: "flex", gap: 10 }}>
              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <PositionedMenu />
                <Button color="inherit" component={RouterLink} to="companies">
                  My companies
                </Button>
                <Button color="inherit" component={RouterLink} to="profile">
                  My profile
                </Button>
              </Box>
              <LinkButton border="1px solid white" onClick={handleLogout}>
                LOGOUT
              </LinkButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              <LinkButton router="signin" border="1px solid white">
                LOGIN
              </LinkButton>
              <LinkButton router="signup" border="1px solid white">
                REGISTRATION
              </LinkButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
