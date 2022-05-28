import axios from "../helpers/axios";
import { markingSchemaConstants } from "./constants";

export const CreateMarkingSchemes = (schema) => {
  return async (dispatch) => {
    dispatch({ type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_SUCCESS });
    const res = await axios.post("/admin/markingSchema/add", schema);

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      dispatch({
        type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
