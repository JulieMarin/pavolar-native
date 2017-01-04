import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  results: resultsReducer,
  selection: selectionReducer
});
