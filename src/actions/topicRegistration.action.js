import axios from "../helpers/axios";
import { topicConstants } from "./constants";

export const registerTopic = (form) => {
  console.log(form);
  return async (dispatch) => {
    dispatch({ type: topicConstants.ADD_NEW_TOPIC_REQUEST });
    const res = await axios.post(`/student/topic/register`, { ...form });
    console.log(res);
    if (res.status === 201) {
      dispatch({
        type: topicConstants.ADD_NEW_TOPIC_SUCCESS,
        // payload: { categ: res.data.product }, //This "product" is in Backend --> Controllers --> Product.js --> 33 line
      });
    } else {
      dispatch({
        type: topicConstants.ADD_NEW_TOPIC_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
