import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PriceWidget = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.price}>${props.price}</Text>
      <Text style={styles.subText}>{props.destinationMode}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  price: {
    height: 20,
    fontSize: 18,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '600'
  },
  subText: {
    fontSize: 9,
    fontFamily: 'AvenirNext-Medium',
    color: '#9e9e9e'
  }
});

export default PriceWidget;
