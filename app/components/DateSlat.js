import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

const DateSlat = ({ icon, placeholder }) => {
  return (
    <View style={container}>
      <Image style={image} source={icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#d1d1d1'}
        style={text}
      />
    </View>
  );
};

/**
 * STYLES
 */

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eeebeb',
    borderBottomWidth: 0.7,
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  text: {
    flex: 1,
    paddingLeft: 20,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#525252',
    fontSize: 14
  },
  image: {
    marginTop: 7.5,
    marginBottom: 3.5,
    marginLeft: 10,
    height: 25,
    resizeMode: 'contain'
  }
});

const { container, text, image } = styles;

export default DateSlat;
