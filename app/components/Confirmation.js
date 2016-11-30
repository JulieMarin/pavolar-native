import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ColumnLayout } from './common';
import CustomText from './CustomText';
import Icon from './Icon';
import TravelDetails from './TravelDetails';

const Confirmation = (props) => {
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar barStyle={'light-content'} />
      <ColumnLayout style={styles.container}>
        <Icon size={78} source={require('image!confirmed')} />
        <CustomText
          style={styles.bookedText}
          color={'#0f5bc4'}
          fontWeight={'600'}
          size={15}
        >
          Your flight is booked!
        </CustomText>
        <Icon
          style={styles.appleWallet}
          height={55}
          width={185}
          source={require('image!apple_wallet')}
        />
      </ColumnLayout>

      <View>
        <TravelDetails
          departureAirport={'JFK'}
          arrivalAirport={'LAX'}
          departDate={'SUN, 20 OCT 2016'}
          returnDate={'SUN, 25 OCT 2016'}
          name={'Jack Smith (Adult)'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    // flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
  },
  bookedText: {
    paddingTop: 8,
    paddingBottom: 8
  },
  appleWallet: {
    marginTop: 10,
    marginBottom: 10
  }

});

export default Confirmation;
