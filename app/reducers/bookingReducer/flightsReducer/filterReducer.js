import {
  TOGGLE_FILTER_MODAL,
  CHECK_FILTER_OPTION
} from '../../../actions/types';

const INITIAL_STATE = {
  noPreference: true,
  directOnly: false,
  filterByOneStop: false,
  filterByTwoStops: false,
  filterModalOpen: false,
  selectedOption: 'noPreference'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_MODAL:
      return {
        ...state,
        filterModalOpen: action.payload
      }
    case CHECK_FILTER_OPTION:
      return {
        noPreference: false,
        directOnly: false,
        filterByOneStop: false,
        filterByTwoStops: false,
        [action.payload]: true,
        selectedOption: action.payload
      }
    default:
      return state;
  }
};
