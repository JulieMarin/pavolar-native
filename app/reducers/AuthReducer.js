import {
  LOGIN_USER_ACTIVITY,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  sessionID: '',
  statusMessage: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_ACTIVITY:
      return { ...state, loading: true, statusMessage: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, sessionID: action.payload, loading: false, statusMessage: 'Login Successful' }
    case LOGIN_USER_FAIL:
      return { ...state, email: action.payload, loading: false, statusMessage: 'Incorrect password or username.' }
    default:
      return state;
  }
};
