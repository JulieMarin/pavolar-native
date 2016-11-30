import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BookingContentContainer from './BookingContentContainer';
import BookingResultsContent from './BookingResultsContent';

class AvailableFlights extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookingContentContainer>
          <BookingResultsContent />
        </BookingContentContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 18,
    borderColor: '#f5f2f2',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  }
});

export default AvailableFlights;
