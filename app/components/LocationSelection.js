import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator } from 'react-native';
import CustomText from './CustomText';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import AutoCompleteInput from './AutoCompleteInput';
import {
  updateFormOption,
  cullAirlineSearchResults,
} from '../actions';


class LocationSelection extends Component {
  constructor(props) {
    super(props);
  }

  flightIcon(airlineCode) {
    if(airlineCode.length == 0) {
      return (
        <Icon style={icon} source={Assets.leavingFrom} />
      )
    }
    return (
      <CustomText>{airlineCode}</CustomText>
    )
  }

  render() {
    const {
      departData,
      airportDepartCode,
      returnData,
      airportReturnCode,
      airportDepartLocation,
      airportReturnLocation,
      updateFormOption,
      cullAirlineSearchResults,
      searchLoading
    } = this.props;

    return (
      <CardContainer>
        <CardSlat style={{ zIndex: 2 }}>
          {this.flightIcon(airportDepartCode)}
          <AutoCompleteInput
            dataContainer={departData}
            defaultInputValue={airportDepartLocation}
            placeholder={'LEAVING FROM'}
            styleRef={this.props.autocomplete}

            cullAirlineSearchResults={cullAirlineSearchResults.bind(this)}
            updateFormOption={updateFormOption.bind(this)}

            stringRefs={{
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

        <CardSlat style={{ zIndex: 1 }}>
          {this.flightIcon(airportReturnCode)}
          <AutoCompleteInput
            dataContainer={returnData}
            defaultInputValue={airportReturnLocation}
            placeholder={'GOING TO'}
            styleRef={this.props.autocomplete}

            cullAirlineSearchResults={cullAirlineSearchResults.bind(this)}
            updateFormOption={updateFormOption.bind(this)}

            stringRefs={{
              data: 'returnData',
              airportCode: 'airportReturnCode',
              airportLocation: 'airportReturnLocation'
            }}
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
  },
});

const { icon } = styles;

const mapStateToProps = ({ main }) => {
  const {
    airportDepartCode,
    airportReturnCode,
    departData,
    returnData,
    airportDepartLocation,
    airportReturnLocation,
    searchLoading
   } = main;

  return {
    airportDepartCode,
    airportReturnCode,
    departData,
    returnData,
    airportDepartLocation,
    airportReturnLocation,
    searchLoading
   }
}

export default connect(
  mapStateToProps, {
    updateFormOption,
    cullAirlineSearchResults,
})(LocationSelection);
