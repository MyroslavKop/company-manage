import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UsersTable from "./component/UsersTable";
import loadAllUsers from "../../redux/users/action";
import Spinner from "../../components/common/Spinner";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { data: users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadAllUsers());
  }, [dispatch]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography variant="h2" fontSize={30}>
          List of all users
        </Typography>
      </Box>
      {isLoading ? <Spinner /> : <UsersTable data={users} />}
    </Box>
  );
};

export default AllUsers;
