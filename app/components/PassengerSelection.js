import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import CardContainer from './CardContainer';
import CardSlat from './CardSlat';
import Assets from '../images/Assets';
import Icon from './Icon';
import IncrementerButton from './IncrementerButton';
import CustomText from './CustomText';
import Collapsible from 'react-native-collapsible';
import {
  updatePassengerField,
  incrementAdultCount,
  decrementAdultCount,
  incrementChildCount,
  decrementChildCount,
  incrementInfantCount,
  decrementInfantCount,
  resetPassengerWarning
} from '../actions' ;

class PassengerSelection extends Component {
  render() {
    const {
      adultCount,
      childCount,
      infantCount,
      incrementAdultCount,
      decrementAdultCount,
      combinationError,
      incrementChildCount,
      decrementChildCount,
      incrementInfantCount,
      decrementInfantCount,
      resetPassengerWarning
    } = this.props;
    return (
      <CardContainer>

        <CardSlat>
          <Icon style={icon} source={Assets.adults} />
          <CustomText style={[text, textStyle(adultCount)]}>ADULTS</CustomText>
          <CustomText style={[subText, textStyle(adultCount)]}>(12+ YEARS)</CustomText>
          <IncrementerButton
            count={adultCount}
            onIncrement={incrementAdultCount.bind(this)}
            onDecrement={decrementAdultCount.bind(this)}
            resetPassengerWarning={resetPassengerWarning.bind(this)}
          />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.child} />
          <CustomText style={[text, textStyle(childCount)]}>CHILD</CustomText>
          <CustomText style={[subText, textStyle(childCount)]}>(2-11 YEARS)</CustomText>
          <IncrementerButton
            count={childCount}
            onIncrement={incrementChildCount.bind(this)}
            onDecrement={decrementChildCount.bind(this)}
            resetPassengerWarning={resetPassengerWarning.bind(this)}
          />
        </CardSlat>

        <CardSlat>
          <Icon style={icon} source={Assets.infant} />
          <CustomText style={[text, textStyle(infantCount)]}>INFANT</CustomText>
          <CustomText style={[subText, textStyle(infantCount)]}>(0-2 YEARS)</CustomText>
          <IncrementerButton
            count={infantCount}
            onIncrement={incrementInfantCount.bind(this)}
            onDecrement={decrementInfantCount.bind(this)}
            resetPassengerWarning={resetPassengerWarning.bind(this)}
          />
        </CardSlat>

        <Collapsible collapsed={combinationError.length < 1} >
          <View style={styles.warning}>
            <CustomText style={styles.warningText} size={12} color={'#df000e'}>{combinationError}</CustomText>
          </View>
        </Collapsible>

      </CardContainer>
    );
  }
}

const textStyle = (count) => {
  return (count > 0) ? { color: '#313131' } : { color: '#afafaf' };
}

const styles = StyleSheet.create({
  text: {
    color: '#afafaf',
    fontWeight: '500',
    fontSize: 14,
    paddingRight: 3,
    marginLeft: 9,
  },
  subText: {
    color: '#afafaf',
    fontSize: 11,
    paddingRight: 3,
  },
  icon: {
    marginTop: 5.5,
    marginBottom: 5.5,
    marginLeft: 9,
    marginRight: 9,
  },
  warning: {
    borderTopWidth: 1,
    borderColor: '#f2f2f2',
    backgroundColor: '#fafafa',
    height: 45,
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 18,
    paddingRight: 18
  },
  warningText: {
    textAlign: 'center'
  }
});

const { text, subText, icon } = styles;

const mapStateToProps = ({ searchParameters }) => {
  const {
    adultCount,
    childCount,
    infantCount,
    combinationError
  } = searchParameters.flights.passengers;

  return {
    adultCount,
    childCount,
    infantCount,
    combinationError
  };
};

export default connect(
  mapStateToProps,
  {
    updatePassengerField,
    incrementAdultCount,
    decrementAdultCount,
    incrementChildCount,
    decrementChildCount,
    incrementInfantCount,
    decrementInfantCount,
    resetPassengerWarning
  }
)(PassengerSelection);
