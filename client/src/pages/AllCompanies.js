import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CompaniesTable from "../components/CompaniesTable";
import { loadAllCompanies } from "../redux/companies/actions";
import Spinner from "../components/common/Spinner";

const AllCompanies = () => {
  const dispatch = useDispatch();
  const { data: companies, isLoading } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    dispatch(loadAllCompanies());
  }, [dispatch]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography variant="h2" fontSize={30}>
          List of all companies
        </Typography>
      </Box>
      {isLoading ? <Spinner /> : <CompaniesTable data={companies} />}
    </Box>
  );
};

export default AllCompanies;
