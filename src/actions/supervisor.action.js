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

export const getStudentSubmissionsByName = (name) => {
  return async (dispatch) => {
    dispatch({
      type: supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_REQUEST,
    });
    const res = await axios.get("/supervisor/student-submission/" + name);
    if (res.status === 201) {
      dispatch({
        type: supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_SUCCESS,
        payload: { submission: res.data.submission },
      });
    } else {
      dispatch({
        type: supervisorConstants.GET_STUDENT_ASSIGNMENT_BY_NAME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
