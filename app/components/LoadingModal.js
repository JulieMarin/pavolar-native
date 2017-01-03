import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingModal = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingModal;
