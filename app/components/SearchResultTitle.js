import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchResultTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New York - Los Angeles International</Text>
      <Text style={styles.textLight}>OCT 20 - OCT 25</Text>
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
