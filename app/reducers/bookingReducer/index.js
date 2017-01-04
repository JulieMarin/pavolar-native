import { combineReducers } from 'redux';
import flightsReducer from './flightsReducer';
import travellersReducer from './travellersReducer';
import paymentsReducer from './paymentsReducer';

export default combineReducers({
  bFlights: flightsReducer,
  travellers: travellersReducer,
  PaymentInfo: paymentsReducer,
});
