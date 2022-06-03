import { staffConstants } from "../actions/constants";

const initState = {
  panel: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case staffConstants.GET_STAFF_PANEL_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case staffConstants.GET_STAFF_PANEL_SUCCESS:
      state = {
        ...state,
        panel: action.payload.panel,
        pageRequest: false,
      };
      break;
    case staffConstants.GET_STAFF_PANEL_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
