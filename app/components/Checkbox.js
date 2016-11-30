import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Assets from '../images/Assets';
import Icon from './Icon';

const Checkbox = (props) => {
  const checked = props.checked ? Assets.check : Assets.checkEmpty;

  return (
    <TouchableWithoutFeedback onPress={() => props.handleEvent()}>
      <View style={props.style}>
        <Icon
          style={icon}
          source={checked}
          size={26}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 9,
    marginRight: 9,
  }
});

const { icon } = styles;

export default Checkbox;
