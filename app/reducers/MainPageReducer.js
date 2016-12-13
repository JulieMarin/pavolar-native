import {
  TOGGLE_DESTINATION_MODE,

  SWAP_LOCATIONS,

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

  RESET_FIELDS

} from '../actions/types';

const INITIAL_STATE = {
  destinationMode: 'default',
  swapLocations: 'false',
  airportDepartCode: '',
  airportReturnCode: '',
  drawerOpen: false,
  departDateModalOpen: false,
  returnDateModalOpen: false,
  departDate: '',
  returnDate: '',
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
  searchByAirline: false,
  searchDirectFlightsOnly: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DESTINATION_MODE:
      return { ...state, destinationMode: true };
    case SWAP_LOCATIONS:
      return { ...state, swapLocations: true };
    default:
      return state;
  }
};
