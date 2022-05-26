import { studentConstants } from "../actions/constants";

const initState = {
  groups: [],
  group: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case studentConstants.GET_GROUP_DETAILS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case studentConstants.GET_GROUP_DETAILS_SUCCESS:
      state = {
        ...state,
        group: action.payload.group,
        pageRequest: false,
      };
      break;
    case studentConstants.GET_GROUP_DETAILS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;

    case studentConstants.GET_ALL_GROUPS_DETAILS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case studentConstants.GET_ALL_GROUPS_DETAILS_SUCCESS:
      state = {
        ...state,
        groups: action.payload.groups,
        pageRequest: false,
      };
      break;
    case studentConstants.GET_ALL_GROUPS_DETAILS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
