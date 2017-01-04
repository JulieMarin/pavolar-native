import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Checkbox from './Checkbox';
import {
  toggleSearchByAirline,
  toggleSearchDirectFlights
} from '../actions';


class FlightPreference extends Component {
  render() {
    const {
      toggleSearchByAirline,
      toggleSearchDirectFlights,
      searchByAirline,
      searchDirectFlightsOnly
    } = this.props;
    return (
      <CardContainer>
        <CardSlat style={container}>
          <Checkbox
            checked={searchByAirline}
            handleEvent={toggleSearchByAirline.bind(this)}
          />
          <CustomText style={[styles.text, textStyle(searchByAirline)]} fontWeight={'500'} size={14}>
            SEARCH BY AIRLINE
          </CustomText>
        </CardSlat>
        <CardSlat style={container}>
          <Checkbox
            checked={searchDirectFlightsOnly}
            handleEvent={toggleSearchDirectFlights.bind(this)}
          />
          <CustomText style={[styles.text, textStyle(searchDirectFlightsOnly)]} fontWeight={'500'} size={14}>
            SEARCH DIRECT FLIGHTS ONLY
          </CustomText>
        </CardSlat>
      </CardContainer>
    );
  }
}

const textStyle = (checked) => {
  if(checked) {
      return {
        color: '#313131'
      }
  } else {
      return {
        color: '#afafaf'
      }
  }
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 9,
    marginRight: 9,
  },
  container: {
    alignItems: 'center',
  }
});

const { darkText, text, container } = styles;

const mapStateToProps = ({ searchParameters }) => {
  const {
    searchByAirline,
    searchDirectFlightsOnly
  } = searchParameters.flights.travelPreferences;

  return {
    searchByAirline,
    searchDirectFlightsOnly
  };
};

export default connect(
  mapStateToProps,
  {
    toggleSearchByAirline,
    toggleSearchDirectFlights
  }
)(FlightPreference);
