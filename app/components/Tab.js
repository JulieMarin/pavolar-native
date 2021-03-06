import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './common';

const Tab = (props) => {
  const setModeAndClearInput = () => {
    props.action('OneWay');
    // props.updateLocField({
    //   prop: 'airportReturnCode',
    //   value: ''
    // });
    // props.updateLocField({
    //   prop: 'airportReturnLocation',
    //   value: ''
    // });
    // props.updateDateField({
    //   prop: 'returnDate',
    //   value: new Date(),
    // });
    // props.updateDateField({
    //   prop: 'returnDateSelected',
    //   value: false
    // });
  };

  return (
    <View style={container}>
      <Button
        onPress={() => props.action('Round Trip')}
        text={'ROUND TRIP'}
        backgroundColor={'#0172fc'}
        width={170}
        underlayColor={'#6aadff'}
      />
      <Button
        onPress={() => setModeAndClearInput()}
        text={'ONE WAY'}
        backgroundColor={'rgba(255, 0, 0, 0)'}
        borderColor={'#ffffff'}
        borderWidth={1}
        width={170}
        underlayColor={'rgba(255, 255, 255, 0.4)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  }
});

const { container } = styles;

export default Tab;
