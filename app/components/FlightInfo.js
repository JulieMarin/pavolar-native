import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon';
import CustomText from './CustomText';
import ColumnWrapper from './ColumnWrapper';

const FlightInfo = (props) => {
  return (
    <View style={[styles.row, props.style]}>
      <ColumnWrapper alignItems={ props.flexOverride || 'flex-start'} flex={1.25}>
        <Icon height={15} width={84} source={props.airlineImage} />
      </ColumnWrapper>

      <ColumnWrapper>
        <CustomText size={11} fontWeight={'600'}>
          {props.departTime}
        </CustomText>
      </ColumnWrapper>

      <ColumnWrapper>
        <CustomText color={'#989898'} size={11} fontWeight={'500'}>
          {props.flightDuration}
        </CustomText>
        <CustomText color={'#989898'} size={11} fontWeight={'500'}>
          {props.flightPathType}
        </CustomText>
      </ColumnWrapper>

      <ColumnWrapper>
        <CustomText size={11} fontWeight={'600'}>
          {props.arrivalTime}
        </CustomText>
      </ColumnWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default FlightInfo;
