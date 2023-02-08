import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import defaultAvatar from "../assets/img/default-avatar.png";

const User = ({ data, title }) => {
  return (
    <Box>
      <Typography
        fontSize={40}
        variant="h1"
        sx={{
          mb: {
            xs: 3,
            md: 10,
          },
          mt: {
            xs: 4,
            sm: 2,
          },
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-evenly",
          gap: 2,
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
            variant="h2"
            fontSize={35}
          >{`${data.firstName} ${data.lastName}`}</Typography>
          <Typography variant="p" fontSize={20}>
            {data.position}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
              },
              mt: 2,
              mb: 2,
              letterSpacing: 4,
              borderBottom: "1px solid black",
              textAlign: "center",
            }}
          >
            INFORMATION
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: "30px",
                sm: "60px",
              },
              flexWrap: "wrap",
              alignItems: "center",
              pt: 2,
              justifyContent: {
                xs: "flex-start",
                sm: "center",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3" fontWeight="bold" fontSize={20}>
                Email
              </Typography>
              <Typography variant="p">{data.email}</Typography>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold" fontSize={20}>
                Phone
              </Typography>
              <Typography variant="p">{data.phoneNumber}</Typography>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold" fontSize={20}>
                Nickname
              </Typography>
              <Typography variant="p">{data.nickName}</Typography>
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
              textAlign: "center",
            }}
          >
            ABOUT ME
          </Typography>
          <Typography variant="p" fontSize={18}>
            {data.description}
          </Typography>
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
