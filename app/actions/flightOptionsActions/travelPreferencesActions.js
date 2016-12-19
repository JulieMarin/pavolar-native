import {
  TOGGLE_TRAVEL_MODE,
  SEARCH_BY_AIRLINE,
  SEARCH_DIRECT_FLIGHTS
} from '../types';

export const toggleTravelMode = (mode) => {
  return {
    type: TOGGLE_TRAVEL_MODE,
    payload: mode
  }
};

export const toggleSearchByAirline = () => {
  return { type: SEARCH_BY_AIRLINE }
};

export const toggleSearchDirectFlights = () => {
  return { type: SEARCH_DIRECT_FLIGHTS }
};
