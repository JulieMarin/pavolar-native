import {
  BEGIN_FLIGHT_SEARCH
} from '../actions/types';

const INITIAL_STATE = {
  allResults: {},
  filteredResults: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEGIN_FLIGHT_SEARCH:
      return { ...state, destinationMode: 'OneWay' };
    default:
      return state;
  }
};
