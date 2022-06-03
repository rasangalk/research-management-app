import { supervisorConstants } from "../actions/constants";

const initState = {
  allSubmissions: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case supervisorConstants.GET_STUDENT_ASSIGNMENTS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENTS_SUCCESS:
      state = {
        ...state,
        allSubmissions: action.payload.allSubmissions,
        pageRequest: false,
      };
      break;
    case supervisorConstants.GET_STUDENT_ASSIGNMENTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
