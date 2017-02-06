import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, ListView } from 'react-native';
import Drawer from 'react-native-drawer';
import ResultHeader from './ResultHeader';
import TravelDestinationBlock from './TravelDestinationBlock';
import FlightInfo from './FlightInfo';
import ColumnWrapper from './ColumnWrapper';
import Separator from './Separator';
import SearchResults from './SearchResults';
import FilterMenu from './FilterMenu';
import FilterConfig from './FilterConfig';
import SearchResultTitle from './SearchResultTitle';
import {
  extractTravelInfo,
  filterFlightsByStops,
  filterByAirline
 } from '../services';
import {
  toggleFilterModal,
  chooseFlightOption,
  expandFlightOptions
} from '../actions';
import {
  extractAvailableFlights,
  renderRoundTrip
 } from '../services/availableFlights';

class AvailableFlights extends Component {
  componentDidMount() {
    const {
      airportDepartLocation,
      airportReturnLocation,
      departDate,
      returnDate,
      toggleFilterModal,
    } = this.props;
    Actions.refresh({
      renderRightButton: () => {
        return (
          <FilterConfig
            toggleFilterModal={toggleFilterModal.bind(this)}
          />
        );
      },
      renderTitle: SearchResultTitle,
      titleProps: {
        airportDepartLocation,
        airportReturnLocation,
        departDate,
        returnDate
      }
    });
  }

  renderRow(data) {
    return renderRoundTrip(data, this.props);
  }

  render() {
    const { activeFilteredResults } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataSource = ds.cloneWithRows(activeFilteredResults.recommendations);

    return (
      <Drawer
        type = "overlay"
        content = {<FilterMenu />}
        side = 'right'
        tapToClose = {true}
        openDrawerOffset = {75}
        open = {false}
        panCloseMask={0.3}
      >
        <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <View style={styles.container}>
            <ListView
              enableEmptySections={true}
              dataSource={dataSource}
              renderRow={(data) => this.renderRow(data)}
            />
          </View>
        </ScrollView>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a55b2',
    borderColor: '#f5f2f2',
    paddingTop: 8,
    paddingBottom: 20,
  }
});

const mapStateToProps = ({ booking, searchParameters }) => {
  const {
    allResults,
    activeFilteredResults
  } = booking.bFlights.results;

  const {
    destinationMode
  } = searchParameters.flights.travelPreferences;

  const {
    departDate,
    returnDate
  } = searchParameters.flights.datePreferences;

  const {
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation,
  } = searchParameters.flights.locationPreferences;

  const {
    depart,
    destination
  } = searchParameters.flights.request.params;

  return {
    allResults,
    depart,
    destination,
    airportDepartCode,
    airportReturnCode,
    airportDepartLocation,
    airportReturnLocation,
    destinationMode,
    departDate,
    returnDate,
    activeFilteredResults
  };
};

export default connect(
  mapStateToProps,
  {
    toggleFilterModal,
    chooseFlightOption,
    expandFlightOptions
  }
)(AvailableFlights);
