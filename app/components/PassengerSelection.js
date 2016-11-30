import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import IncrementerButton from './IncrementerButton';

class PassengerSelection extends Component {
  render() {
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.adults} />
          <Text style={text}>ADULTS</Text>
          <Text style={subText}>(12+ YEARS)</Text>
          <IncrementerButton />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.child} />
          <Text style={text}>CHILD</Text>
          <Text style={subText}>(2-11 YEARS)</Text>
          <IncrementerButton />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.infant} />
          <Text style={text}>INFANT</Text>
          <Text style={subText}>(0-2 YEARS)</Text>
          <IncrementerButton />
        </CardSlat>

      </CardContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#afafaf',
    fontSize: 14,
    paddingRight: 3,
    marginLeft: 9,
  },
  subText: {
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#afafaf',
    fontSize: 11,
    paddingRight: 3,
  },
  icon: {
    marginTop: 5.5,
    marginBottom: 5.5,
    marginLeft: 9,
    marginRight: 9,
  }
});

const { text, subText, icon } = styles;

export default PassengerSelection;
