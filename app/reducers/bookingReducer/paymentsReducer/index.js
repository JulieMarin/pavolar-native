import { combineReducers } from 'redux';
import cardInfoReducer from './cardInfoReducer';

export default combineReducers({
  cardInfo: cardInfoReducer,
});
