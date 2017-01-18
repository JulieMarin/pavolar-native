import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TravelDestinationBlock from './TravelDestinationBlock';
import FlightInfo from './FlightInfo';
import Separator from './Separator';
import ResultHeader from './ResultHeader';

class SearchResults extends Component {
  handleTouch() {
    Actions.BookingStepOne();
  }

  airlinePlaceholder(code) {
    if (code == '9k') {
        return { uri: 'https://api-cdn.pavolar.com/1/images/logos/airlines.png' }
    } else {
        return { uri: 'https://api-cdn.pavolar.com/1/images/logos/airlines.png?airline=' + code }
    }
  }

  render() {
    const {
      destinationMode,
      totalPrice,
      departLocation,
      arriveLocation,
      departAirportCode,
      arriveAirportCode,
      departTime1,
      departTime2,
      departTime3,
      departTime4,
      arriveTime1,
      arriveTime2,
      arriveTime3,
      arriveTime4,
      airlineCode1,
      airlineCode2,
      airlineCode3,
      airlineCode4,
      firstDeparture,
      secondDeparture,
      firstReturn,
      secondReturn,
      showAllOptions 
    } = this.props;
    return (
      <View style={styles.container}>
        <ResultHeader
          leftText={destinationMode}
          rightText={totalPrice}
        />
        <TravelDestinationBlock
          travelDirection={'DEPARTURE'}
          departureLocation={departLocation}
          departureAirport={departAirportCode}
          arrivalLocation={arriveLocation}
          arrivalAirport={arriveAirportCode}
        />
          {firstDeparture}
        <TouchableOpacity onPress={() => showAllOptions()}>
          <Separator />
        </TouchableOpacity>
          {secondDeparture}
        <TravelDestinationBlock
          travelDirection={'RETURN'}
          departureLocation={arriveLocation}
          departureAirport={arriveAirportCode}
          arrivalLocation={departLocation}
          arrivalAirport={departAirportCode}
        />
          {firstReturn}
        <TouchableOpacity onPress={() => showAllOptions()}>
          <Separator />
        </TouchableOpacity>
          {secondReturn}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f5f2f2',
    paddingBottom: 14,
    backgroundColor: '#ffffff',
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
  }
});

export default SearchResults;
