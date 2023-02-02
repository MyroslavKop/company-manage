import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import defaultAvatar from "../assets/img/default-avatar.png";

const User = ({ data, title }) => {
  return (
    <Box>
      <Typography
        textAlign="center"
        fontSize={40}
        fontWeight="bold"
        mt={2}
        mb={10}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "0 80px 80px",
          gap: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={defaultAvatar}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
            alt="default avatar"
          />
          <Typography
            variant="h3"
            fontSize={30}
          >{`${data.firstName} ${data.lastName}`}</Typography>
          <Typography variant="subtitle1">{data.position}</Typography>
        </Box>
        <Box>
          <Typography
            letterSpacing={5}
            variant="h2"
            fontSize={30}
            textAlign="center"
            borderBottom="1px solid gray"
          >
            INFORMATION
          </Typography>
          <Box sx={{ display: "flex", gap: "60px", pt: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle1" fontWeight="bold" fontSize={20}>
                Email
              </Typography>
              <Typography variant="body1" color="#797c81">
                {data.email}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" fontSize={20}>
                Phone
              </Typography>
              <Typography variant="body1" color="#797c81">
                {data.phoneNumber}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" fontSize={20}>
                Nickname
              </Typography>
              <Typography variant="body1" color="#797c81">
                {data.nickName}
              </Typography>
            </Box>
          </Box>
          <Typography
            letterSpacing={5}
            variant="h2"
            fontSize={30}
            textAlign="center"
            borderBottom="1px solid gray"
            mt={10}
          >
            ABOUT ME
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" fontSize={20}>
              Description
            </Typography>
            <Typography variant="body1">{data.description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

User.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    nickName: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
};

User.defaultProps = {
  title: "USER PROFILE",
};

export default User;
