import {
  extractTravelInfo,
  filterFlightsByStops,
  filterByAirline
} from '../../services';
import {
  CHECK_FILTER_OPTION,
  TOGGLE_FILTER_MODAL,
  SET_ACTIVE_FILTERED_RESULTS
} from '../types';

export const checkFilterOption = (prop) => {
  return {
    type: CHECK_FILTER_OPTION,
    payload: prop
  }
};

export const toggleFilterModal = (boolean) => {
  return {
    type: TOGGLE_FILTER_MODAL,
    payload: boolean
  }
};

export const submitFilterOptions = (option, data) => {
  switch (option) {
  case 'noPreference':
    return {
      type: SET_ACTIVE_FILTERED_RESULTS,
      payload: data
    };
  case 'directOnly':
    return {
      type: SET_ACTIVE_FILTERED_RESULTS,
      payload: {
        ...data,
        recommendations: filterFlightsByStops(data.recommendations, 0)
      }
    };
  case 'filterByOneStop':
    return {
      type: SET_ACTIVE_FILTERED_RESULTS,
      payload: {
        ...data,
        recommendations: filterFlightsByStops(data.recommendations, 1)
      }
    };
  case 'filterByTwoStops':
    return {
      type: SET_ACTIVE_FILTERED_RESULTS,
      payload: {
        ...data,
        recommendations: filterFlightsByStops(data.recommendations, 2)
      }
    };
  default:
    return {
      type: SET_ACTIVE_FILTERED_RESULTS,
      payload: data
    };
  }
}
