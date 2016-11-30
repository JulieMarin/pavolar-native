import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';

const Total = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <CustomText fontWeight={'600'} color={'#ffffff'}>
          Total price
        </CustomText>
        <View style={styles.price}>
          <CustomText
            color={'#ffffff'}
            style={{ marginTop: 2 }}
            fontWeight={'500'}
            size={11}
          >
          {'$'}
          </CustomText>
          <CustomText size={18} fontWeight={'700'} color={'#ffffff'}>{props.total}</CustomText>
        </View>
      </View>

      <View style={styles.body}>

        <View style={styles.bodyContent}>
          <CustomText size={14} color={'#666666'}>
            Number of Passengers
          </CustomText>
          <CustomText fontWeight={'600'} size={14} color={'#646464'}>
            {props.passengerCount}
          </CustomText>
        </View>

        <View style={styles.bodyContent}>
          <CustomText size={14} color={'#666666'}>
            Flight
          </CustomText>
          <View style={styles.price}>
              <CustomText
                  color={'#646464'}
                  style={{ marginTop: 2 }}
                  fontWeight={'500'}
                  size={11}
                >
              {'$'}
            </CustomText>
            <CustomText fontWeight={'600'} size={14} color={'#646464'}>
              {props.flightTotal}
            </CustomText>
          </View>
        </View>

        <View style={styles.bodyContent}>
          <CustomText size={14} color={'#666666'}>
            Taxes and Fees
          </CustomText>
          <View style={styles.price}>
            <CustomText
                color={'#646464'}
                style={{ marginTop: 2 }}
                fontWeight={'500'}
                size={11}
              >
            {'$'}
          </CustomText>
            <CustomText fontWeight={'600'} size={14} color={'#646464'}>
              {props.feesTotal}
            </CustomText>
          </View>
        </View>

        <View style={styles.bodyContent}>
          <CustomText size={14} color={'#666666'}>
            Total
          </CustomText>
          <View style={styles.price}>
            <CustomText
                color={'#646464'}
                style={{ marginTop: 2 }}
                fontWeight={'500'}
                size={11}
              >
            {'$'}
          </CustomText>
            <CustomText fontWeight={'600'} size={14} color={'#646464'}>
              {props.total}
            </CustomText>
          </View>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  header: {
    height: 55,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3f40aa',
    paddingLeft: 15,
    paddingRight: 15,
  },
  body: {
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffffff'
  },
  bodyContent: {
    paddingTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row'
  }
});

export default Total;
