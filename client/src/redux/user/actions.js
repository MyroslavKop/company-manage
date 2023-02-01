import { FAILED, LOADING, RECEIVED } from "./actionTypes";
import { getUser, getUserById } from "../../api/userAPI";

export const loadUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getUser();
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};

export const loadUserProfileById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getUserById(id);
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};
