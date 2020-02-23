import {
  SIGNIN_START,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
} from '../actions/actionTypes';

const authReducer = (state, action) => {
  switch (action.type) {
  case SIGNIN_START:
    return { ...state, isLoading: true, isAuthenticated: false };
  case SIGNIN_SUCCESS:
    return {
      ...state,
      isLoading: false,
      response: action.payload,
      errorMsg: null,
      isAuthenticated: true,
    };
  case SIGNIN_FAILURE:
    return {
      ...state,
      isLoading: false,
      response: action.payload.response,
      errorMsg: action.payload.response
        ? action.payload.response.data.message
        : 'Sorry, there was an error, please try again',
      isAuthenticated: false,
    };
  default:
    return state;
  }
};

export default authReducer;
