import React, { Component } from 'react';
import { TextInput, StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import CalendarPicker from 'react-native-calendar-picker';
import CardContainer from './CardContainer';
import Modal from 'react-native-modalbox'
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';

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
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.departureDate} />
          <TouchableOpacity onPress={() => console.log(this.props)}>
            <Text>MODAL TEST</Text>
          </TouchableOpacity>
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.returnDate} />
          <TouchableOpacity onPress={() => console.log(this.props)}>
            <Text>MODAL TEST</Text>
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
  }
});

const { text, icon } = styles;

export default DateSelection;
