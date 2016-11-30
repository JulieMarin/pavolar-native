import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightInfo from './FlightInfo';
import BookingTravelHeader from './BookingTravelHeader';

class BookingStepOne extends Component {
  handleTouch() {
    Actions.BookingStepTwo();
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <BookingTravelHeader
            travelDirection={'DEPARTURE'}
            departureLocation={'New York'}
            departureAirport={'JFK'}
            arrivalLocation={'Los Angeles'}
            arrivalAirport={'LAX'}
            date={'Sun, 20 Oct 2016'}
          />
          <TouchableOpacity onPress={this.handleTouch.bind(this)}>
            <FlightInfo
              style={styles.slat}
              flexOverride={'center'}
              departTime={'09:00PM'}
              arrivalTime={'12:19 AM'}
              flightPathType={'direct'}
              flightDuration={'6h 13min'}
            />
          </TouchableOpacity>
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </View>

        <View style={styles.container}>
          <BookingTravelHeader
            travelDirection={'RETURN'}
            departureLocation={'New York'}
            departureAirport={'JFK'}
            arrivalLocation={'Los Angeles'}
            arrivalAirport={'LAX'}
            date={'Sun, 20 Oct 2016'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <FlightInfo
            style={styles.slat}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: '#fafafa',
    borderColor: '#f5f2f2',
    paddingBottom: 30,
  },
  slat: {
    paddingTop: 18,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
    borderColor: '#f4f4f4',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
});

export default BookingStepOne;
