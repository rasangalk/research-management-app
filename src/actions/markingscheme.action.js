import axios from "../helpers/axios";
import { markingSchemaConstants } from "./constants";

export const CreateMarkingSchemes = (schema) => {
  return async (dispatch) => {
    dispatch({ type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_REQUEST });
    const res = await axios.post("/admin/markingSchema/add", schema);

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      dispatch({
        type: markingSchemaConstants.ADD_NEW_MARKING_SCHEME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getMarkingSchemas = () => {
  return async (dispatch) => {
    dispatch({
      type: markingSchemaConstants.GET_ALL_MARKING_SCHEME_REQUEST,
    });
    const res = await axios.get("/admin/markingSchemas");

    if (res.status === 200) {
      console.log("Action", res.data);
      dispatch({
        type: markingSchemaConstants.GET_ALL_MARKING_SCHEME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: markingSchemaConstants.GET_ALL_MARKING_SCHEME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getMarkingSchemaByID = (schemaID) => {
  return async (dispatch) => {
    dispatch({
      type: markingSchemaConstants.GET_MARKING_SCHEME_REQUEST,
    });
    const res = await axios.get("/admin/markingSchemas/" + schemaID);

    if (res.status === 201) {
      dispatch({
        type: markingSchemaConstants.GET_MARKING_SCHEME_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: markingSchemaConstants.GET_MARKING_SCHEME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const DeleteMarkingSchema = (schemaId) => {
  console.log(schemaId);

  return async (dispatch) => {
    dispatch({ type: markingSchemaConstants.DELETE_MARKING_SCHEME_REQUEST });
    const res = await axios.delete("/admin/markingSchemas/delete/" + schemaId);

    if (res.status === 200) {
      dispatch({
        type: markingSchemaConstants.DELETE_MARKING_SCHEME_SUCCESS,
        payload: {
          schemaId,
        },
      });
    } else {
      dispatch({
        type: markingSchemaConstants.DELETE_MARKING_SCHEME_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
