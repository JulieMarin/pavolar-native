import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import selectionReducer from './selectionReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  results: resultsReducer,
  selection: selectionReducer,
  filter: filterReducer
});
