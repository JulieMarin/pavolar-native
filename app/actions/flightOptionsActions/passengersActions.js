import {
  UPDATE_PASSENGER_FIELD
} from '../types';

export const updatePassengerField = ({prop, value}) => {
  return {
    type: UPDATE_PASSENGER_FIELD,
    payload: {
      prop, value
    }
  }
};
