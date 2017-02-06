import {
  CHOOSE_FLIGHT,
  SET_EXPANDED_OPTIONS
} from '../../../actions/types';

const INITIAL_STATE = {
  departFlight: {},
  returnFlight: {},
  expandedOptionSelection: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHOOSE_FLIGHT:
      return {
        ...state,
        [action.prop]: action.value
      };
    case SET_EXPANDED_OPTIONS:
      return {
        ...state,
        expandedOptionSelection: action.payload
      };
    default:
      return state;
  }
};
