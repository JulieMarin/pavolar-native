import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const ResultHeader = (props) => {
  return (
    <View style={styles.header}>
      <CustomText
        color={'#939393'}
        size={12}
        fontWeight={'500'}
      >
        {props.leftText}
      </CustomText>
      <View style={styles.price}>
        <CustomText
          style={{ marginTop: 2 }}
          fontWeight={'500'}
          size={11}
        >
        {'$'}
        </CustomText>
        <CustomText fontWeight={'600'} size={18}>
          {props.rightText}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  price: {
    flexDirection: 'row'
  }
});

export default ResultHeader;
