import React, { Component } from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import AutoCompleteInput from './AutoCompleteInput';

class LocationSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <CardContainer>
        <CardSlat style={{ zIndex: 2}}>
          <Icon style={icon} source={Assets.leavingFrom} />
          <AutoCompleteInput />
        </CardSlat>

        <CardSlat style={{ zIndex: 1}}>
          <Icon style={icon} source={Assets.goingTo} />
          <AutoCompleteInput />
        </CardSlat>
      </CardContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    borderWidth: 1,
    width: 300,
    height: 30,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#d6d6d6',
    fontSize: 14,
    marginLeft: 9,
    marginRight: 9,
  },
  icon: {
    marginTop: 5.5,
    marginBottom: 5.5,
    marginLeft: 9,
    marginRight: 9,
  },
});

const { text, icon } = styles;

export default LocationSelection;
