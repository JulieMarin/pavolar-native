import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import Assets from '../images/Assets';

class IncrementerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      textStyle: text
    };
  }

  decrementCount() {
    if (this.state.count === 1) {
      this.setState({ textStyle: text });
      this.setState({ count: --this.state.count });
    } else if (this.state.count > 0) {
      this.setState({ count: --this.state.count });
    }
  }

  incrementCount() {
    if (this.state.count === 0) {
      this.setState({ textStyle: textDark });
    }
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <View style={container}>
        <TouchableOpacity onPress={this.decrementCount.bind(this)}>
          <Icon
            style={icon}
            source={Assets.minus}
          />
        </TouchableOpacity>
        <Text style={this.state.textStyle}>{this.state.count}</Text>
        <TouchableOpacity onPress={this.incrementCount.bind(this)}>
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
    color: '#afafaf',
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
