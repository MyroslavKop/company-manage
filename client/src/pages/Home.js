import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EastIcon from "@mui/icons-material/East";
import { Link } from "@mui/material";
import LinkButton from "../components/common/LinkButton";

const Home = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, sm: 10 },
        maxWidth: { xs: "100%", sm: "700px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: 60,
            sm: 80,
          },
        }}
      >
        Company manager
      </Typography>
      {isAuth ? (
        <>
          <Typography
            variant="p"
            sx={{
              fontSize: {
                xs: 30,
                sm: 45,
              },
              ml: 0.4,
            }}
          >
            Welcome!
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: 25,
              mb: 1,
              ml: 0.4,
            }}
          >
            Do you want to create a new company or go to the{" "}
            <Link href="companies">list</Link>?
          </Typography>
        </>
      ) : (
        <Typography variant="p" fontSize={25} gutterBottom ml="5px">
          This simple application will help you create, manage and track your
          companies
        </Typography>
      )}
      <LinkButton
        fontSize={15}
        margin="5px"
        width="max-content"
        icon={<EastIcon />}
        router={isAuth ? "/create-company" : "/signup"}
      >
        {isAuth ? "Create company" : "Get started"}
      </LinkButton>
    </Box>
  );
};

export default Home;
