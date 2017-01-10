export const destinationMode = () => {
  return (
    result.combinations[0].flightChoices.length == 1 ? 'One Way' : 'Round Trip'
  )
}
// console.log(result.combinations[0].flightChoices[1].flightDetails[1])
return(
  <SearchResults
    destinationMode={destinationMode()}
    totalPrice={result.pricing.total}
    airlineCode1={result.combinations[0].flightChoices[0].flightDetails[0].carrier.marketingCarrier}
    airlineCode2={result.combinations[0].flightChoices[1].flightDetails[0].carrier.marketingCarrier}
    departAirportCode={result.combinations[0].flightChoices[0].flightDetails[0].location[0].locationId}
    arriveAirportCode={result.combinations[0].flightChoices[1].flightDetails[0].location[0].locationId}
    departLocation={this.props.depart}
    arriveLocation={this.props.destination}
    departTime1={result.combinations[0].flightChoices[0].flightDetails[0].dateTime.departureTime}
    arriveTime1={result.combinations[0].flightChoices[0].flightDetails[1].dateTime.arrivalTime}
  />
);

const getDateTime = (flightChoices) => {
  if (flightChoices.flightDetails.length < 2) {
    return flightChoices[0].flightDetails[0].dateTime.arrivalTime;
  } else {
    return flightChoices[0].flightDetails[1].dateTime.arrivalTime;
  }
};
