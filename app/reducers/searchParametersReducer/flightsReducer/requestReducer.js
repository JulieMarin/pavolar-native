import {
  ONE_WAY_ACTIVE,
  ROUND_TRIP_ACTIVE
} from '../../../actions/types';

const INITIAL_STATE = {
  params: {
    depart: 'New York',
    destination: 'San Salvador'
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONE_WAY_ACTIVE:
      return {
        ...state,
        params: action.payload
      }
    case ROUND_TRIP_ACTIVE:
      return {
        ...state,
        params: action.payload
      }
    default:
      return state;
  }
};
