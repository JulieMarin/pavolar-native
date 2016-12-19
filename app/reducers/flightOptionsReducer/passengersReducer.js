import {
  UPDATE_PASSENGER_FIELD,
} from '../../actions/types';

const INITIAL_STATE = {
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PASSENGER_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    default:
      return state;
  }
};
