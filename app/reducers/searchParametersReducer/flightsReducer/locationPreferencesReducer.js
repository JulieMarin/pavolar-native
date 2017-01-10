import {
  SWAP_LOCATIONS,
  UPDATE_LOCATION_FIELD,
} from '../../../actions/types';

const INITIAL_STATE = {
  airportDepartCode: 'JFK',
  airportReturnCode: 'SAL',
  airportDepartLocation: 'New York',
  airportReturnLocation: 'San Salvador',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LOCATION_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case SWAP_LOCATIONS:
      return {
        ...state,
        airportDepartCode: state.airportReturnCode,
        airportReturnCode: state.airportDepartCode,
        airportDepartLocation: state.airportReturnLocation,
        airportReturnLocation: state.airportDepartLocation
      }
    default:
      return state;
  }
};
