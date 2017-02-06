import base64 from 'base-64';
import { formatAndGetTime } from '../../services';

export const extractAvailableFlights = (recommendations) => {
  let repackaged = recommendations.map((recommendation) => {
    return {
      pricing: recommendation.pricing,
      itemNumber: recommendation.itemNumber,
      availableFlights: mergeDuplicateCombinations(recommendation.combinations)
    }
  });
  return repackaged;
};

const mergeDuplicateCombinations = (combinations) => {
  return {
    baggageID: combinations[0].baggageID,
    outgoingFlights: extractUniqueFlights(combinations, 1),
    returningFlights: extractUniqueFlights(combinations, 2)
  }
};

const extractUniqueFlights = (combinations, segmentNumber) => {
  let flights = [];
  let uniqueHashes = [];
  combinations.forEach((combo) => {
    combo.flightChoices.forEach((flightChoice) => {
      let hashedFlightDetails = generateHashfromObj(flightChoice.flightDetails);
      if (
        flightChoice.segment == segmentNumber &&
        uniqueHashes.includes(hashedFlightDetails) == false
      ) {
        uniqueHashes.push(hashedFlightDetails);
        flights.push(flightChoice.flightDetails);
      }
    });
  });
  return sortByFlghtTime(flights);
};

const sortByFlghtTime = (flights) => {
  return flights.sort((time1, time2) => {
    let time1DateTime = formatAndGetTime(time1[0].dateTime.departureTime);
    let time1DateTimeAlt = formatAndGetTime(time1.slice(-1)[0].dateTime.arrivalTime);
    let time2DateTime = formatAndGetTime(time2[0].dateTime.departureTime);
    let time2DateTimeAlt = formatAndGetTime(time2.slice(-1)[0].dateTime.arrivalTime);
    if (time1DateTime == time2DateTime) {
      return time1DateTimeAlt - time2DateTimeAlt;
    } else {
      return time1DateTime - time2DateTime;
    }
    // return formatAndGetTime(time1[0].dateTime.departureTime) - formatAndGetTime(time2[0].dateTime.departureTime)
  })
};

const generateHashfromObj = (obj) => {
  let stringified = JSON.stringify(obj).toString();
  return base64.encode(stringified);
};
