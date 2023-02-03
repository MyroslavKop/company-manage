import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import User from "../../components/User";
import Spinner from "../../components/common/Spinner";
import { loadUserProfile } from "../../redux/user/actions";
import EditUserProfile from "./components/EditUserProfile";

const UserProfile = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);

  const handleEdit = () => {
    setEdit(true);
  };

  useEffect(() => {
    dispatch(loadUserProfile());
  }, [dispatch, edit]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box sx={{ p: 2 }}>
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
      {!edit ? (
        <User data={user} />
      ) : (
        <EditUserProfile data={user} setEdit={setEdit} />
      )}
    </Box>
  );
};
export default UserProfile;
