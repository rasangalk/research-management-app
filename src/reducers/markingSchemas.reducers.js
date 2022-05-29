import { markingSchemaConstants } from "../actions/constants";

const initState = {
  markingSchemas: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case markingSchemaConstants.GET_ALL_MARKING_SCHEME_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case markingSchemaConstants.GET_ALL_MARKING_SCHEME_SUCCESS:
      state = {
        ...state,
        markingSchemas: action.payload.markingSchemas,
        pageRequest: false,
      };
      break;
    case markingSchemaConstants.GET_ALL_MARKING_SCHEME_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
