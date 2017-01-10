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
      airlineCode4
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
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            airlineImage={this.airlinePlaceholder(airlineCode1)}
            departTime={departTime1}
            arrivalTime={arriveTime1}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            airlineImage={this.airlinePlaceholder(airlineCode2)}
            departTime={departTime2}
            arrivalTime={arriveTime2}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </TouchableOpacity>
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
