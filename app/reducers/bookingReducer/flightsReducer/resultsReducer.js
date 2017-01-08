import {
  PUSH_ALL_RESULTS,
  REFORMAT_RESULTS
} from '../../../actions/types';

import { dummyData } from '../../../../test';

const INITIAL_STATE = {
  allResults: dummyData,
  recommendations: [],
  filteredByOneStop: {},
  filteredByTwoStops: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFORMAT_RESULTS:
      return state
    case PUSH_ALL_RESULTS:
      return {
        ...state,
        allResults: action.payload
      }
    default:
      return state;
  }
};
