import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const TravelDetails = (props) => {
  return (
    <View style={styles.container}>
      <CustomText size={14} fontWeight={'600'}>Booking details</CustomText>

      <CustomText size={14}>{props.departureAirport + " - " + props.arrivalAirport}</CustomText>
      <CustomText size={14} style={styles.content} >{props.departDate}</CustomText>

      <CustomText size={14}>{props.arrivalAirport + " - " + props.departureAirport}</CustomText>
      <CustomText size={14} style={styles.content} >{props.returnDate}</CustomText>

      <CustomText size={14} fontWeight={'600'}>Traveller info</CustomText>
      <CustomText size={14}>{props.name}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
  },
  content: {
    marginBottom: 15
  }
});

export default TravelDetails;
