import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MainPageReducer from './MainPageReducer';

export default combineReducers({
  auth: AuthReducer,
  main: MainPageReducer
});
