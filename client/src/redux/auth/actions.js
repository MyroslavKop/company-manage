import { AUTH_FAILED, AUTH_SUCCESS, LOGOUT, CLOSE_ALERT } from "./actionTypes";
import { login, check } from "../../api/userAPI";

export const authUser = (data) => async (dispatch) => {
  try {
    await login(data);
    dispatch({ type: AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: AUTH_FAILED, payload: error.response.data.message });
  }
};

export const logout = () => ({
  type: LOGOUT,
});

export const checkToken = () => async (dispatch) => {
  await check();
  dispatch({ type: AUTH_SUCCESS });
};

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
