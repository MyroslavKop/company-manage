import { useEffect } from "react";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import Spinner from "../components/common/Spinner";
import LinkButton from "../components/common/LinkButton";
import { loadUserProfileById } from "../redux/user/actions";

const UserIdProfile = () => {
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(loadUserProfileById(userId));
  }, [dispatch, userId]);

  const goBack = () => navigate(-1);
  return (
    <Box sx={{ p: 2 }}>
      <LinkButton
        padding="10px"
        onClick={goBack}
        icon={<KeyboardBackspaceIcon />}
      >
        Back to the list
      </LinkButton>
      {isLoading ? <Spinner /> : <User data={user} />}
    </Box>
  );
};

export default UserIdProfile;
