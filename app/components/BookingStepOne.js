import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { renderOptions } from '../services';
import FlightInfo from './FlightInfo';
import PriceWidget from './PriceWidget';
import BookingTravelHeader from './BookingTravelHeader';

class BookingStepOne extends Component {
  componentDidMount() {
    const { data, headerInfo } = this.props;
    Actions.refresh({
      renderRightButton: () => {
        return (
          <PriceWidget
            price={data.pricing.total}
            destinationMode={headerInfo.destinationMode}
          />
        )
      }
    });
  }

  handleTouch() {
    Actions.BookingStepTwo();
  }

  render() {
    const {
      data,
      headerInfo,
    } = this.props;

    const {
      airportDepartCode,
      airportReturnCode,
      airportDepartLocation,
      airportReturnLocation,
      destinationMode,
      departDate,
      returnDate,
    } = headerInfo;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <BookingTravelHeader
            travelDirection={'DEPARTURE'}
            departureLocation={airportDepartLocation}
            departureAirport={airportDepartCode}
            arrivalLocation={airportReturnLocation}
            arrivalAirport={airportReturnCode}
            date={departDate.toLocaleDateString()}
          />
          {renderOptions(
            data.availableFlights.outgoingFlights,
            data.pricing,
            destinationMode,
            data
          )}
        </View>

        <View style={styles.container}>
          <BookingTravelHeader
            travelDirection={'RETURN'}
            departureLocation={airportReturnLocation}
            departureAirport={airportReturnCode}
            arrivalLocation={airportDepartLocation}
            arrivalAirport={airportDepartCode}
            date={returnDate.toLocaleDateString()}
          />
          {renderOptions(data.availableFlights.returningFlights)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
