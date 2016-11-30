import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';

const RoundedButton = (props) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, props.style]}>
        <CustomText color={'#ffffff'} size={18} fontWeight={'600'}>
          {props.text}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b6e8a9',
    padding: 22,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 58,
  }
});

export { RoundedButton };
