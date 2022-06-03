import axios from "../helpers/axios";
import { staffConstants } from "./constants";

export const getPanelByPanelId = (panelid) => {
  console.log("Hello");
  return async (dispatch) => {
    dispatch({ type: staffConstants.GET_STAFF_PANEL_REQUEST });
    const res = await axios.get("/staff/getPanel/" + panelid);
    if (res.status === 201) {
      dispatch({
        type: staffConstants.GET_STAFF_PANEL_SUCCESS,
        payload: { panel: res.data.panel },
      });
    } else {
      dispatch({
        type: staffConstants.GET_STAFF_PANEL_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
