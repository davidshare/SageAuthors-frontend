import Axios from 'axios';
import { SIGNIN_START, SIGNIN_FAILURE, SIGNIN_SUCCESS } from './actionTypes';

const signinStart = () => ({
  type: SIGNIN_START,
});

const signinSuccess = (payload) => ({
  type: SIGNIN_SUCCESS,
  payload,
});

const signinFailure = (payload) => ({
  type: SIGNIN_FAILURE,
  payload,
});

const signinUser = async (dispatch, userObject) => {
  dispatch(signinStart());
  try {
    const user = await Axios.post(`${process.env.API_BASE_URL}/auth/signin`, {
      ...userObject,
    });

    if (user) {
      const { token } = user.data;
      localStorage.setItem('token', token);
      dispatch(signinSuccess(token));
      window.location.href = '/';
    }
  } catch (error) {
    dispatch(signinFailure(error));
  }
};

export default signinUser;
