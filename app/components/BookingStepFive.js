import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { RowLayout, ColumnLayout, RoundedButton } from './common';
import CustomText from './CustomText';
import FormInput from './FormInput';
import Checkbox from './Checkbox';
import Icon from './Icon';
import TravelDetails from './TravelDetails';
import CardForm from './CardForm';


class BookingStepFive extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.formContainer}>
            <CardForm />
            <CustomText style={{ paddingTop: 10 }} size={12} color={'#bebebe'} >
              Please fill your debit or credit card number
            </CustomText>
          </View>
          <RowLayout style={styles.creditLogos}>
            <Icon size={34} style={{ flex: 1 }} source={require('image!visa')} />
            <Icon size={28} style={{ flex: 1 }} source={require('image!mastercard')} />
          </RowLayout>
          <RoundedButton style={{ marginBottom: 40 }} text={'PAY $800'} />
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    marginBottom: 225
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
  },
  headerText: {
    paddingBottom: 25,
  },
  icon: {
    position: 'absolute',
    left: 40,
    top: 35,
    zIndex: 3
  },
  textBox: {
    marginLeft: 40
  },
  creditLogos: {
    alignItems: 'center',
    margin: 25,
    marginLeft: 75,
    marginRight: 75
  },
  scroll: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});

export default BookingStepFive;
