import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Company from "../components/Company";
import LinkButton from "../components/common/LinkButton";
import { deleteCompany } from "../api/companyAPI";
import loadCompanyProfile from "../redux/company/actions";
import Spinner from "../components/common/Spinner";

const CompanyProfile = () => {
  const dispatch = useDispatch();
  const { data: company, isLoading } = useSelector((state) => state.company);

  const navigate = useNavigate();
  const { companyId } = useParams();

  useEffect(() => {
    dispatch(loadCompanyProfile(companyId));
  }, [companyId, dispatch]);

  const handleDelete = async () => {
    navigate(-1);
    await deleteCompany(companyId);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ p: 2 }}>
      <LinkButton
        padding="10px"
        onClick={goBack}
        icon={<KeyboardBackspaceIcon />}
      >
        Back to the list
      </LinkButton>
      {isLoading ? (
        <Spinner height="400px" />
      ) : (
        <Company data={company} onClick={handleDelete} />
      )}
    </Box>
  );
};

export default CompanyProfile;
