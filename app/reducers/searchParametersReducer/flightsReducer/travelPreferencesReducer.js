import {
  TOGGLE_TRAVEL_MODE,
  SEARCH_BY_AIRLINE,
  SEARCH_DIRECT_FLIGHTS
} from '../../../actions/types';

const INITIAL_STATE = {
  destinationMode: 'Round Trip',
  searchByAirline: false,
  searchDirectFlightsOnly: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TRAVEL_MODE:
      if (action.payload == 'OneWay') {
        return { ...state, destinationMode: 'OneWay'}
      } else {
        return { ...state, destinationMode: 'Round Trip'}
      }
    case SEARCH_BY_AIRLINE:
      return {
        ...state,
        searchByAirline: !state.searchByAirline
      }
    case SEARCH_DIRECT_FLIGHTS:
      return {
        ...state,
        searchDirectFlightsOnly: !state.searchDirectFlightsOnly
      }
    default:
      return state;
  }
};
