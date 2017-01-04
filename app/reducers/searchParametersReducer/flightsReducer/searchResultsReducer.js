import {
  TOGGLE_FLIGHTS_SEARCH_LOADING,
  TOGGLE_SEARCH_LOADING,
  TOGGLE_SEARCH_MODAL,
  POPULATE_AUTOCOMPLETE
} from '../../../actions/types';

const INITIAL_STATE = {
  searchLoading: false,
  flightsSearchLoading: false,
  searchModalOpen: false,
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
    case TOGGLE_FLIGHTS_SEARCH_LOADING:
      return {
        ...state,
        flightsSearchLoading: !state.flightsSearchLoading
      }
    case TOGGLE_SEARCH_MODAL:
      return {
        ...state,
        searchModalOpen: !state.searchModalOpen
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
