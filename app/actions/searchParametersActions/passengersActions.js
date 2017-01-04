import {
  UPDATE_PASSENGER_FIELD,
  INCREMENT_ADULT_COUNT,
  DECREMENT_ADULT_COUNT,
  INCREMENT_CHILD_COUNT,
  DECREMENT_CHILD_COUNT,
  INCREMENT_INFANT_COUNT,
  DECREMENT_INFANT_COUNT,
  RESET_PASSENGER_WARNING,

} from '../types';

export const updatePassengerField = ({prop, value}) => {
  return {
    type: UPDATE_PASSENGER_FIELD,
    payload: {
      prop, value
    }
  }
};

export const incrementAdultCount = () => {
  return { type: INCREMENT_ADULT_COUNT }
};

export const decrementAdultCount = () => {
  return { type: DECREMENT_ADULT_COUNT }
};

export const incrementChildCount = () => {
  return { type: INCREMENT_CHILD_COUNT }
};

export const decrementChildCount = () => {
  return { type: DECREMENT_CHILD_COUNT }
};

export const incrementInfantCount = () => {
  return { type: INCREMENT_INFANT_COUNT }
};

export const decrementInfantCount = () => {
  return { type: DECREMENT_INFANT_COUNT }
};

export const resetPassengerWarning = () => {
  return { type: RESET_PASSENGER_WARNING }
};
