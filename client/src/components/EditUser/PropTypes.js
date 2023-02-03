import PropTypes from "prop-types";

const dataPropTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    nickName: PropTypes.string,
    phoneNumber: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default dataPropTypes;
