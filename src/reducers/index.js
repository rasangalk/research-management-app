import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import studentReducer from "./student.reducers";
import submissionReducer from "./submission.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  students: studentReducer,
  submissions: submissionReducer,
});

export default rootReducer;
