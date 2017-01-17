import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlightInfo from '../../components/FlightInfo';
import SearchResults from '../../components/SearchResults';
import CustomText from '../../components/CustomText';
import { formatTime } from '../../services';

export const renderRoundTrip = (data, props) => {
  const {
    allResults,
    depart,
    destination,
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation,
    destinationMode
  } = props;

  return (
    <SearchResults
      totalPrice={data.pricing.total}
      destinationMode={destinationMode}
      departLocation={airportDepartLocation}
      departAirportCode={airportDepartCode}
      arriveLocation={airportReturnLocation}
      arriveAirportCode={airportReturnCode}
      firstDeparture={extrapolateDetails(data.availableFlights.outgoingFlights, 0)}
      secondDeparture={extrapolateDetails(data.availableFlights.outgoingFlights, 1, true)}
      firstReturn={extrapolateDetails(data.availableFlights.returningFlights, 0)}
      secondReturn={extrapolateDetails(data.availableFlights.returningFlights, 1, true)}
    />
  )
};

const extrapolateDetails = (data, segNumber, last = false) => {
  if (data.length < 2 && segNumber == 1) {
    return (
      <View style={{ alignSelf: 'center', marginBottom: 20, marginTop: 10 }}>
        <CustomText>No Other Options</CustomText>
      </View>
    )
  } else {
      let segments = (last == true) ? data.slice(-1)[0] : data[segNumber];
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
  }
};

const getAirlineImage = (code) => {
  return {
    uri: 'https://api-cdn.pavolar.com/1/images/logos/airlines.png?airline=' + code
  };
};

const checkSegmentCount = (segments) => {
  if (segments.length > 1) {
    return (segments.length - 1).toString() + ' Stop(s)'
  } else {
    return 'Direct'
  }
};
