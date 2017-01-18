import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlightInfo from './FlightInfo';
import BookingTravelHeader from './BookingTravelHeader';
import PriceWidget from './PriceWidget';
import { renderOptions } from '../services';

class BookingStepTwo extends Component {
  componentDidMount() {
    const { flightInfo, otherInfo } = this.props;
    Actions.refresh({
      renderRightButton: () => {
        return (
          <PriceWidget
            price={otherInfo.total}
            destinationMode={otherInfo.destinationMode}
          />
        )
      }
    });
  }

  handleTouch() {
    Actions.BookingStepThree();
  }

  render() {
    const {
      flightInfo
    } = this.props;
    return (
      <View style={styles.container}>
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
            departTime={flightInfo[0].dateTime.departureTime}
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
        </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.list}>
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
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderColor: '#f5f2f2',
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

export default BookingStepTwo;
