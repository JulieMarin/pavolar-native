import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
 } from 'react-native';
import CardContainer from './CardContainer';
import Modal from 'react-native-modalbox'
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import CustomText from './CustomText';
import {
  updateDateField,
  toggleDepartDateModal,
  toggleReturnDateModal
 } from '../actions';


class DateSelection extends Component {
  isDateSet(selected, date, placeholder) {
    if (selected) {
      return (
        <CustomText size={14} fontWeight={'500'} color={'#313131'}>
          {date.toLocaleDateString()}
        </CustomText>
      )
    } else {
      return(
        <CustomText size={14} color={'#a3a3a3'}>
          {placeholder}
        </CustomText>
      )
    }
  }

  render() {
    const {
      toggleDepartDateModal,
      toggleReturnDateModal,
      departDate,
      returnDate,
      departDateSelected,
      returnDateSelected,
      destinationMode

    } = this.props;
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.departureDate} />
          <TouchableOpacity
            onPress={() => toggleDepartDateModal(true)}
            style={styles.modalButton}
          >
            {this.isDateSet(departDateSelected, departDate, 'DEPARTURE DATE')}
          </TouchableOpacity>
        </CardSlat>

        <View style={greyedOut(destinationMode)}>
          <CardSlat>
            <Icon style={icon} source={Assets.returnDate} />
            <TouchableOpacity
              disabled={destinationMode == 'OneWay'}
              onPress={() => toggleReturnDateModal(true)}
              style={styles.modalButton}
              activeOpacity={0.2}
            >
              {this.isDateSet(returnDateSelected, returnDate, 'RETURN DATE')}
            </TouchableOpacity>
          </CardSlat>
        </View>

      </CardContainer>
    );
  }
}

const greyedOut = (mode) => {
  return (mode == 'OneWay') ? styles.oneWayActive : styles.roundTripActive
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#c7c7cd',
    fontSize: 14,
  },
  icon: {
    marginTop: 5.5,
    marginBottom: 5.5,
    marginLeft: 9,
    marginRight: 9,
  },
  modalButton: {
    marginLeft: 9
  },
  roundTripActive: {
    opacity: 1.0
  },
  oneWayActive: {
    opacity: 0.325
  }
});

const { text, icon } = styles;

const mapStateToProps = ({ searchParameters }) => {
  const {
    departDate,
    returnDate,
    departDateSelected,
    returnDateSelected
  } = searchParameters.flights.datePreferences;

  const { destinationMode } = searchParameters.flights.travelPreferences;

  return {
    departDate,
    returnDate,
    departDateSelected,
    returnDateSelected,
    destinationMode
  }
};

export default connect(
  mapStateToProps,
  {
    updateDateField,
    toggleDepartDateModal,
    toggleReturnDateModal
  }
)(DateSelection);
