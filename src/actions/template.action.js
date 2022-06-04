import axios from "../helpers/axios";
import { templateConstants } from "./constants";

export const getTemplates = () => {
  return async (dispatch) => {
    dispatch({ type: templateConstants.GET_ALL_TEMPLATES_REQUEST });
    const res = await axios.get("/admin/templates");

    if (res.status === 200) {
      dispatch({
        type: templateConstants.GET_ALL_TEMPLATES_SUCCESS,
        payload: { templates: res.data.templates },
      });
    } else {
      dispatch({
        type: templateConstants.GET_ALL_TEMPLATES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addTemplates = (data) => {
  return async (dispatch) => {
    // dispatch({ type: templateConstants.GET_ALL_TEMPLATES_REQUEST });
    const res = await axios.post("/admin/template/add", data);

    if (res.status === 200) {
      // dispatch({
      //   type: templateConstants.GET_ALL_TEMPLATES_SUCCESS,
      //   payload: { templates: res.data.templates },
      // });
    } else {
      // dispatch({
      //   type: templateConstants.GET_ALL_TEMPLATES_FAILURE,
      //   payload: { error: res.data.error },
      // });
    }
  };
};

export const deleteTemplates = (id) => {
  return async (dispatch) => {
    dispatch({ type: templateConstants.GET_ALL_TEMPLATES_REQUEST });
    const res = await axios.delete("/admin/template/delete/" + id);

    // if (res.status === 200) {
    //   dispatch({
    //     type: templateConstants.GET_ALL_TEMPLATES_SUCCESS,
    //     payload: { templates: res.data.templates },
    //   });
    // } else {
    //   dispatch({
    //     type: templateConstants.GET_ALL_TEMPLATES_FAILURE,
    //     payload: { error: res.data.error },
    //   });
    // }
  };
};
