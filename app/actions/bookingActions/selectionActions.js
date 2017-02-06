import {
  CHOOSE_FLIGHT,
  SET_EXPANDED_OPTIONS
} from '../types';

export const chooseFlightOption = (id, flight) => {
  return {
    type: CHOOSE_FLIGHT,
    payload: {
      prop: id,
      value: flight
    }
  }
}

export const expandFlightOptions = (options, flights) => {
  return {
    type: SET_EXPANDED_OPTIONS,
    payload: {
      sharedInfo: options,
      flights
    }
  }
}
