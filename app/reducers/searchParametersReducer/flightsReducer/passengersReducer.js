import {
  UPDATE_PASSENGER_FIELD,
  INCREMENT_ADULT_COUNT,
  DECREMENT_ADULT_COUNT,
  INCREMENT_CHILD_COUNT,
  DECREMENT_CHILD_COUNT,
  INCREMENT_INFANT_COUNT,
  DECREMENT_INFANT_COUNT,
  RESET_PASSENGER_WARNING
} from '../../../actions/types';

const INITIAL_STATE = {
  adultCount: 0,
  childCount: 0,
  infantCount: 0,
  combinationError: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PASSENGER_FIELD:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case INCREMENT_ADULT_COUNT:
      if (state.adultCount < 7) {
        return {
          ...state,
          adultCount: state.adultCount + 1
        }
      }
      return state;
    case DECREMENT_ADULT_COUNT:
      return adultCountConditionals(state);
    case INCREMENT_CHILD_COUNT:
      return childCountConditionals(state);
    case DECREMENT_CHILD_COUNT:
      if (state.childCount > 0) {
        return {
          ...state,
          childCount: state.childCount - 1
        }
      } else {
        return state;
      }
    case INCREMENT_INFANT_COUNT:
      return infantCountConditionals(state);
    case DECREMENT_INFANT_COUNT:
      if (state.infantCount > 0) {
        return {
          ...state,
          infantCount: state.infantCount - 1
        }
      } else {
        return state;
      }
    case RESET_PASSENGER_WARNING:
      return { ...state, combinationError: ''}
    default:
      return state;
  }
};

const adultCountConditionals = (state) => {
  if (state.adultCount == 1 && state.childCount > 0 || state.adultCount == 1 && state.infantCount > 0) {
      return {
        ...state,
        combinationError: 'PASSENGERS UNDER THE AGE OF 11 MUST BE ACCOMPANIED BY AT LEAST ONE ADULT'
      };
    }
  else if (state.adultCount > 0) {
      return {
        ...state,
        adultCount: state.adultCount - 1
      }
  }
  return state;
};

const childCountConditionals = (state) => {
  if (state.childCount < 6 && state.adultCount >= 1) {
    return {
      ...state,
      childCount: state.childCount + 1
    }
  } else if (state.childCount == 6) {
      return state;
  } else {
      return {
        ...state,
        combinationError: 'PASSENGERS UNDER THE AGE OF 11 MUST BE ACCOMPANIED BY AT LEAST ONE ADULT'
      };
  }
}

const infantCountConditionals = (state) => {
  if (state.infantCount < 6 && state.adultCount >= 1) {
    return {
      ...state,
      infantCount: state.infantCount + 1
    }
  } else if (state.infantCount == 6) {
    return state;
  } else {
    return {
      ...state,
      combinationError: 'PASSENGERS UNDER THE AGE OF 11 MUST BE ACCOMPANIED BY AT LEAST ONE ADULT'
    };
  }
}
