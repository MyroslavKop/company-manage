import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import LinkButton from "../components/common/LinkButton";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        padding: "0 40px",
      }}
    >
      <Typography variant="h1" fontSize={70}>
        Page not found
      </Typography>
      <Typography variant="p" fontSize={25} textAlign="center">
        Sorry, but the page you are looking for is not found. Please go back to
        the homepage.
      </Typography>
      <LinkButton
        router="/"
        width="150px"
        padding="10px"
        icon={<HomeIcon />}
        fontSize={15}
        margin="20px"
      >
        Go Home
      </LinkButton>
    </Box>
  );
};

export default NotFound;
