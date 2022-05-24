import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import authReducer from "./auth.reducers";
import studentReducer from "./student.reducers";
import submissionReducer from "./submission.reducers";
import templateReducer from "./template.reducers";
import submissionByIdReducer from "./submissionById.reducers";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  students: studentReducer,
  templates: templateReducer,
  submissions: submissionReducer,
  submission: submissionByIdReducer,
});

export default rootReducer;
