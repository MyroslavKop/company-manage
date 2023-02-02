import { LOADING, RECEIVED, FAILED } from "./actionTypes";

const initialState = {
  isLoading: true,
  data: {},
  error: "",
  edit: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case RECEIVED: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }

    case FAILED: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
