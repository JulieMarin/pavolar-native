import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';

class DateSelection extends Component {
  constructor(props) {
    super(props);
    this.maxDate();
    this.state = {
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
          <DatePicker
            date={this.state.departDate}
            mode="date"
            placeholder="DEPARTURE DATE"
            showIcon={false}
            format='MM/DD/YY'
            minDate={new Date()}
            maxDate={this.maxDate()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => { this.setState({ departDate: date }); }}
          />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.returnDate} />
          <DatePicker
            date={this.state.returnDate}
            mode="date"
            placeholder="RETURN DATE"
            showIcon={false}
            format='MM/DD/YY'
            minDate={new Date()}
            maxDate={this.maxDate()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => { this.setState({ returnDate: date }); }}
          />
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
