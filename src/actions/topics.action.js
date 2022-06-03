import axios from "../helpers/axios";
import { topicConstants } from "./constants";

export const getAllTopics = id => {
	return async dispatch => {
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

export const getTopicById = id => {
	return async dispatch => {
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

export const SupervisorUpdateTopicDeials = data => {
	return async dispatch => {
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

export const coSupervisorUpdateTopicDeials = data => {
	return async dispatch => {
		// dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
		const res = await axios.patch("/coSueprvisor/topic/update", data);

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

export const SupervisorUpdateTopicTick = data => {
	return async dispatch => {
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

export const coSupervisorUpdateTopicTick = data => {
	return async dispatch => {
		// dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
		const res = await axios.patch("/coSueprvisor/topic/updateTopicTick", data);
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

export const SupervisorUserStudentUpdate = (id, data) => {
	return async dispatch => {
		// dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
		const res = await axios.patch("/supervisor/studentUser/update/" + id, data);

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

export const coSupervisorUserStudentUpdate = (id, data) => {
	return async dispatch => {
		// dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
		const res = await axios.patch(
			"/coSupervisor/studentUser/update/" + id,
			data,
		);

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

//Student get Topic Details by userId
export const getTopicByUserId = data => {
	console.log("Hello", data);
	return async dispatch => {
		dispatch({ type: topicConstants.GET_TOPIC_BY_USERID_REQUEST });
		console.log("HEllo 2");
		const res = await axios.get("/student/getTopic/" + data);
		console.log("RES", res.data);
		if (res.status === 201) {
			dispatch({
				type: topicConstants.GET_TOPIC_BY_USERID_SUCCESS,
				payload: { topic: res.data.topic },
			});
		} else {
			dispatch({
				type: topicConstants.GET_TOPIC_BY_USERID_FAILURE,
				payload: { error: res.data.error },
			});
		}
	};
};

//Student delete Topic by Topic Id
export const deletTopicDetailsById = data => {
	return async dispatch => {
		// dispatch({ type: topicConstants.GET_TOPIC_BY_USERID_REQUEST });
		console.log("HEllo 2");
		const res = await axios.delete("/student/deleteTopic/" + data);
		if (res.status === 201) {
			// dispatch({
			//   type: topicConstants.GET_TOPIC_BY_USERID_SUCCESS,
			//   payload: { topic: res.data.topic },
			// });
		} else {
			// dispatch({
			//   type: topicConstants.GET_TOPIC_BY_USERID_FAILURE,
			//   payload: { error: res.data.error },
			// });
		}
	};
};
