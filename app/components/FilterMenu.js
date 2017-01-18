import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { RowLayout, ColumnLayout, Button } from './common';
import CustomText from './CustomText';
import Checkbox from './Checkbox';
import {
  checkFilterOption,
  toggleFilterModal,
  submitFilterOptions,
} from '../actions';

class FilterMenu extends Component {
  onSubmit() {
    const {
      toggleFilterModal,
      submitFilterOptions,
      selectedOption,
      allResults
    } = this.props;
    submitFilterOptions(selectedOption, allResults);
    toggleFilterModal(false);
  }

  render() {
    const {
      noPreference,
      directOnly,
      filterByOneStop,
      filterByTwoStops,
      filterModalOpen,
      checkFilterOption,
      selectedOption,
      submitFilterOptions,
      allResults
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomText>Filter by stops</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox
            checked={noPreference}
            handleEvent={checkFilterOption.bind(this, 'noPreference')}
          />
          <CustomText>No preference</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox
            onPress={() => { console.log('lol') }}
            checked={directOnly}
            handleEvent={checkFilterOption.bind(this, 'directOnly')}
          />
          <CustomText>Direct flights only</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox
            checked={filterByOneStop}
            handleEvent={checkFilterOption.bind(this, 'filterByOneStop')}
          />
          <CustomText>Up to 1 stop</CustomText>
        </View>

        <View style={styles.row}>
          <Checkbox
            checked={filterByTwoStops}
            handleEvent={checkFilterOption.bind(this, 'filterByTwoStops')}
          />
          <CustomText>Up to 2 stops</CustomText>
        </View>
        <View style={styles.button}>
          <Button
            style={{ borderRadius: 4 }}
            onPress={this.onSubmit.bind(this)}
            text={'SUBMIT'}
            backgroundColor={'#0172fc'}
            width={120}
            underlayColor={'#6aadff'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 20,
    // paddingLeft: 40,
    // backgroundColor: 'rgba(255, 255, 255, 0.925)',
    // borderLeftWidth: 1.5,
    // borderColor: 'rgb(240, 240, 240)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgb(236, 236, 236)',
    paddingBottom: 8,
    marginBottom: 15
  },
  button: {
    paddingTop: 20,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ booking }) => {
  const {
    allResults
  } = booking.bFlights.results;

  const {
    noPreference,
    directOnly,
    filterByOneStop,
    filterByTwoStops,
    filterModalOpen,
    selectedOption,
  } = booking.bFlights.filter;

  return {
    noPreference,
    directOnly,
    filterByOneStop,
    filterByTwoStops,
    filterModalOpen,
    selectedOption,
    allResults
  };
};

export default connect(
  mapStateToProps,
  {
    checkFilterOption,
    submitFilterOptions,
    toggleFilterModal
  }
)(FilterMenu);
