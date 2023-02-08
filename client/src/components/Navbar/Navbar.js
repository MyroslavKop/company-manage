import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { logout } from "../../redux/auth/actions";
import PositionedMenu from "../common/PositionedMenu";
import MobileMenu from "./MobileMenu";
import LinkButton from "../common/LinkButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between", gap: 5 }}>
          {isAuth ? (
            <>
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                sx={{
                  fontSize: 20,
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                Home
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
                sx={{
                  mr: 2,
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </>
          ) : (
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{ fontSize: 20 }}
            >
              Home
            </Button>
          )}
          {isAuth ? (
            <Box sx={{ display: "flex", gap: 10 }}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  gap: 3,
                  alignItems: "center",
                }}
              >
                <PositionedMenu />
                <Button color="inherit" component={RouterLink} to="companies">
                  My companies
                </Button>
                <Button color="inherit" component={RouterLink} to="profile">
                  My profile
                </Button>
              </Box>
              <MobileMenu setOpen={setOpen} open={open} />
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                  color: "white",
                  backgroundColor: "#1976d2",
                  border: "1px solid white",
                }}
              >
                LOGOUT
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 4 }}>
              <LinkButton router="signin" border="1px solid white">
                LOGIN
              </LinkButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
