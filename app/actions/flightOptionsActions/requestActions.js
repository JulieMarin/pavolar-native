import { requestPackager } from '../../services';
import {
  ONE_WAY_ACTIVE,
} from '../types';

export const packageParams = (flightOptions) => {
   const {
     airportDepartCode,
     airportReturnCode,
   } = flightOptions.locationPreferences;

   const {
     departDate,
     returnDate,
   } = flightOptions.datePreferences;

   const {
     adultCount,
     childCount,
     infantCount,
   } = flightOptions.passengers;

   const {
     destinationMode,
     searchByAirline,
     searchDirectFlightsOnly
   } = flightOptions.travelPreferences

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

  console.log(requestPackager(params));

   return {
     type: ONE_WAY_ACTIVE
   }
}
