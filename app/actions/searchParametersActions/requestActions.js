import { requestPackager } from '../../services';
import {
  SEARCH_FLIGHTS
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
     maxRecommendations: 10,
     segments: destinationMode == 'OneWay' ? 1 : 2,
     departCode1: airportDepartCode,
     departDate1: departDate.toLocaleDateString(),
     destinationCode1: airportReturnCode,
     departCode2: airportReturnCode,
     departDate2: returnDate.toLocaleDateString(),
     destinationCode2: airportDepartCode,
     nonStopFlight: searchDirectFlightsOnly
   }

   return {
     type: SEARCH_FLIGHTS,
     payload: requestPackager(params)
   }
}
