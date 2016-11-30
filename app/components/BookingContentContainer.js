import React from 'react';
import { StyleSheet, View } from 'react-native';

const BookingContentContainer = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  }
});

export default BookingContentContainer;
