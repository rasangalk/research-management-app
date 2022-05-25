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
