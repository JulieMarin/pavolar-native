import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import flightOptionsReducer from './flightOptionsReducer'

export default combineReducers({
  auth: AuthReducer,
  flightOptions: flightOptionsReducer
});
