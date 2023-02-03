import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import User from "../../components/User";
import Spinner from "../../components/common/Spinner";
import LinkButton from "../../components/common/LinkButton";
import { loadUserProfileById } from "../../redux/user/actions";
import EditUserIdProfile from "./components/EditUserIdProfile";

const UserIdProfile = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(loadUserProfileById(userId));
  }, [dispatch, userId, edit]);

  const handleEdit = () => {
    setEdit(true);
  };

  const goBack = () => navigate(-1);

  if (isLoading) return <Spinner />;

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LinkButton
          padding="10px"
          onClick={goBack}
          icon={<KeyboardBackspaceIcon />}
        >
          Back to the list
        </LinkButton>
        {!edit && (
          <Button
            onClick={handleEdit}
            variant="contained"
            size="large"
            endIcon={<EditIcon />}
          >
            Edit profile
          </Button>
        )}
      </Box>
      {!edit ? (
        <User data={user} />
      ) : (
        <EditUserIdProfile data={user} setEdit={setEdit} />
      )}
    </Box>
  );
};

export default UserIdProfile;
