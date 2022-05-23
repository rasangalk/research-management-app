import { templateConstants } from "../actions/constants";

const initState = {
  templates: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case templateConstants.GET_ALL_TEMPLATES_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case templateConstants.GET_ALL_TEMPLATES_SUCCESS:
      state = {
        ...state,
        templates: action.payload.templates,
        pageRequest: false,
      };

      break;
    case templateConstants.GET_ALL_TEMPLATES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
