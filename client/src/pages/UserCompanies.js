import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { loadUsersCompanies } from "../redux/companies/actions";
import CompaniesTable from "../components/CompaniesTable";
import Spinner from "../components/common/Spinner";

import LinkButton from "../components/common/LinkButton";

const UserCompanies = () => {
  const dispatch = useDispatch();
  const { data: companies, isLoading } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(loadUsersCompanies());
  }, [dispatch]);

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 25,
              sm: 30,
            },
          }}
        >
          List of your companies
        </Typography>
        <LinkButton router="/create-company">Create company</LinkButton>
      </Box>
      {isLoading ? <Spinner /> : <CompaniesTable data={companies} />}
    </Box>
  );
};

export default UserCompanies;
