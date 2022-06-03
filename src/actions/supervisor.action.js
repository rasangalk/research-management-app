import axios from "../helpers/axios";
import { supervisorConstants, submissionConstants } from "./constants";

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

export const EditSupervisorDetails = (id, data) => {
  return async (dispatch) => {
    // dispatch({ type: supervisorConstants.GET_SUPERVISOR_DETAILS_REQUEST });
    const res = await axios.patch("/supervisor/update/" + id, data);
    console.log("Student Details", res);
    if (res.status === 201) {
      // dispatch({
      //   type: supervisorConstants.GET_SUPERVISOR_DETAILS_SUCCESS,
      //   payload: { group: res.data.group },
      // });
    } else {
      // dispatch({
      //   type: supervisorConstants.GET_SUPERVISOR_DETAILS_FAILURE,
      //   payload: { error: res.data.error },
      // });
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

export const getStudentSubmission = (id) => {
  return async (dispatch) => {
    dispatch({
      type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_REQUEST,
    });
    const res = await axios.get("/supervisor/student-submission/view/" + id);
    if (res.status === 201) {
      dispatch({
        type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_SUCCESS,
        payload: { assignment: res.data.assignment },
      });
    } else {
      dispatch({
        type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getStudentSubmissions = () => {
  return async (dispatch) => {
    dispatch({
      type: supervisorConstants.GET_STUDENT_ASSIGNMENTS_REQUEST,
    });
    const res = await axios.get("/supervisor/student-submissions/");
    if (res.status === 201) {
      dispatch({
        type: supervisorConstants.GET_STUDENT_ASSIGNMENTS_SUCCESS,
        payload: { allSubmissions: res.data },
      });
    } else {
      dispatch({
        type: supervisorConstants.GET_STUDENT_ASSIGNMENTS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const evaluateStudentSubmission = (id, data) => {
  return async (dispatch) => {
    dispatch({
      type: supervisorConstants.EVALUATE_STUDENT_ASSIGNMENT_REQUEST,
    });
    const res = await axios.patch(
      "/supervisor/student-submission/evaluate/" + id,
      data
    );
    if (res.status === 201) {
      dispatch({
        type: supervisorConstants.EVALUATE_STUDENT_ASSIGNMENT_SUCCESS,
        payload: { message: res.data },
      });
    } else {
      dispatch({
        type: supervisorConstants.E,
        payload: { error: res.data.error },
      });
    }
  };
};
