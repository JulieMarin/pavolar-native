import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import flightOptionsReducer from './flightOptionsReducer';
import searchResultsReducer from './searchResultsReducer';
import bookingFlightsReducer from './bookingFlightsReducer';

export default combineReducers({
  auth: AuthReducer,
  flightOptions: flightOptionsReducer,
  searchResults: searchResultsReducer,
  bookingFlights: bookingFlightsReducer
});
