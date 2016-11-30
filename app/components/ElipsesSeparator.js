import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomText from './CustomText';

const ElipsesSeparator = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dotted, styles.block]}>
        <CustomText color={'#ced0eb'} fontWeight={'600'} size={14}>
          . . . . . . . . . . . . . .
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop: 4,
    marginBottom: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
 },
 dotted: {
    marginBottom: 6
 }
});

export default ElipsesSeparator;
