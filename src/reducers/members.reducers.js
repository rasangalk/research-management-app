import { memebersConstants } from "../actions/constants";

const initState = {
  members: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case memebersConstants.GET_ALL_MEMBERS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case memebersConstants.GET_ALL_MEMBERS_SUCCESS:
      state = {
        ...state,
        members: action.payload.members,
        pageRequest: false,
      };
      break;
    case memebersConstants.GET_ALL_MEMBERS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
