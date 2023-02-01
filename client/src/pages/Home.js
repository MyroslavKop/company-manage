import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EastIcon from "@mui/icons-material/East";
import { useSelector } from "react-redux";
import LinkButton from "../components/common/LinkButton";

const Home = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", p: 10, width: "700px" }}
    >
      <Typography variant="h1" fontSize={80}>
        Company manager
      </Typography>

      <LinkButton
        fontSize={15}
        padding="10px"
        width="max-content"
        icon={<EastIcon />}
        router={isAuth ? "/create_company" : "/signup"}
      >
        {isAuth ? "Create company" : "Get started"}
      </LinkButton>
    </Box>
  );
};

export default Home;
