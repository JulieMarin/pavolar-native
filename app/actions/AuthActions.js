import {
  LOGIN_USER_ACTIVITY,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';
import { authenticateUser } from '../services';

export const authUser = (params) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_ACTIVITY })
    authenticateUser(params)
      .then(response => {
        if (response.data.success) {
          dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.session.id})
        } else {
          dispatch({ type: LOGIN_USER_FAIL })
        }
      })
  }
}
