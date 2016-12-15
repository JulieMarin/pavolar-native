import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
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
    } = this.props;

    return (
      <CardContainer>
        <CardSlat style={{ zIndex: 2 }}>
          <Icon style={icon} source={Assets.leavingFrom} />
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
        </CardSlat>

        <CardSlat style={{ zIndex: 1 }}>
          <Icon style={icon} source={Assets.goingTo} />
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

const mapStateToProps = ({ main, mainStyle }) => {
  const {
    airportDepartCode,
    airportReturnCode,
    departData,
    returnData,
    airportDepartLocation,
    airportReturnLocation,
   } = main;

   const { autocomplete } = mainStyle

  return {
    airportDepartCode,
    airportReturnCode,
    departData,
    returnData,
    airportDepartLocation,
    airportReturnLocation,
    autocomplete
   }
}

export default connect(
  mapStateToProps, {
    updateFormOption,
    cullAirlineSearchResults,
})(LocationSelection);
