import { submissionConstants } from "../actions/constants";

const initState = {
  submission: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case submissionConstants.GET_ONE_SUBMISSION_DETAIL_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case submissionConstants.GET_ONE_SUBMISSION_DETAIL_SUCCESS:
      state = {
        ...state,
        submission: action.payload.submission,
        pageRequest: false,
      };
      break;
    case submissionConstants.GET_ONE_SUBMISSION_DETAIL_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
