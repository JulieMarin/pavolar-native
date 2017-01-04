import {

} from '../../actions/types';

const INITIAL_STATE = {
  adults: [
    {
      id: null,
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      phone: {
        extension: null,
        number: null,
      }
    }
  ],
  children: [],
  infant: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
