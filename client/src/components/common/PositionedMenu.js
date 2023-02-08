import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const PositionedMenu = () => {
  const user = jwtDecode(localStorage.getItem("token"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disabled={user.role === "USER" && true}
      >
        Admin view
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/admin/admin-profile"
        >
          Admin profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/admin/all-users"
        >
          All users
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/admin/all-companies"
        >
          All companies
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PositionedMenu;
