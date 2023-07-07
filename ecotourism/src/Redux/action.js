import axios from "axios";
import {
  GET_PACKAGES_FAILURE,
  GET_PACKAGES_REQUEST,
  GET_PACKAGES_SUCCESS,
} from "./actionTypes";

export const getPackages = () => {
  return (dispatch) => {
    dispatch({ type: GET_PACKAGES_REQUEST });

    axios
      .get("https://sumanthrr26.github.io/Packges-data/packages.json")
      .then((response) => {
        dispatch({
          type: GET_PACKAGES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PACKAGES_FAILURE,
          payload: error.message,
        });
      });
  };
};
