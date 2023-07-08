import {
  GET_PACKAGES_FAILURE,
  GET_PACKAGES_REQUEST,
  GET_PACKAGES_SUCCESS,
  ADD_USER_LOGIN,
} from "./actionTypes";

const initialState = {
  packages: [],
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PACKAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_PACKAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_USER_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
