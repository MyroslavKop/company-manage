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
        padding: "80px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" fontSize={70}>
          {data.name}
        </Typography>
        <Typography
          variant="h2"
          fontSize={30}
          borderBottom="1px solid grey"
          mt={4}
          mb={2}
          letterSpacing={4}
        >
          INFORMATION
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography sx={categoryTitle}>Address</Typography>
          <Typography color="#797c81">{data.address}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Service</Typography>
          <Typography color="#797c81">{data.serviceOfActivity}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Number of employees</Typography>
          <Typography color="#797c81">{data.numberOfEmployees}</Typography>
        </Box>
        <Box>
          <Typography sx={categoryTitle}>Type</Typography>
          <Typography color="#797c81">{data.type}</Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        fontSize={30}
        borderBottom="1px solid grey"
        mt={5}
        mb={1}
        letterSpacing={4}
      >
        ABOUT US
      </Typography>
      <Typography variant="p" fontSize={20}>
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
