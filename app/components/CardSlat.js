import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSlat = ({ children }) => {
  return (
    <View style={container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eeebeb',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 11,
    paddingRight: 11,
  },
});

const { container } = styles;

export default CardSlat;
