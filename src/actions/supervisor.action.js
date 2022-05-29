import axios from "../helpers/axios";
import { supervisorConstants } from "./constants";

export const getSupervisorDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: supervisorConstants.GET_SUPERVISOR_DETAILS_REQUEST });
    const res = await axios.get("/student/group-details/" + id);
    console.log("Student Details", res);
    if (res.status === 201) {
      dispatch({
        type: supervisorConstants.GET_SUPERVISOR_DETAILS_SUCCESS,
        payload: { group: res.data.group },
      });
    } else {
      dispatch({
        type: supervisorConstants.GET_SUPERVISOR_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
