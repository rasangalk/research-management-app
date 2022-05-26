import { panelConstants } from "../actions/constants";

const initState = {
  panels: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case panelConstants.GET_ALL_PANEL_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case panelConstants.GET_ALL_PANEL_SUCCESS:
      state = {
        ...state,
        panels: action.payload.panels,
        pageRequest: false,
      };
      break;
    case panelConstants.GET_ALL_PANEL_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
