import {
  PUSH_ALL_RESULTS
} from '../../../actions/types';

const INITIAL_STATE = {
  allResults: {},
  filteredByOneStop: {},
  filteredByTwoStops: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_ALL_RESULTS:
      return {
        ...state,
        allResults: action.payload
      }
    default:
      return state;
  }
};
