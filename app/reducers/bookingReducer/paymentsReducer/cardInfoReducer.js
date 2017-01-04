import {

} from '../../../actions/types';

const INITIAL_STATE = {
  accountNumber: null,
  securityCode: null,
  expirationDate: null,
  creditType: null,
  provider: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
