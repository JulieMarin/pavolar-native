import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RowLayout, ColumnLayout } from './common';
import CustomText from './CustomText';
import Checkbox from './Checkbox';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noPreference: false,
      directFlights: false,
      oneStop: false,
      twoStop: false,
      checked: false
    };
  }

  noPreferenceSwitch() {
    if (this.state.checked === false) {
      this.setState({
        noPreference: !this.state.noPreference,
        checked: true
      })
    }
  }
  directFlightsSwitch() {
    if (this.state.checked === false) {
      this.setState({
        directFlights: !this.state.directFlights,
        checked: true
      })
    }
  }

  oneStopSwitch() {
    if (this.state.checked === false) {
      this.setState({
        oneStop: !this.state.oneStop,
        checked: true
      })
    }
  }

  twoStopSwitch() {
    if (this.state.checked === false) {
      this.setState({
        twoStop: !this.state.twoStop,
        checked: true
      })
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomText>Filter by stops</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox checked={this.state.noPreference} handleEvent={this.noPreferenceSwitch.bind(this)} />
          <CustomText>No preference</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox checked={this.state.directFlights} handleEvent={this.directFlightsSwitch.bind(this)} />
          <CustomText>Direct flights only</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox checked={this.state.oneStop} handleEvent={this.oneStopSwitch.bind(this)} />
          <CustomText>Up to 1 stop</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox checked={this.state.twoStop} handleEvent={this.twoStopSwitch.bind(this)} />
          <CustomText>Up to 2 stops</CustomText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.925)',
    borderLeftWidth: 1.5,
    borderColor: 'rgb(240, 240, 240)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'rgb(236, 236, 236)',
    paddingBottom: 8,
    marginBottom: 15
  },
});

export default FilterMenu;
