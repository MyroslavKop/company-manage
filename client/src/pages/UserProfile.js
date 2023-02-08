import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import User from "../components/User";
import Spinner from "../components/common/Spinner";
import { loadUserProfile } from "../redux/user/actions";
import EditUser from "../components/EditUser";
import { editUser } from "../api/userAPI";
import useEdit from "../hooks/useEdit";

const UserProfile = () => {
  const { edit, openEdit, closeEdit } = useEdit();
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);

  const handleEdit = async (result) => {
    await editUser(result);
    closeEdit();
  };

  useEffect(() => {
    dispatch(loadUserProfile());
  }, [dispatch, edit]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box sx={{ p: 3 }}>
      {!edit && (
        <Button
          onClick={openEdit}
          variant="contained"
          size="large"
          endIcon={<EditIcon />}
        >
          Edit profile
        </Button>
      )}
      {!edit ? (
        <User data={user} />
      ) : (
        <EditUser handleEdit={handleEdit} data={user} />
      )}
    </Box>
  );
};
export default UserProfile;
