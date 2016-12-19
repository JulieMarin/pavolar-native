import {
  SWAP_LOCATIONS,
  UPDATE_LOCATION_FIELD
} from '../types';

export const swapLocations = () => {
  return { type: SWAP_LOCATIONS }
};

export const updateLocField = ({prop, value}) => {
  return {
    type: UPDATE_LOCATION_FIELD,
    payload: {
      prop, value
    }
  }
};
