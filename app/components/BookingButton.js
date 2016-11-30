import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomText from './CustomText';

class BookingButton extends Component {
  handleTouch() {
    Actions.BookingStepFour();
  }

  render() {
    return (
      <TouchableHighlight
        style={[container, this.props.style]}
        onPress={this.handleTouch}
        underlayColor={'rgb(88, 143, 170)'}
      >
        <View>
          <CustomText size={17} color={'#ffffff'} fontWeight={'700'}>
            CONTINUE BOOKING
          </CustomText>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f40aa',
    height: 55,
  }
});

const { container, text } = styles;

export default BookingButton;
