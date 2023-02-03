import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { editUserById } from "../../../api/userAPI";
import EditUser from "../../../components/EditUser/EditUser";
import dataPropTypes from "../../../components/EditUser/PropTypes";

const EditUserIdProfile = ({ data, setEdit }) => {
  const { userId } = useParams();

  const handleEdit = async (result) => {
    await editUserById(userId, result);
    setEdit(false);
  };

  return <EditUser data={data} handleEdit={handleEdit} />;
};

EditUserIdProfile.propTypes = {
  data: PropTypes.shape(dataPropTypes).isRequired,
  setEdit: PropTypes.func.isRequired,
};

export default EditUserIdProfile;
