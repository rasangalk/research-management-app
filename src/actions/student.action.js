import axios from "../helpers/axios";
import { studentConstants } from "./constants";

export const getGroupDetails = (id) => {
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

export const getAllGroupsDetails = () => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.GET_ALL_GROUPS_DETAILS_REQUEST });
    const res = await axios.get("/admin/group-details");

    if (res.status === 200) {
      dispatch({
        type: studentConstants.GET_ALL_GROUPS_DETAILS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: studentConstants.GET_ALL_GROUPS_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const UpdateStudentGroupsDetails = (id, data) => {
  return async (dispatch) => {
    // dispatch({ type: studentConstants.GET_ALL_GROUPS_DETAILS_REQUEST });
    const res = await axios.patch("/student/groupDetails/update/" + id, data);

    if (res.status === 200) {
      // dispatch({
      //   type: studentConstants.GET_ALL_GROUPS_DETAILS_SUCCESS,
      //   payload: res.data,
      // });
    } else {
      // dispatch({
      //   type: studentConstants.GET_ALL_GROUPS_DETAILS_FAILURE,
      //   payload: { error: res.data.error },
      // });
    }
  };
};
