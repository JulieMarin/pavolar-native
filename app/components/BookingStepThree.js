import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightInfo from './FlightInfo';
import BookingTravelHeader from './BookingTravelHeader';
import Total from './Total';
import NextSteps from './NextSteps';
import BookingButton from './BookingButton';

class BookingStepThree extends Component {
  handleTouch() {
    Actions.BookingStepFour();
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            zIndex: 4,
          }}
        >
          <BookingTravelHeader
            style={{ paddingTop: 0, marginBottom: 0 }}
            containerStyle={{ shadowOpacity: 0 }}
            travelDirection={'DEPARTURE'}
            departureLocation={'New York'}
            departureAirport={'JFK'}
            arrivalLocation={'Los Angeles'}
            arrivalAirport={'LAX'}
            date={'Sun, 20 Oct 2016'}
          />
          <FlightInfo
            style={[styles.slat, { marginTop: 0 }]}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
          <BookingTravelHeader
            style={{ marginBottom: 0 }}
            containerStyle={{ shadowOpacity: 0 }}
            travelDirection={'RETURN'}
            departureLocation={'New York'}
            departureAirport={'JFK'}
            arrivalLocation={'Los Angeles'}
            arrivalAirport={'LAX'}
            date={'Sun, 20 Oct 2016'}
          />
          <FlightInfo
            style={[styles.slat, { marginTop: 0 }]}
            flexOverride={'center'}
            departTime={'09:00PM'}
            arrivalTime={'12:19 AM'}
            flightPathType={'direct'}
            flightDuration={'6h 13min'}
          />
        </View>
        <Total
          passengerCount={1}
          flightTotal={'519.80'}
          feesTotal={'280.20'}
          total={'880.80'}
        />
        <NextSteps />
      </ScrollView>
      <BookingButton />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#f5f2f2',
    backgroundColor: '#fafafa'
  },
  list: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderColor: '#f5f2f2',
    paddingTop: 8,
  },
  slat: {
    paddingTop: 18,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
    borderColor: '#f4f4f4',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 4,
  },
  slatAlt: {
    paddingTop: 18,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
    borderColor: '#f4f4f4',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
});

export default BookingStepThree;
