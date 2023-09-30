import { userConstants, memberConstants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    let res;

    if (user.code) {
      res = await axios.post("/auth/google/signup", {
        ...user,
      });
    } else {
      res = await axios.post("/student/signup", {
        ...user,
      });
    }

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const memberReg = (user) => {
  // console.log(user);
  return async (dispatch) => {
    dispatch({ type: memberConstants.MEMBER_REGISTER_REQUEST });
    const res = await axios.post("/admin/staffMember/add", {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: memberConstants.MEMBER_REGISTER_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: memberConstants.MEMBER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
