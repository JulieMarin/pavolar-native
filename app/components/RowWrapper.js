import React from 'react';
import { View, StyleSheet } from 'react-native';

const RowWrapper = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 12,
  }
});

export default RowWrapper;
