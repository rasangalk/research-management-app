import { supervisorConstants } from "../actions/constants";

const initState = {
  supervisor: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case supervisorConstants.GET_SUPERVISOR_DETAILS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case supervisorConstants.GET_SUPERVISOR_DETAILS_SUCCESS:
      state = {
        ...state,
        supervisor: action.payload.group,
        pageRequest: false,
      };
      break;
    case supervisorConstants.GET_SUPERVISOR_DETAILS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
