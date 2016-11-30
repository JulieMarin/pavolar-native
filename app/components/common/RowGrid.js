import React from 'react';
import { View, StyleSheet } from 'react-native';

const RowGrid = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export { RowGrid };
