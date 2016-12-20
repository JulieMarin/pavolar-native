import {
  SWAP_DATES,
  TOGGLE_DEPART_DATE_MODAL,
  TOGGLE_RETURN_DATE_MODAL,
  UPDATE_DATE_FIELD
} from '../types';

export const swapDates = () => {
  return { type: SWAP_DATES }
};

export const updateDateField = ({prop, value}) => {
  return {
    type: UPDATE_DATE_FIELD,
    payload: {
      prop, value
    }
  }
};

export const toggleDepartDateModal = (selection) => {
  return {
    type: TOGGLE_DEPART_DATE_MODAL,
    payload: selection
  }
}

export const toggleReturnDateModal = (selection) => {
  return {
    type: TOGGLE_RETURN_DATE_MODAL,
    payload: selection 
  }
}
