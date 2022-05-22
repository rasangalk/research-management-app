import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import studentReducer from "./student.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  students: studentReducer,
});

export default rootReducer;
