import {
  TOGGLE_SEARCH_LOADING,
  POPULATE_AUTOCOMPLETE
} from '../../../actions/types';

const INITIAL_STATE = {
  searchLoading: false,
  departData: [],
  returnData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_LOADING:
      return {
        ...state,
        searchLoading: !state.searchLoading
      }
    case POPULATE_AUTOCOMPLETE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    default:
      return state;
  }
};
