import {
  TOGGLE_FILTER_MODAL
} from '../types';

export const toggleFilterModal = (boolean) => {
  return {
    type: TOGGLE_FILTER_MODAL,
    payload: boolean
  }
};
