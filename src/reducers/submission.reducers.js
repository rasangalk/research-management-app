import { submissionConstants } from "../actions/constants";

const initState = {
  submissions: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case submissionConstants.GET_SUBMISSION_DETAILS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case submissionConstants.GET_SUBMISSION_DETAILS_SUCCESS:
      state = {
        ...state,
        submissions: action.payload.submissions,
        pageRequest: false,
      };
      break;
    case submissionConstants.GET_SUBMISSION_DETAILS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
