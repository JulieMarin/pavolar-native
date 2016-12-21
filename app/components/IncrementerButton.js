import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import Assets from '../images/Assets';

class IncrementerButton extends Component {
  textState(count) {
    const textStyle = count > 0 ? textDark : text;
    return textStyle;
  }

  decrement() {
    this.props.resetPassengerWarning();
    this.props.onDecrement();
  }

  increment() {
    this.props.resetPassengerWarning();
    this.props.onIncrement();
  }

  render() {
    const { count } = this.props;
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => this.decrement()}>
          <Icon
            style={icon}
            source={Assets.minus}
          />
        </TouchableOpacity>
        <Text style={this.textState(count)}>{count}</Text>
        <TouchableOpacity onPress={() => this.increment()}>
          <Icon
            style={icon}
            source={Assets.plus}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#d6d6d6',
    fontSize: 14
  },
  textDark: {
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#313131',
    fontSize: 14
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    height: 28.5,
    width: 28.5
  }
});

const { container, icon, text, textDark } = styles;

export default IncrementerButton;
