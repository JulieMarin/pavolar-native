import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Assets from '../images/Assets';

const Title = () => {
  return (
    <Image style={styles.logoStyle} source={Assets.logo} />
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    alignSelf: 'center',
    height: 39,
    width: 165.5,
    resizeMode: 'contain'
  },
});

export default Title;
