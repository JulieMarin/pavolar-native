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

export const filterByAirline = (recommendations, airline) => {
  return recommendations.filter((recommendation) => {
    let outgoingFlights = recommendation.availableFlights.outgoingFlights;
    let returningFlights = recommendation.availableFlights.returningFlights;
    let outgoingAirlines = [].concat.apply([], checkAirlines(outgoingFlights, airline));
    let returningAirlines = [].concat.apply([], checkAirlines(returningFlights, airline));
    let allAirlines = outgoingAirlines.concat(returningAirlines);
    return allAirlines.includes(true) == false;
  });
};

const checkAirlines = (flights, airline) => {
  return flights.map((flight) => {
    return checkSegmentCarriers(flight, airline);
  });
};

const checkSegmentCarriers = (flight, airline) => {
  return flight.some((segment) => {
    return segment.carrier.marketingCarrier !== airline;
  });
};
