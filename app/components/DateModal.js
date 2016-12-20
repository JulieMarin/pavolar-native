import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CloseButton } from './common';
import CalendarPicker from 'react-native-calendar-picker';
import CustomText from './CustomText';

class DateModal extends Component {
  setDate(refs, date) {
    const { updateDateField } = this.props;
    updateDateField({
      prop: refs.date,
      value: date
    })
    updateDateField({
      prop: refs.selected,
      value: true
    })
  }

  render() {
    const {
      currentDate,
      maxDate,
      toggleModal,
      dateSelection,
      keyRefs
    } = this.props;
    return (
    <View>
      <View>
        <CloseButton
          style={styles.button}
          onButtonPress={() => toggleModal(false)}
        />

      </View>
      <CalendarPicker
        selectedDate={dateSelection}
        onDateChange={(date) => this.setDate(keyRefs, date)}
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
  button: {
    marginBottom: 10
  }
});

export default DateModal;
