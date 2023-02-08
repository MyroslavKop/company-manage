import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const categoryTitle = {
  fontWeight: "bold",
  fontSize: 20,
};

const Company = ({ data, onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: 50,
              sm: 70,
            },
            mt: 5,
          }}
        >
          {data.name}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 25,
              sm: 30,
            },
            mt: 4,
            mb: 2,
            letterSpacing: 4,
            borderBottom: "1px solid black",
          }}
        >
          INFORMATION
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "1fr 1fr 1fr 1fr",
          },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography sx={categoryTitle}>Address</Typography>
          <Typography>{data.address}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Service</Typography>
          <Typography>{data.serviceOfActivity}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Number of employees</Typography>
          <Typography>{data.numberOfEmployees}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Type</Typography>
          <Typography>{data.type}</Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: 25,
            sm: 30,
          },
          mt: 4,
          mb: 2,
          letterSpacing: 4,
          borderBottom: "1px solid black",
        }}
      >
        ABOUT US
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontSize: {
            xs: 18,
            sm: 20,
          },
          textAlign: "center",
          maxWidth: {
            xs: "100%",
            sm: "600px",
          },
        }}
      >
        {data.description}
      </Typography>
      <IconButton size="large" color="error" sx={{ mt: 5 }} onClick={onClick}>
        <DeleteForeverIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

Company.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    serviceOfActivity: PropTypes.string,
    numberOfEmployees: PropTypes.number,
    type: PropTypes.string,
    description: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Company;
