import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Company from "./components/Company";
import LinkButton from "../../components/common/LinkButton";
import { deleteCompany } from "../../api/companyAPI";
import loadCompanyProfile from "../../redux/company/actions";
import Spinner from "../../components/common/Spinner";
import EditCompany from "./components/EditCompany";

const CompanyProfile = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const { data: company, isLoading } = useSelector((state) => state.company);
  const navigate = useNavigate();
  const { companyId } = useParams();

  useEffect(() => {
    dispatch(loadCompanyProfile(companyId));
  }, [companyId, dispatch, edit]);

  const handleDelete = async () => {
    navigate(-1);
    await deleteCompany(companyId);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    setEdit(true);
  };

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
            data={company}
            onClick={handleEdit}
            variant="contained"
            size="large"
            endIcon={<EditIcon />}
          >
            Edit company
          </Button>
        )}
      </Box>
      {!edit ? (
        <Company data={company} onClick={handleDelete} />
      ) : (
        <EditCompany data={company} setEdit={setEdit} />
      )}
    </Box>
  );
};

export default CompanyProfile;
