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

  render() {
    return (
      <View style={styles.container}>
        <ResultHeader
          leftText={'Round Trip'}
          rightText={'880'}
        />
        <TravelDestinationBlock
          travelDirection={'DEPARTURE'}
          departureLocation={'New York'}
          departureAirport={'JFK'}
          arrivalLocation={'Los Angeles'}
          arrivalAirport={'LAX'}
        />
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            departTime={'10:30PM'}
            arrivalTime={'01:43 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </TouchableOpacity>

        <TravelDestinationBlock
          travelDirection={'RETURN'}
          departureLocation={'New York'}
          departureAirport={'JFK'}
          arrivalLocation={'Los Angeles'}
          arrivalAirport={'LAX'}
        />
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity onPress={this.handleTouch.bind(this)}>
          <FlightInfo
            departTime={'10:30PM'}
            arrivalTime={'01:43 AM'}
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
