import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CloseButton } from './common';
import CalendarPicker from 'react-native-calendar-picker';

class DateModal extends Component {
  setDate(dateRef, date) {
    this.props.updateDateField({
      prop: dateRef,
      value: date
    })
  }

  render() {
    const {
      currentDate,
      maxDate,
      toggleModal,
      updateDateField,
      dateSelection,
      dateRef
    } = this.props;
    return (
    <View>
      <CloseButton onButtonPress={() => toggleModal(false)} />
      <CalendarPicker
        selectedDate={dateSelection}
        onDateChange={(date) => this.setDate(dateRef, date)}
        screenWidth={Dimensions.get('window').width}
        selectedBackgroundColor={'#5ce600'}
        selectedDayColor={'#8dc4fe'}
        minDate={currentDate}
        maxDate={maxDate}
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
