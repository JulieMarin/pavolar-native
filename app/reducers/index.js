import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MainPageReducer from './MainPageReducer';
import MainPageStyleReducer from './MainPageStyleReducer';

export default combineReducers({
  auth: AuthReducer,
  main: MainPageReducer,
  mainStyle: MainPageStyleReducer
});
