import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';

class LocationSelection extends Component {
  render() {
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.leavingFrom} />
          <TextInput
            style={text}
            autoCapitalize={'characters'}
            placeholder={'LEAVING FROM'}
          />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.goingTo} />
          <TextInput
            style={text}
            autoCapitalize={'characters'}
            placeholder={'GOING TO'}
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
  }
});

const { text, icon } = styles;

export default LocationSelection;
