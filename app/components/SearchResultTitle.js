import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchResultTitle = ({titleProps}) => {
  const {
    airportDepartLocation,
    airportReturnLocation,
    departDate,
    returnDate
  } = titleProps;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{airportDepartLocation + ' - ' + airportReturnLocation}</Text>
      <Text style={styles.textLight}>{departDate.toLocaleDateString() + ' - ' + returnDate.toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 14,
    color: '#313131',
  },
  textLight: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 11,
    color: '#adadad',
  }
});

export default SearchResultTitle;
