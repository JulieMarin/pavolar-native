import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColumnLayout = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
export { ColumnLayout };
