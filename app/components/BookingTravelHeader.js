import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import ColumnWrapper from './ColumnWrapper';
import ElipsesSeparator from './ElipsesSeparator';

const BookingTravelHeader = (props) => {
  return (
    <View style={[styles.shadow, props.containerStyle]}>
      <View style={[styles.row, props.style, props.containerStyle]}>
        <ColumnWrapper
          style={{ paddingLeft: 14 }}
          alignItems={'flex-start'}
          alignChildren={'flex-start'}
          flex={1}
        >
          <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
            {props.travelDirection}
          </CustomText>
          <CustomText size={10} color={'#3e3eac'}>
            {props.date}
          </CustomText>
        </ColumnWrapper>

        <ColumnWrapper flex={0.85}>
          <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
            {props.departureAirport}
          </CustomText>
          <CustomText size={11} fontWeight={'500'} color={'#3e3eac'}>
            {props.departureLocation}
          </CustomText>
        </ColumnWrapper>

        <ColumnWrapper>
          <ElipsesSeparator />
        </ColumnWrapper>

        <ColumnWrapper flex={0.85}>
          <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
            {props.arrivalAirport}
          </CustomText>
          <CustomText size={11} fontWeights={'500'} color={'#3e3eac'}>
            {props.arrivalLocation}
          </CustomText>
        </ColumnWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    marginBottom: 4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
  }
});

export default BookingTravelHeader;
