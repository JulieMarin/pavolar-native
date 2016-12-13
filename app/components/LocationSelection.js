import React, { Component } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native';
import AutoComplete from 'react-native-autocomplete';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import { countries } from './countries';
import ModalDropdown from 'react-native-modal-dropdown';

class LocationSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  _dropdownShow() {
    this._dropdown && this._dropdown.show();
  }

  render() {
    return (
      <CardContainer>
        <CardSlat>
          <Icon style={icon} source={Assets.leavingFrom} />
            <Text>LOL</Text>
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
  }
});

const { text, icon } = styles;

export default LocationSelection;
