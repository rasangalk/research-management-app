import axios from "../helpers/axios";
import { memebersConstants, moviesConstants } from "./constants";

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
