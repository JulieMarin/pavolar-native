import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import searchParametersReducer from './searchParametersReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
  auth: AuthReducer,
  searchParameters: searchParametersReducer,
  booking: bookingReducer,
});
