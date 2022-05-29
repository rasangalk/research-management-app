import { markingSchemaConstants } from "../actions/constants";

const initState = {
  markingSchema: [],
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case markingSchemaConstants.GET_MARKING_SCHEME_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case markingSchemaConstants.GET_MARKING_SCHEME_SUCCESS:
      state = {
        ...state,
        markingSchema: action.payload.markingSchema,
        pageRequest: false,
      };
      break;
    case markingSchemaConstants.GET_MARKING_SCHEME_REQUEST:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
