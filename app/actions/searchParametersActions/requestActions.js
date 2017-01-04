import { Actions } from 'react-native-router-flux';
import { requestPackager } from '../../services';
import { PavolarAPI } from '../../services/modules';
import {
  TOGGLE_SEARCH_MODAL,
  TOGGLE_FLIGHTS_SEARCH_LOADING,
  PUSH_ALL_RESULTS,
} from '../types';

export const packageParams = (flights) => {
  const {
    airportDepartCode,
    airportReturnCode,
  } = flights.locationPreferences;

  const {
    departDate,
    returnDate,
  } = flights.datePreferences;

  const {
    adultCount,
    childCount,
    infantCount,
  } = flights.passengers;

  const {
    destinationMode,
    searchByAirline,
    searchDirectFlightsOnly
  } = flights.travelPreferences

  const params = {
    adults: adultCount,
    children: childCount,
    infantCount: infantCount,
    maxRecommendations: 100,
    segments: destinationMode == 'OneWay' ? 1 : 2,
    departCode1: airportDepartCode,
    departDate1: departDate.toLocaleDateString(),
    destinationCode1: airportReturnCode,
    departCode2: airportReturnCode,
    departDate2: returnDate.toLocaleDateString(),
    destinationCode2: airportDepartCode,
    nonStopFlight: searchDirectFlightsOnly
  }

  return (dispatch) => {
    dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING })
    dispatch({ type: TOGGLE_SEARCH_MODAL })
    PavolarAPI.getSearchResults(requestPackager(params))
      .then((response) => {
        if (response.data.success) {
          Actions.bookingSearchResults();
          dispatch({
            type: PUSH_ALL_RESULTS,
            payload: response.data.response
          })
          dispatch({ type: TOGGLE_SEARCH_MODAL });
          dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING });
        } else {
          dispatch({
            type: PUSH_ALL_RESULTS,
            payload: {
              error: 'Something went wrong.'
            }
          })
          dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING });
        }
        console.log(response);
      })
  }
}
