// FILTER BY NUMBER OF STOPS

export const filterFlightsByStops = (recommendations, stopCount) => {
  let stops = stopCount + 1
  return recommendations.filter((recommendation) => {
    let outgoingFlights = recommendation.availableFlights.outgoingFlights;
    let returningFlights = recommendation.availableFlights.returningFlights;
    let outgoingStops = checkNumberOfStops(outgoingFlights, stops);
    let returningStops = checkNumberOfStops(returningFlights, stops);
    let allStops = outgoingStops.concat(returningStops);
    return allStops.includes(false) == false;
  });
};

const checkNumberOfStops = (flights, stops) => {
  return flights.map((flight) => {
    return flight.length <= stops;
  });
};

// FILTER BY AIRLINE
