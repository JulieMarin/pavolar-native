import {
  TOGGLE_FILTER_MODAL
} from '../../../actions/types';

const INITIAL_STATE = {
  depart1: null,
  destination1: null,
  depart2: null,
  destination2: null,
  filterModalOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_MODAL:
      return {
        ...state,
        filterModalOpen: action.payload
      }
    default:
      return state;
  }
};
