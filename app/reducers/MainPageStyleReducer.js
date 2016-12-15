import { suggestionListClosed, suggestionListOpen } from '../styles';
import {
  DEPART_SUGGESTION_LIST_OPEN,
  SUGGESTION_LIST_CLOSED
} from '../actions/types';

const INITIAL_STATE = {
  autocomplete: suggestionListClosed
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPART_SUGGESTION_LIST_OPEN:
      return { ...state, autocomplete: suggestionListOpen };
    case SUGGESTION_LIST_CLOSED:
      return { ...state, autocomplete: suggestionListClosed };
    default:
      return state;
  }
};
