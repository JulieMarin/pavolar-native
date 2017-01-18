import {
  PUSH_ALL_RESULTS,
  SET_ACTIVE_FILTERED_RESULTS
} from '../../../actions/types';

import { dummyData } from '../../../../test';

const INITIAL_STATE = {
  allResults: dummyData,
  activeFilteredResults: dummyData
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILTERED_RESULTS:
      return {
        ...state,
        activeFilteredResults: action.payload
      }
    case PUSH_ALL_RESULTS:
      return {
        ...state,
        allResults: action.payload,
        activeFilteredResults: action.payload
      }
    default:
      return state;
  }
};
