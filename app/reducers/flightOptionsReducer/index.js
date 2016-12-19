import { combineReducers } from 'redux';
import locationPreferencesReducer from './locationPreferencesReducer';
import datePreferencesReducer from './datePreferencesReducer';
import passengersReducer from './passengersReducer';
import travelPreferencesReducer from './travelPreferencesReducer';
import searchResultsReducer from './searchResultsReducer';

export default combineReducers({
  locationPreferences: locationPreferencesReducer,
  datePreferences: datePreferencesReducer,
  passengers: passengersReducer,
  travelPreferences: travelPreferencesReducer,
  locSearchResults: searchResultsReducer
});
