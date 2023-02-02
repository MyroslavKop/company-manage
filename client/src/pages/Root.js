import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Spinner from "../components/common/Spinner";
import { checkToken } from "../redux/auth/actions";

const Root = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken()).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Root;
