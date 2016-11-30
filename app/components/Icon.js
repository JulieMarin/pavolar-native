import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = ({ source, width, height, size, style }) => {
  const styles = StyleSheet.create({
    image: {
      height: height || size || 25,
      width: width || size || 25,
      resizeMode: 'contain',
    }
  });

  const { image } = styles;

  return (
      <Image style={[image, style]} source={source} />
  );
};

export default Icon;
