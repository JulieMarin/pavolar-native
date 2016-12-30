import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import flightOptionsReducer from './flightOptionsReducer';
import searchResultsReducer from './searchResultsReducer';

export default combineReducers({
  auth: AuthReducer,
  flightOptions: flightOptionsReducer,
  searchResults: searchResultsReducer
});
