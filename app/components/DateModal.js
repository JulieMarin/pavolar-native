import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

class DateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  maxDate() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 6);
    return currentDate;
  }

  render() {
    return (
    <View>
      <CalendarPicker
        selectedDate={this.state.date}
        onDateChange={() => null}
        screenWidth={Dimensions.get('window').width}
        selectedBackgroundColor={'#5ce600'}
        selectedDayColor={'#8dc4fe'}
        minDate={this.state.date}
        maxDate={this.maxDate()}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default DateModal;
