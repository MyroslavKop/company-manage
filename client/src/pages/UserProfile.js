import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import Spinner from "../components/common/Spinner";
import { loadUserProfile } from "../redux/user/actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data: user, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUserProfile());
  }, [dispatch]);

  return isLoading ? <Spinner /> : <User data={user} />;
};
export default UserProfile;
