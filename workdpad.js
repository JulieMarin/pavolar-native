export const renderOptions = (flights) => {
  flights.forEach((flight) => {
    debugger;
    let departDateTime = segments[0].dateTime;
    let arriveDateTime = segments.slice(-1)[0].dateTime
    return (
      <FlightInfo
        departTime={formatTime(departDateTime.departureTime)}
        arrivalTime={formatTime(arriveDateTime.arrivalTime)}
        airlineImage={getAirlineImage(segments[0].carrier.marketingCarrier)}
        flightDuration={'FIX IT, ALI'}
        flightPathType={checkSegmentCount(segments)}
      />
    )
  })
};
