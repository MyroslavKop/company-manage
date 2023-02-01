import { FAILED, LOADING, RECEIVED } from "./actionTypes";
import { getCompany } from "../../api/companyAPI";

const loadCompanyProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getCompany(id);
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};

export default loadCompanyProfile;
