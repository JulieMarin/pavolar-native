import {
  LOGIN_USER_ACTIVITY,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  sessionID: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_ACTIVITY:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      return { ...state, sessionID: action.payload, loading: false}
    case LOGIN_USER_FAIL:
      return { ...state, email: action.payload, loading: false }
    default:
      return state;
  }
};
