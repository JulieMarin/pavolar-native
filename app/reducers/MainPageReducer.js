import {
  TOGGLE_ONE_WAY,
  TOGGLE_ROUND_TRIP,

  SWAP_LOCATIONS,

  UPDATE_FORM_OPTION,

  SET_AIRPORT_DEPART_CODE,
  SET_AIRPORT_RETURN_CODE,

  OPEN_DRAWER_MENU,
  CLOSE_DRAWER_MENU,

  OPEN_DEPART_DATE_MODAL,
  CLOSE_DEPART_DATE_MODAL,

  SET_DEPART_DATE,
  SET_RETURN_DATE,

  OPEN_RETURN_DATE_MODAL,
  CLOSE_RETURN_DATE_MODAL,

  INCREMENT_ADULT_COUNT,
  DECREMENT_ADULT_COUNT,

  INCREMENT_CHILD_COUNT,
  DECREMENT_CHILD_COUNT,

  INCREMENT_INFANT_COUNT,
  DECREMENT_INFANT_COUNT,

  TOGGLE_SERACH_BY_AIRLINE,
  TOGGLE_SET_DIRECT_FLIGHTS_ONLY,

  RESET_FIELDS,

  CULL_AIRLINE_SEARCH_RESULTS,
  SEARCH_LOADING

} from '../actions/types';

const INITIAL_STATE = {
  destinationMode: 'RoundTrip',
  airportDepartCode: '',
  airportReturnCode: '',
  airportDepartLocation: '',
  airportReturnLocation: '',
  drawerOpen: false,
  departDateModalOpen: false,
  returnDateModalOpen: false,
  departDate: 'test',
  returnDate: 'test2',
  passengers: {
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
  },
  flightPreferences: {
    searchByAirline: false,
    searchDirectFlightsOnly: false,
  },
  departData: [],
  returnData: [],
  searchLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ONE_WAY:
      return { ...state, destinationMode: 'OneWay' };
    case TOGGLE_ROUND_TRIP:
      return { ...state, destinationMode: 'RoundTrip' };
    case SWAP_LOCATIONS:
      return {
         ...state,
         airportDepartCode: state.airportReturnCode,
         airportReturnCode: state.airportDepartCode,
         airportDepartLocation: state.airportReturnLocation,
         airportReturnLocation: state.airportDepartLocation
       };
    case SEARCH_LOADING:
      return { ...state, searchLoading: action.payload }
    case CULL_AIRLINE_SEARCH_RESULTS:
      return { ...state, [action.payload.prop]: action.payload.value }
    case UPDATE_FORM_OPTION:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};
