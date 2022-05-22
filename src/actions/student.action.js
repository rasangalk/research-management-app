import axios from "../helpers/axios";
import { studentConstants } from "./constants";

export const getGroupDetails = (id) => {
  console.log("ID eka yako", id);
  return async (dispatch) => {
    dispatch({ type: studentConstants.GET_GROUP_DETAILS_REQUEST });
    const res = await axios.get("/student/group-details/" + id);
    console.log("Student Details", res);
    if (res.status === 201) {
      dispatch({
        type: studentConstants.GET_GROUP_DETAILS_SUCCESS,
        payload: { group: res.data.group },
      });
    } else {
      dispatch({
        type: studentConstants.GET_GROUP_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
