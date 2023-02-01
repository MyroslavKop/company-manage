import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import Spinner from "../components/common/Spinner";
import { loadUserProfile } from "../redux/user/actions";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const { data: admin, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUserProfile());
  }, [dispatch]);

  return isLoading ? <Spinner /> : <User data={admin} title="ADMIN PROFILE" />;
};

export default AdminProfile;
