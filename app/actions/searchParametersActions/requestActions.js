import { Actions } from 'react-native-router-flux';
import { requestPackager, recommendationsPackager } from '../../services';
import { PavolarAPI } from '../../services/modules';
import {
  TOGGLE_SEARCH_MODAL,
  TOGGLE_FLIGHTS_SEARCH_LOADING,
  PUSH_ALL_RESULTS,
  REFORMAT_RESULTS,
  ROUND_TRIP_ACTIVE
} from '../types';

export const packageParams = (flights) => {
  const {
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation
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
    maxRecommendations: 200,
    segments: destinationMode == 'OneWay' ? 1 : 2,
    departCode1: airportDepartCode,
    departDate1: departDate.toLocaleDateString(),
    destinationCode1: airportReturnCode,
    departCode2: airportReturnCode,
    departDate2: returnDate.toLocaleDateString(),
    destinationCode2: airportDepartCode,
    nonStopFlight: 0
  }

  return (dispatch) => {
    dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING })
    dispatch({ type: TOGGLE_SEARCH_MODAL })
    PavolarAPI.getSearchResults(requestPackager(params))
      .then((response) => {
        if (response.data.success) {
          dispatch({
            type: ROUND_TRIP_ACTIVE,
            payload: {
              depart: airportDepartLocation,
              destination: airportReturnLocation
            }
          });
          dispatch({
            type: PUSH_ALL_RESULTS,
            payload: response.data.response.results
          });
          Actions.bookingSearchResults();
          dispatch({ type: TOGGLE_SEARCH_MODAL });
          dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING });
        } else {
          dispatch({ type: REFORMAT_RESULTS })
          dispatch({ type: TOGGLE_FLIGHTS_SEARCH_LOADING });
        }
      })
  }
}
