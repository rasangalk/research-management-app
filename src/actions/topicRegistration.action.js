import axios from "../helpers/axios";
import { topicConstants } from "./constants";

let Cookies = {
  get: {
    csrfToken:
      "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
  },
};
export const registerTopic = (form) => {
  return async (dispatch) => {
    dispatch({ type: topicConstants.ADD_NEW_TOPIC_REQUEST });

    try {
      const csrfToken = Cookies.get.csrfToken; // Retrieve CSRF token from a cookie

      const headers = {
        "X-CSRF-Token": csrfToken,
      };

      const res = await axios.post(
        `/student/topic/register`,
        { ...form },
        { headers }
      );

      if (res.status === 201) {
        dispatch({
          type: topicConstants.ADD_NEW_TOPIC_SUCCESS,
        });
      } else {
        dispatch({
          type: topicConstants.ADD_NEW_TOPIC_FAILURE,
          payload: res.data.error,
        });
      }
    } catch (error) {
      // Handle Axios errors
      console.error("Axios error:", error);
      dispatch({
        type: topicConstants.ADD_NEW_TOPIC_FAILURE,
        payload: "An error occurred while registering the topic.",
      });
    }
  };
};
