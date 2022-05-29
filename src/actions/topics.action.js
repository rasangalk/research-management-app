import axios from "../helpers/axios";
import { topicConstants } from "./constants";

export const getAllTopics = (id) => {
  return async (dispatch) => {
    dispatch({ type: topicConstants.GET_TOPICS_REQUEST });
    const res = await axios.get("/supervisor/topics/" + id);

    if (res.status === 200) {
      dispatch({
        type: topicConstants.GET_TOPICS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: topicConstants.GET_TOPICS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getTopicById = (id) => {
  return async (dispatch) => {
    dispatch({ type: topicConstants.GET_TOPIC_REQUEST });
    const res = await axios.get("/supervisor/getTopics/" + id);
    if (res.status === 201) {
      dispatch({
        type: topicConstants.GET_TOPIC_SUCCESS,
        payload: { topic: res.data.topic },
      });
    } else {
      dispatch({
        type: topicConstants.GET_TOPIC_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const SupervisorUpdateTopicDeials = (data) => {
  return async (dispatch) => {
    // dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
    const res = await axios.patch("/sueprvisor/topic/update", data);

    if (res.status === 202) {
      const { message } = res.data;
      //   dispatch({
      //     type: submissionConstants.EDIT_SUBMISSION_DETAILS_SUCCESS,
      //     payload: {
      //       message,
      //     },
      //   });
    } else {
      //   dispatch({
      //     type: submissionConstants.EDIT_SUBMISSION_DETAILS_FAILURE,
      //     payload: { error: res.data.error },
      //   });
    }
  };
};

export const SupervisorUpdateTopicTick = (data) => {
  return async (dispatch) => {
    // dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
    const res = await axios.patch("/sueprvisor/topic/updateTopicTick", data);
    console.log(res.data);
    if (res.status === 202) {
      const { message } = res.data;
      //   dispatch({
      //     type: submissionConstants.EDIT_SUBMISSION_DETAILS_SUCCESS,
      //     payload: {
      //       message,
      //     },
      //   });
    } else {
      //   dispatch({
      //     type: submissionConstants.EDIT_SUBMISSION_DETAILS_FAILURE,
      //     payload: { error: res.data.error },
      //   });
    }
  };
};
// export const UpdateStudentGrpPanel = (form) => {
//   return async (dispatch) => {
//     console.log("FORM", form);
//     const res = await axios.patch(
//       `/admin/groupDetails/update/628f42d7f81f32a8f53c08f6`,
//       form
//     );
//     console.log(res);
//     if (res.status === 202) {
//       dispatch({
//         // type: movieConstants.ADD_NEW_MOVIE_SUCCESS,
//         // payload: { categ: res.data.product },
//       });
//     } else {
//       dispatch({});
//     }
//   };
// };

// export const AddFileSubmission = (submission) => {
//   for (var value of submission.values()) {
//     console.log(value);
//   }
//   return async (dispatch) => {
//     dispatch({ type: submissionConstants.ADD_SUBMISSION_FILE_REQUEST });
//     const res = await axios.post("/student/submission/add", submission);

//     if (res.status === 201) {
//       const { message } = res.data;
//       dispatch({
//         type: submissionConstants.ADD_SUBMISSION_FILE_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       dispatch({
//         type: submissionConstants.ADD_SUBMISSION_FILE_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// export const getMovie = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: movieConstants.GET_MOVIE_REQUEST });
//     const res = await axios.get(id);
//     if (res.status === 201) {
//       dispatch({
//         type: movieConstants.GET_MOVIE_SUCCESS,
//         payload: { movie: res.data.movie },
//       });
//     } else {
//       dispatch({
//         type: movieConstants.GET_MOVIE_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// export const AddtoCart = (item) => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
//     const res = await axios.post("/user/cart/addtocard", {
//       ...item,
//     });

//     if (res.status === 201) {
//       const { message } = res.data;
//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: cartConstants.ADD_TO_CART_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     }
//   };
// };

// export const getCart = () => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.GET_TO_CART_REQUEST });
//     const res = await axios.get("/user/cart/getCartItems");
//     console.log(res);
//     if (res.status === 200) {
//       dispatch({
//         type: cartConstants.GET_TO_CART_SUCCESS,
//         payload: { cartItemList: res.data.cartItems },
//       });
//     } else {
//       dispatch({
//         type: cartConstants.GET_TO_CART_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// export const RemoveFromCart = (item) => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.REMOVE_FROM_CART_REQUEST });
//     const res = await axios.post("/user/cart/removeCartItems", {
//       ...item,
//     });

//     if (res.status === 202) {
//       const { message } = res.data;
//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: cartConstants.REMOVE_FROM_CART_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     }
//   };
// };
