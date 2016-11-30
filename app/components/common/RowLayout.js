import React from 'react';
import { View, StyleSheet } from 'react-native';

const RowLayout = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export { RowLayout };
