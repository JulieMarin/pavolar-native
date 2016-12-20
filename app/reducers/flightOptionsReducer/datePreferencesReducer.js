import {
  SWAP_DATES,
  TOGGLE_DEPART_DATE_MODAL,
  TOGGLE_RETURN_DATE_MODAL,
  UPDATE_DATE_FIELD
} from '../../actions/types';

const maxDate = () => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 11);
  currentDate.setDate(currentDate.getDate() + 26);
  return currentDate;
};

const INITIAL_STATE = {
  departDateModalOpen: false,
  returnDateModalOpen: false,
  maxDate: maxDate(),
  currentDate: new Date(),
  departDate: new Date(),
  returnDate: new Date(),
  departDateSelected: false,
  returnDateSelected: false
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
        departDateModalOpen: action.payload
      }
    case TOGGLE_RETURN_DATE_MODAL:
      return {
        ...state,
        returnDateModalOpen: action.payload
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
