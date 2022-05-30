import { supervisorConstants } from "../actions/constants";
import supervisorReducer from "./supervisor.reducer";

const initState = {
  submission: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_SUCCESS:
      state = {
        ...state,
        submission: action.payload.submission,
        pageRequest: false,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
