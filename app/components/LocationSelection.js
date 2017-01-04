import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Icon from './Icon';
import AutoCompleteInput from './AutoCompleteInput';
import {
  updateLocField,
  cullAirlineSearchResults,
  populateAutocomplete,
  swapLocations,
  updateDateField
} from '../actions';


class LocationSelection extends Component {
  flightIcon(airlineCode, image) {
    if(airlineCode.length == 0) {
      return (
        <Icon style={icon} source={image} />
      )
    }
    return (
      <CustomText
        style={icon}
        size={14}
        color={'#a3a3a3'}
        fontWeight={'600'}
      >
        {airlineCode}
      </CustomText>
    )
  }

  render() {
    const {
      airportDepartCode,
      airportReturnCode,
      airportDepartLocation,
      airportReturnLocation,
      departData,
      returnData,
      searchLoading,
      updateLocField,
      cullAirlineSearchResults,
      populateAutocomplete,
      destinationMode
    } = this.props;
    return (
      <CardContainer>
        <CardSlat style={{ zIndex: 2 }}>
          {this.flightIcon(airportDepartCode, require('image!leaving_from'))}
          <AutoCompleteInput
            dataContainer={departData}
            defaultInputValue={airportDepartLocation}
            placeholder={'LEAVING FROM'}

            updateLocField ={updateLocField.bind(this)}
            cullAirlineSearchResults = {cullAirlineSearchResults.bind(this)}
            clearData = {populateAutocomplete.bind(this)}

            keyRefs={{
              data: 'departData',
              airportCode: 'airportDepartCode',
              airportLocation: 'airportDepartLocation'
            }}
          />
          <ActivityIndicator
            animating={searchLoading}
            size={'small'}
            color={'#0076f8'}
          />
        </CardSlat>

        <View>
          <CardSlat style={{ zIndex: 1 }}>
            {this.flightIcon(airportReturnCode, require('image!going_to'))}
            <AutoCompleteInput
              dataContainer={returnData}
              defaultInputValue={airportReturnLocation}
              placeholder={'GOING TO'}
              // editable={destinationMode !== 'OneWay'}

              updateLocField ={updateLocField.bind(this)}
              cullAirlineSearchResults = {cullAirlineSearchResults.bind(this)}
              clearData = {populateAutocomplete.bind(this)}

              keyRefs={{
                data: 'returnData',
                airportCode: 'airportReturnCode',
                airportLocation: 'airportReturnLocation'
              }}
            />
          </CardSlat>
        </View>

        <TouchableOpacity
            style={styles.swap}
            onPress={() => this.props.swapLocations()}
            // disabled={destinationMode == 'OneWay'}
          >
          <View>
              <Icon size={34} source={require('image!change')} />
          </View>
        </TouchableOpacity>

      </CardContainer>
    );
  }
}

const greyedOut = (mode) => {
  return (mode == 'OneWay') ? styles.oneWayActive : styles.roundTripActive
};

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
    marginTop: 5,
    marginBottom: 5.5,
    marginLeft: 9,
    marginRight: 9,
  },
  swap: {
    position: 'absolute',
    top: 36,
    right:30,
    zIndex: 1
  },
  roundTripActive: {
    opacity: 1
  },
  oneWayActive: {
    opacity: 0.325
  }
});

const { icon } = styles;

const mapStateToProps = ({ searchParameters }) => {
  const {
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation,
  } = searchParameters.flights.locationPreferences;

  const {
    searchLoading,
    departData,
    returnData,
  } = searchParameters.flights.locSearchResults;

  const { destinationMode } = searchParameters.flights.travelPreferences;

  return {
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation,
    departData,
    returnData,
    searchLoading,
    destinationMode
   }
}

export default connect(
  mapStateToProps,
  {
    updateLocField,
    cullAirlineSearchResults,
    populateAutocomplete,
    swapLocations,
    updateDateField
  }
)(LocationSelection);
