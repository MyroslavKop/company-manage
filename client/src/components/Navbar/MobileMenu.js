import PropTypes from "prop-types";
import { SwipeableDrawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import PositionedMenu from "../common/PositionedMenu";

const navigationLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "My companies", href: "companies" },
  { id: 3, name: "My profile", href: "profile" },
];

const MobileMenu = ({ setOpen, open }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton sx={{ mr: "0 auto" }} onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          gap: 4,
          alignItems: "center",
        }}
      >
        {navigationLinks.map(({ id, name, href }) => (
          <Button
            key={id}
            color="inherit"
            component={RouterLink}
            sx={{ fontSize: 16 }}
            to={href}
          >
            {name}
          </Button>
        ))}
        <PositionedMenu />
      </Box>
    </SwipeableDrawer>
  );
};

MobileMenu.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
