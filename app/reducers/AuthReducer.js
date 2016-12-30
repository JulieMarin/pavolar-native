import {
  LOGIN_USER_ACTIVITY,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  TOGGLE_SIGN_IN_MENU
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  sessionID: '',
  statusMessage: '',
  loading: false,
  signInOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_ACTIVITY:
      return {
        ...state,
        loading: true,
        statusMessage: ''
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        sessionID: action.payload,
        loading: false,
        statusMessage: 'Login Successful'
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        email: action.payload,
        loading: false,
        statusMessage: 'Incorrect password or username.'
      }
    case TOGGLE_SIGN_IN_MENU:
      return {
        ...state,
        signInOpen: !state.signInOpen
      }
    default:
      return state;
  }
};
