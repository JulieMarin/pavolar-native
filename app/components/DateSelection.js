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
        <CustomText size={14} fontWeight={'600'} color={'#313131'}>
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
      returnDateSelected

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

        <CardSlat>
          <Icon style={icon} source={Assets.returnDate} />
          <TouchableOpacity
            onPress={() => toggleReturnDateModal(true)}
            style={styles.modalButton}
          >
            {this.isDateSet(returnDateSelected, returnDate, 'RETURN DATE')}
          </TouchableOpacity>
        </CardSlat>

      </CardContainer>
    );
  }
}

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
  }
});

const { text, icon } = styles;

const mapStateToProps = ({ flightOptions }) => {
  const {
    departDate,
    returnDate,
    departDateSelected,
    returnDateSelected
  } = flightOptions.datePreferences

  return {
    departDate,
    returnDate,
    departDateSelected,
    returnDateSelected
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
