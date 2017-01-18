import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

const Separator = (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dotted, styles.block]}>
        <CustomText color={'#cce5ff'} fontWeight={'600'} size={14}>. . . . . . . . . . . . . . . . .</CustomText>
      </View>
      <View style={[styles.block]}>
        <CustomText color={'#389bfe'} size={13}>Show all options</CustomText>
      </View>
      <View style={[styles.dotted, styles.block]}>
        <CustomText color={'#cce5ff'} fontWeight={'600'} size={14}>. . . . . . . . . . . . . . . . .</CustomText>
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

export default Separator;
