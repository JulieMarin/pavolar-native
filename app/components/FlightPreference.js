import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Checkbox from './Checkbox';


class FlightPreference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airlineChecked: false,
      directFlightsChecked: false,
      firstOptionTextStyle: text,
      secondOptionTextStyle: text
    };
  }

  airlineCheckedToggle() {
    this.setState({
      airlineChecked: !this.state.airlineChecked,
      firstOptionTextStyle: this.state.airlineChecked ? text : darkText
    });
  }

  directFlightsCheckedToggle() {
    this.setState({
      directFlightsChecked: !this.state.directFlightsChecked,
      secondOptionTextStyle: this.state.directFlightsChecked ? text : darkText
    });
  }

  render() {
    return (
      <CardContainer>
        <CardSlat style={container}>
          <Checkbox
            checked={this.state.airlineChecked}
            handleEvent={this.airlineCheckedToggle.bind(this)}
          />
          <Text style={this.state.firstOptionTextStyle}>SEARCH BY AIRLINE</Text>
        </CardSlat>
        <CardSlat style={container}>
          <Checkbox
            checked={this.state.directFlightsChecked}
            handleEvent={this.directFlightsCheckedToggle.bind(this)}
          />
          <Text style={this.state.secondOptionTextStyle}>SEARCH DIRECT FLIGHTS ONLY</Text>
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
    color: '#afafaf',
    fontSize: 14,
    marginLeft: 9,
    marginRight: 9,
  },
  darkText: {
    flex: 1,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#313131',
    fontSize: 14,
    marginLeft: 9,
    marginRight: 9,
  },
  container: {
    alignItems: 'center',
  }
});

const { darkText, text, container } = styles;

export default FlightPreference;
