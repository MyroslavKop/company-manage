import { combineReducers } from "redux";
import authReducer from "./auth/reducers";
import companiesReducer from "./companies/reducers";
import companyReducer from "./company/reducers";
import userReducer from "./user/reducers";
import usersReducer from "./users/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  companies: companiesReducer,
  company: companyReducer,
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
