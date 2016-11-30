import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
  const styles = StyleSheet.create({
    font: {
      fontFamily: 'AvenirNext-Medium',
      fontSize: props.size || 16,
      fontWeight: props.fontWeight || '400',
      color: props.color || '#313131'
    }
  });

  return (
    <Text
      style={[styles.font, props.style]}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
