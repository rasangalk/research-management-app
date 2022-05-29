import { topicConstants } from "../actions/constants";

const initState = {
  topics: [],
  topic: {},
  pageRequest: false,
  error: null,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case topicConstants.GET_TOPICS_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case topicConstants.GET_TOPICS_SUCCESS:
      state = {
        ...state,
        topics: action.payload.topics,
        pageRequest: false,
      };
      break;
    case topicConstants.GET_TOPICS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;

    case topicConstants.GET_TOPIC_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case topicConstants.GET_TOPIC_SUCCESS:
      state = {
        ...state,
        topic: action.payload.topic,
        pageRequest: false,
      };
      break;
    case topicConstants.GET_TOPIC_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        pageRequest: false,
      };
      break;
  }
  return state;
};
