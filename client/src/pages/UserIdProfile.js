import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import User from "../components/User";
import Spinner from "../components/common/Spinner";
import LinkButton from "../components/common/LinkButton";
import { loadUserProfileById } from "../redux/user/actions";
import { editUserById } from "../api/userAPI";
import EditUser from "../components/EditUser";
import useEdit from "../hooks/useEdit";

const UserIdProfile = () => {
  const { edit, openEdit, closeEdit } = useEdit();
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(loadUserProfileById(userId));
  }, [dispatch, userId, edit]);

  const handleEdit = async (result) => {
    await editUserById(userId, result);
    closeEdit();
  };
  const goBack = () => navigate(-1);

  if (isLoading) return <Spinner />;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LinkButton
          padding="10px"
          onClick={goBack}
          icon={<KeyboardBackspaceIcon />}
        >
          Back
        </LinkButton>
        {!edit && (
          <Button
            onClick={openEdit}
            variant="contained"
            size="large"
            endIcon={<EditIcon />}
          >
            Edit
          </Button>
        )}
      </Box>
      {!edit ? (
        <User data={user} />
      ) : (
        <EditUser handleEdit={handleEdit} data={user} />
      )}
    </Box>
  );
};

export default UserIdProfile;
