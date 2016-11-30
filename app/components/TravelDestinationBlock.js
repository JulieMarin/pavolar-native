import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import ColumnWrapper from './ColumnWrapper';

const TravelDestinationBlock = (props) => {
  return (
    <View style={styles.row}>

      <ColumnWrapper alignItems={'flex-start'} flex={1.25}>
        <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
          {props.travelDirection}
        </CustomText>
      </ColumnWrapper>

      <ColumnWrapper>
        <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
          {props.departureAirport}
        </CustomText>
        <CustomText size={11} fontWeight={'500'} color={'#3e3eac'}>
          {props.departureLocation}
        </CustomText>
      </ColumnWrapper>

      <ColumnWrapper />

      <ColumnWrapper>
        <CustomText size={11} fontWeight={'600'} color={'#3e3eac'}>
          {props.arrivalAirport}
        </CustomText>
        <CustomText size={11} fontWeight={'500'} color={'#3e3eac'}>
          {props.arrivalLocation}
        </CustomText>
      </ColumnWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 4,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    borderColor: '#f5f2f2',
    borderTopWidth: 1,
  },
});

export default TravelDestinationBlock;
