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

const INITIAL_STATE = Map({
  drawerOpen: false,
  locationPreferences: {
    airportDepartCode: '',
    airportReturnCode: '',
    airportDepartLocation: '',
    airportReturnLocation: '',
  },
  datePreferences: {
    departDateModalOpen: false,
    returnDateModalOpen: false,
    departDate: 'test',
    returnDate: 'test2',
  },
  passengers: {
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
  },
  flightPreferences: {
    destinationMode: 'Round Trip',
    searchByAirline: false,
    searchDirectFlightsOnly: false,
  },
  searchResults: {
    searchLoading: false,
    departData: [],
    returnData: [],
  },
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ONE_WAY:
      return state.setIn(["flightPreferences", "destinationMode"], 'OneWay').toJS() ;
    default:
      return state;
  }
};
