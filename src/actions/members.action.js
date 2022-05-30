import axios from "../helpers/axios";
import { memebersConstants, memberConstants } from "./constants";

export const getAllMemebrs = () => {
  return async (dispatch) => {
    dispatch({ type: memebersConstants.GET_ALL_MEMBERS_REQUEST });
    const res = await axios.get("/admin/members");

    if (res.status === 200) {
      dispatch({
        type: memebersConstants.GET_ALL_MEMBERS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: memebersConstants.GET_ALL_MEMBERS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getMember = (id) => {
  return async (dispatch) => {
    dispatch({ type: memberConstants.GET_MEMBER_REQUEST });
    const res = await axios.get("/admin/member/" + id);
    if (res.status === 201) {
      dispatch({
        type: memberConstants.GET_MEMBER_SUCCESS,
        payload: { member: res.data.member },
      });
    } else {
      dispatch({
        type: memberConstants.GET_MEMBER_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const deleteMember = (id) => {
  return async (dispatch) => {
    console.log("Hello I am here", id);
    const res = await axios.delete(`/admin/members/delete/` + id);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        // type: movieConstants.ADD_NEW_MOVIE_SUCCESS,
        // payload: { categ: res.data.product }, //This "product" is in Backend --> Controllers --> Product.js --> 33 line
      });
    } else {
      dispatch({
        // type: movieConstants.ADD_NEW_MOVIE_FAILURE,
        // payload: res.data.error,
      });
    }
  };
};

export const getAllStaffMemebrs = () => {
  return async (dispatch) => {
    dispatch({ type: memebersConstants.GET_ALL_STAFF_MEMBERS_REQUEST });
    const res = await axios.get("/admin/staff-members");

    if (res.status === 200) {
      dispatch({
        type: memebersConstants.GET_ALL_STAFF_MEMBERS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: memebersConstants.GET_ALL_STAFF_MEMBERS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getAllSupervisors = () => {
  return async (dispatch) => {
    dispatch({ type: memebersConstants.GET_ALL_SUPERVISORS_REQUEST });
    const res = await axios.get("/admin/supervisors");

    if (res.status === 200) {
      dispatch({
        type: memebersConstants.GET_ALL_SUPERVISORS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: memebersConstants.GET_ALL_SUPERVISORS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const UpdateMemberDetails = (member) => {
  return async (dispatch) => {
    // dispatch({ type: submissionConstants.ADD_SUBMISSION_REQUEST });
    const res = await axios.patch("/admin/member/update", member);

    if (res.status === 201) {
      //   const { message } = res.data;
      //   dispatch({
      //     type: submissionConstants.ADD_SUBMISSION_SUCCESS,
      //     payload: {
      //       message,
      //     },
      //   });
    } else {
      //   dispatch({
      //     type: submissionConstants.ADD_SUBMISSION_FAILURE,
      //     payload: { error: res.data.error },
      //   });
    }
  };
};
