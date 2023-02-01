import { LOADING, RECEIVED, FAILED } from "./actionTypes";
import { getAllCompanies, getAllUsersCompanies } from "../../api/companyAPI";

export const loadUsersCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getAllUsersCompanies();
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};

export const loadAllCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getAllCompanies();
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};
