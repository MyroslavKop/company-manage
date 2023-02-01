import { LOADING, RECEIVED, FAILED } from "./actionTypes";
import { getAllUsers } from "../../api/userAPI";

const loadAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const data = await getAllUsers();
    dispatch({ type: RECEIVED, payload: data });
  } catch (error) {
    dispatch({ type: FAILED, payload: error });
  }
};

export default loadAllUsers;
