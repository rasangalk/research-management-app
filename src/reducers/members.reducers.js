import { memebersConstants, memberConstants } from "../actions/constants";

const initState = {
  members: [],
  member: {},
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

    case memberConstants.GET_MEMBER_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case memberConstants.GET_MEMBER_SUCCESS:
      state = {
        ...state,
        member: action.payload.member,
        pageRequest: false,
      };
      break;
    case memberConstants.GET_MEMBER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
