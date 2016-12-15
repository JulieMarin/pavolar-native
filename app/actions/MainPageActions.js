import {
  TOGGLE_ONE_WAY,
  TOGGLE_ROUND_TRIP,
  SWAP_LOCATIONS,
  UPDATE_FORM_OPTION,
} from './types';
import { PavolarAPI } from '../services/modules';

export const toggleDestinationMode = (stringRef) => {
  switch (stringRef) {
    case 'OneWay':
      return { type: TOGGLE_ONE_WAY };
    case 'RoundTrip':
      return { type: TOGGLE_ROUND_TRIP };
    default:
      return null;
    }
};

export const swapLocations = () => {
  return { type: SWAP_LOCATIONS }
};

export const updateFormOption = ({ prop, value }) => {
  return {
    type: UPDATE_FORM_OPTION,
    payload: { prop, value }
  }
}

export const cullAirlineSearchResults = (stringRef, query) => {
  return (dispatch) => {
    getAirlines(query)
      .then((response) => {
          dispatch({
            type: UPDATE_FORM_OPTION,
            payload: {
              prop: stringRef,
              value: response.data.response.slice(0, 8)
            }
          });
      })
  }
}

const getAirlines = (query) => {
  return PavolarAPI.searchAirports(query);
}
