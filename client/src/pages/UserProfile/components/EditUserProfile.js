import PropTypes from "prop-types";
import EditUser from "../../../components/EditUser/EditUser";
import { editUser } from "../../../api/userAPI";
import dataPropTypes from "../../../components/EditUser/PropTypes";

const EditUserProfile = ({ data, setEdit }) => {
  const handleEdit = async (result) => {
    await editUser(result);
    setEdit(false);
  };

  return <EditUser data={data} handleEdit={handleEdit} />;
};

export default EditUserProfile;

EditUserProfile.propTypes = {
  data: PropTypes.shape(dataPropTypes).isRequired,
  setEdit: PropTypes.func.isRequired,
};
