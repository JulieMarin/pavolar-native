import {
  TOGGLE_SEARCH_LOADING,
  POPULATE_AUTOCOMPLETE
} from '../types';
import { PavolarAPI } from '../../services/modules';

export const toggleSearchLoading = () => {
  return { type: TOGGLE_SEARCH_LOADING }
};

export const populateAutocomplete = ({prop, value}) => {
  return {
    type: POPULATE_AUTOCOMPLETE,
    payload: {
      prop, value
    }
  }
};

export const cullAirlineSearchResults = (keyRef, query) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_SEARCH_LOADING });
    getAirlines(query)
      .then((response) => {
          dispatch({
            type: POPULATE_AUTOCOMPLETE,
            payload: {
              prop: keyRef,
              value: response.data.response.slice(0, 6)
            }
          });
          dispatch({ type: TOGGLE_SEARCH_LOADING });
      })
  }
}

const getAirlines = (query) => {
  return PavolarAPI.searchAirports(query);
}
