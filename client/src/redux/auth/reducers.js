import { AUTH_FAILED, AUTH_SUCCESS, LOGOUT, CLOSE_ALERT } from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  isAuth: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        error: false,
        errorMessage: "",
        isAuth: true,
      };
    }

    case AUTH_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        error: true,
        isAuth: false,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case CLOSE_ALERT: {
      return {
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
