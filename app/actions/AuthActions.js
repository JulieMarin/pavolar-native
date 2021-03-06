import {
  LOGIN_USER_ACTIVITY,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  TOGGLE_SIGN_IN_MENU,
} from './types';
import Keychain from 'react-native-keychain';
import { authenticateUser } from '../services';

export const toggleSignInMenu = () => {
  return { type: TOGGLE_SIGN_IN_MENU }
};

export const authUser = (params) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_ACTIVITY })
    authenticateUser(params)
      .then(response => {
        if (response.data.success) {
          _resetCredentials();
          _persistCredentials(params);
          dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.session.id})
        } else {
          dispatch({ type: LOGIN_USER_FAIL })
        }
      })
  }
}

function _persistCredentials({ emailAddress, password}) {
  Keychain
    .setGenericPassword(emailAddress, password);
}

function _resetCredentials() {
  Keychain
    .resetGenericPassword();
}

function _getCredentials() {
  Keychain
  .getGenericPassword();
}
