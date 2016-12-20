import {
  SWAP_DATES,
  TOGGLE_DEPART_DATE_MODAL,
  TOGGLE_RETURN_DATE_MODAL,
  UPDATE_DATE_FIELD
} from '../../actions/types';

const INITIAL_STATE = {
  departDateModalOpen: false,
  returnDateModalOpen: false,
  departDate: '',
  returnDate: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWAP_DATES:
      return {
        ...state,
        departDate: state.returnDate,
        returnDate: state.departDate
      }
    case TOGGLE_DEPART_DATE_MODAL:
      return {
        ...state,
        departDateModalOpen: !state.departDateModalOpen
      }
    case TOGGLE_RETURN_DATE_MODAL:
      return {
        ...state,
        returnDateModalOpen: !state.returnDateModalOpen
      }
    case UPDATE_DATE_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    default:
      return state;
  }
};
