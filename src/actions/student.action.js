import axios from "../helpers/axios";
import { studentConstants } from "./constants";

export const getGroupDetails = () => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.GET_GROUP_DETAILS_REQUEST });
    const res = await axios.get(
      "/student/group-details/6289346a2afb74bdec8a64a3"
    );
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
