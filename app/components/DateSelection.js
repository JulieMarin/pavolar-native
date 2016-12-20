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
  constructor(props) {
    super(props);
    this.maxDate();
    this.state = {
      date: new Date(),
      departDate: '',
      returnDate: '',
    };
  }

  maxDate() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 6);
    return currentDate;
  }

  render() {
    const {
      toggleDepartDateModal,
      toggleReturnDateModal
    } = this.props;
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.departureDate} />
          <TouchableOpacity
            onPress={() => toggleDepartDateModal()}
            style={styles.modalButton}
          >
            <CustomText
              size={14}
              color={'#a3a3a3'}
            >
              DEPARTURE DATE
            </CustomText>
          </TouchableOpacity>
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.returnDate} />
          <TouchableOpacity
            onPress={() => toggleReturnDateModal()}
            style={styles.modalButton}
          >
            <CustomText
              size={14}
              color={'#a3a3a3'}
            >
              RETURN DATE
            </CustomText>
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
  } = flightOptions.datePreferences

  return {
    departDate,
    returnDate
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
