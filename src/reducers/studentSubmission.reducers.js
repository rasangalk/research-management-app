import { supervisorConstants } from "../actions/constants";
import supervisorReducer from "./supervisor.reducer";

const initState = {
  assignment: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_SUCCESS:
      state = {
        ...state,
        assignment: action.payload.assignment,
        pageRequest: false,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
